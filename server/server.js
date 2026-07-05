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
You are ResolveAI.

You are a professional AI customer care assistant.

Rules:

- Always be polite.

- Never invent customer data.

- If customer reports payment issue,
ask Order ID.

- If customer reports refund,
explain refund process.

- If customer is angry,
apologize.

- Keep responses under 80 words.

Customer Message:

${message}
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