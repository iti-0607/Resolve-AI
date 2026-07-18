# 🤖 ResolveAI

ResolveAI is an AI-powered Customer Care Platform that automates customer support using Google Gemini AI. It helps customers resolve common issues through an intelligent chatbot, automatically analyzes conversations, generates structured support tickets, and provides a dashboard for ticket management and analytics.

---

## 🌐 Live Demo

**Frontend (Vercel):**  
https://resolve-ai-psi.vercel.app

**Backend (Render):**  
https://resolve-ai-backend-dm03.onrender.com

---

## 🎥 Demo Video

https://youtu.be/8X1ElRPI1ZM

## ✨ Features

### 🤖 AI Customer Support
- AI-powered chatbot using Google Gemini 2.5 Flash
- Context-aware conversations
- Order tracking assistance
- Refund & return support
- Payment issue handling
- Delivery issue support
- Account support

### 🧠 AI Ticket Analysis
- Automatic issue classification
- Customer emotion detection
- Priority prediction (Low / Medium / High)
- Department routing
- AI-generated case summary
- Smart ticket recommendation

### 🎫 Ticket Management
- Automatic ticket creation
- Professional ticket ID generation
- Ticket history
- Ticket details modal
- Firebase Firestore integration

### 📊 Dashboard
- Total Tickets
- Open Tickets
- High Priority Tickets
- Department Statistics
- AI Insights
- Recent Tickets

### 🎨 User Experience
- Modern responsive UI
- Quick action cards
- Typing indicator
- Interactive chat interface
- Dashboard analytics
- Professional ticket cards

---

# 🛠 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React

## Backend
- Node.js
- Express.js

## Deployment

- Frontend: Vercel
- Backend: Render

## AI
- Google Gemini 2.5 Flash API

## Database
- Firebase Firestore

---

# 📂 Project Structure

```
ResolveAI
│
├── client
│   ├── src
│   ├── components
│   ├── pages
│   └── services
│
├── server
│   ├── config
│   ├── server.js
│   └── .env
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/iti-0607/Resolve-AI.git
```

## Frontend

```bash
cd client
npm install
npm run dev
```

## Backend

```bash
cd server
npm install
node server.js
```

---

# 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID

FIREBASE_CLIENT_EMAIL=YOUR_FIREBASE_CLIENT_EMAIL

FIREBASE_PRIVATE_KEY=YOUR_FIREBASE_PRIVATE_KEY
```

---

# 📸 Application Modules

- 🤖 AI Chat
- 🧠 AI Analysis
- 🎫 Ticket Generation
- 📋 Ticket Management
- 📊 Dashboard Analytics

---

# 💡 How It Works

1. Customer starts a conversation with ResolveAI.
2. Google Gemini AI understands the customer's issue.
3. The AI analyzes:
   - Issue Type
   - Priority
   - Customer Emotion
   - Department
   - AI Summary
4. If the issue requires human assistance, a support ticket can be created.
5. The ticket is stored securely in Firebase Firestore.
6. Support teams can view tickets and analytics through the dashboard.

---

# 🔮 Future Enhancements

- User Authentication
- Admin & Customer Roles
- Support Agent Workflow
- Email Notifications
- Multi-language Support
- Voice-based Customer Support
- AI Knowledge Base Integration

---
## 📄 License

This project was developed as part of a hackathon submission.

---

# 👨‍💻 Developed By

**Iti Agrawal**

B.Tech Computer Science & Engineering  
SVNIT Surat