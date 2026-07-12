# 🤖 ResolveAI

ResolveAI is an AI-powered Customer Care Platform that automates customer support using Google Gemini AI. It helps customers resolve common issues through an intelligent chatbot, automatically analyzes conversations, generates support tickets, and provides an admin dashboard for ticket management and analytics.

---

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
- Professional ticket IDs
- Ticket history
- Ticket details modal
- Ticket status tracking
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
- Beautiful chat interface
- Interactive dashboard
- Premium ticket cards

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

---

## Frontend

```bash
cd client
npm install
npm run dev
```

---

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
```

Also configure Firebase Admin SDK:

```
server/config/firebase.js
```

and place your Firebase Service Account credentials accordingly.

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
2. Gemini AI understands the issue.
3. AI analyzes:
   - Issue Type
   - Priority
   - Customer Emotion
   - Department
   - Summary
4. If required, a support ticket is created automatically.
5. Ticket is stored in Firebase Firestore.
6. Support team can view tickets and analytics from the dashboard.

---

# 🔮 Future Enhancements

- User Authentication
- Admin & Customer Roles
- Email Notifications
- Ticket Status Workflow
- Multi-language Support
- Voice-based Customer Support
- AI Knowledge Base Integration

---

# 👨‍💻 Developed By

**Iti**

B.Tech CSE, SVNIT Surat
