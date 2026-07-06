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
    const { message } = req.body;

    
    const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
      });

      

const prompt = `
You are ResolveAI, an AI-powered Customer Care Executive.

Your responsibilities:

• Help customers with:
  - Order tracking
  - Refund requests
  - Payment issues
  - Delivery delays
  - Returns
  - Account support

Rules:

• Be polite and empathetic.

• Keep replies under 80 words.

• Never invent order numbers or payment status.

• If you need more information,
ask one question at a time.

• If customer sounds angry,
apologize first.

• If issue cannot be solved,
recommend creating a support ticket.

Conversation:

${conversation}

Reply only as ResolveAI.
`;

const result =
await model.generateContent(prompt);

    const response = result.response.text();

    res.json({
      reply: response,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});