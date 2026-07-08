const { db, admin } = require("./config/firebase");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/chat", async (req, res) => {
  try {
    const { messages } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const conversation = messages
      .map((msg) => `${msg.sender}: ${msg.text}`)
      .join("\n");

    const prompt = `
You are ResolveAI.

You are an AI Customer Care Executive.

Your responsibilities are:

- Order Tracking
- Delivery Issues
- Refunds
- Returns
- Payment Problems
- Account Support

-------------------------------------------------

Return ONLY valid JSON.

Do NOT return markdown.

Do NOT return \`\`\`json

Do NOT explain anything.

Return EXACTLY this structure:

{
  "reply":"",
  "needsTicket":false,
  "priority":"Low",
  "department":"General",
  "issueType":"General",
  "emotion":"Neutral",
  "summary":""
}

-------------------------------------------------

Allowed values:

priority:

Low
Medium
High

department:

Orders
Finance
Delivery
Returns
Accounts
General

issueType:

Order
Payment
Refund
Delivery
Return
Account
General

emotion:

Happy
Neutral
Frustrated
Angry

-------------------------------------------------

Rules

1. Reply politely.

2. Maximum 80 words.

3. Never invent order IDs.

4. Never invent payment status.

5. Ask only ONE follow-up question if needed.

6. If customer is angry, apologize.

7. If issue likely requires human support:

needsTicket = true

Examples:

"My payment was deducted"

→ needsTicket = true

"Refund not received"

→ true

"Order delayed"

→ true

"What are your timings?"

→ false

"Hello"

→ false

-------------------------------------------------

Conversation:

${conversation}

Return ONLY JSON.
`;

    const result = await model.generateContent(prompt);

    let aiResponse;

    try {
      aiResponse = JSON.parse(result.response.text());
    } catch (err) {
      console.log("JSON Parse Error");

      console.log(result.response.text());

      aiResponse = {
        reply:
          "I'm sorry, something went wrong while understanding your request.",
        needsTicket: false,
        priority: "Low",
        department: "General",
        issueType: "General",
        emotion: "Neutral",
        summary: "Parsing failed",
      };
    }

    res.json({
      success: true,
      reply: aiResponse.reply,
      analysis: {
        needsTicket: aiResponse.needsTicket,
        priority: aiResponse.priority,
        department: aiResponse.department,
        issueType: aiResponse.issueType,
        emotion: aiResponse.emotion,
        summary: aiResponse.summary,
      },
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: "Server Error",
    });

  }
});

app.post("/create-ticket", async (req, res) => {
  try {
    const { analysis } = req.body;

    // Generate professional ticket ID
    const today = new Date();

    const date =
      today.getFullYear().toString() +
      String(today.getMonth() + 1).padStart(2, "0") +
      String(today.getDate()).padStart(2, "0");

    const random = Math.floor(1000 + Math.random() * 9000);

    const ticket = {
      id: `RA-${date}-${random}`,
      status: "Open",
      priority: analysis.priority,
      department: analysis.department,
      issueType: analysis.issueType,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    };
    await db.collection("tickets").doc(ticket.id).set(ticket);

    const savedTicket = await db
      .collection("tickets")
      .doc(ticket.id)
      .get();
    
    res.json({
      success: true,
      ticket: savedTicket.data(),
    });
    

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to create ticket",
    });
  }
});
app.get("/tickets", async (req, res) => {
  try {

    const snapshot = await db
      .collection("tickets")
      .orderBy("createdAt", "desc")
      .get();

    const tickets = snapshot.docs.map(doc => doc.data());

    res.json({
      success: true,
      tickets,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch tickets",
    });

  }
});

app.get("/dashboard-stats", async (req, res) => {
  try {

    const snapshot = await db.collection("tickets").get();

    const tickets = snapshot.docs.map(doc => doc.data());

    const totalTickets = tickets.length;

    const openTickets = tickets.filter(
      ticket => ticket.status === "Open"
    ).length;

    const highPriority = tickets.filter(
      ticket => ticket.priority === "High"
    ).length;

    const departments = [...new Set(
      tickets.map(ticket => ticket.department)
    )].length;

    const recentTickets = tickets
      
      .sort((a, b) => {
        if (!a.createdAt || !b.createdAt) return 0;
      
        return (
          b.createdAt.toMillis() -
          a.createdAt.toMillis()
        );
      })
      .slice(0, 5);
      const departmentCount = {};

tickets.forEach(ticket => {
  departmentCount[ticket.department] =
    (departmentCount[ticket.department] || 0) + 1;
});

const topDepartment =
  Object.entries(departmentCount)
    .sort((a, b) => b[1] - a[1])[0];

    res.json({
      success: true,
        stats: {
          totalTickets,
          openTickets,
          highPriority,
          departments,
          recentTickets,
          departmentCount,
          topDepartment,
        
      },
    });
    

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      error: "Failed to fetch dashboard stats",
    });

  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});