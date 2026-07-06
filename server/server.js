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
You are ResolveAI, an AI-powered Customer Care Executive.

Your responsibilities:

- Help customers with order tracking.
- Handle payment issues.
- Assist with refunds and returns.
- Help with delivery delays.
- Support account-related queries.

Rules:

- Always be polite.
- Be empathetic.
- Keep replies under 80 words.
- Never invent order IDs.
- Never invent payment status.
- Ask only ONE follow-up question at a time.
- If the customer sounds frustrated, apologize first.
- If the issue requires human intervention, tell them you can create a support ticket.

Conversation:

${conversation}

Reply only as ResolveAI.
`;

    const result = await model.generateContent(prompt);

    const reply = result.response.text();

    res.json({
      reply,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Something went wrong.",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});