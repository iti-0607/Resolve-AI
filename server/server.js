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
app.post("/create-ticket", (req, res) => {

  const { analysis } = req.body;

  const ticket = {
    id: "RA-" + Math.floor(1000 + Math.random() * 9000),
    status: "Open",
    priority: analysis.priority,
    department: analysis.department,
    issueType: analysis.issueType,
    createdAt: new Date().toLocaleString(),
  };

  res.json({
    success: true,
    ticket,
  });

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});