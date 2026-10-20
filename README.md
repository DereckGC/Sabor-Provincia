<div align="center">

# 🍝 Sabor & Provincia

**Rescuing the culinary heritage of Turrialba, one recipe at a time.**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Express](https://img.shields.io/badge/Express-5-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![AI](https://img.shields.io/badge/AI-Gemini_Flash-8E75B2?style=flat-square&logo=google&logoColor=white)](https://openrouter.ai/)

</div>

---

## ✨ What is Sabor & Provincia?

Sabor & Provincia is a culinary web platform focused on **rescuing and promoting traditional recipes from Turrialba, Cartago, Costa Rica**. More than a digital cookbook, it's an interactive experience that blends cultural storytelling, voice-powered conversational AI, and a warm visual design inspired by the Turrialba kitchen.

### 🎯 Purpose

Preserve the gastronomic identity of the Cartago province by connecting users with authentic recipes, the stories behind local ingredients, and the community of creators who make this project possible.

---

## 🧠 Chef Turrialba — Voice AI Assistant

The centerpiece of the experience. **Chef Turrialba** is a conversational cooking assistant that guides users step-by-step through each recipe, speaking in **Costa Rican Spanish with natural voseo**.

| Capability | Detail |
|---|---|
| 🎤 **Input** | Web Speech Recognition API (`es-CR`) |
| 🔊 **Output** | Speech Synthesis API with smart Spanish voice selection |
| 🤖 **Model** | Gemini 2.0 Flash via OpenRouter |
| 🎭 **Personality** | Warm, precise, sensory — never breaks character |

The assistant uses a **detailed system prompt** containing the full recipe, step-by-step flow control, off-topic handling, and strict formatting constraints (plain text, no markdown) to ensure clean speech synthesis output.

---

## 🏗️ Architecture

```
Sabor & Provincia/
├── Front-End/                  # React + Vite SPA
│   └── src/
│       ├── features/           # Feature-based modules
│       │   ├── hero/           # Main visual landing
│       │   ├── historia/       # Origin storytelling
│       │   ├── receta/         # Ingredients + steps (tabbed UI)
│       │   ├── contribuidores/ # Contributor cards
│       │   ├── suscripcion/    # Lead capture form
│       │   └── asistente/      # Chef Turrialba (voice + AI)
│       ├── components/         # Layout, Navbar, Footer, HoverText
│       ├── services/           # API client (Axios) + OpenRouter
│       ├── hooks/              # useOnScreen (Intersection Observer)
│       ├── prompts/            # Chef system prompt
│       └── styles/             # CSS variables, typography, globals
│
└── Back-End/                   # Express REST API
    ├── routes/                 # Modular routing
    ├── controllers/            # Business logic
    ├── models/                 # Mongoose schemas
    ├── config/                 # DB connection + env
    └── data/                   # Local JSON persistence
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|---|---|
| **UI** | React 19, React Router 7, React Icons |
| **Build** | Vite 8 |
| **Styling** | Vanilla CSS with design tokens, Animate.css, Google Fonts (DM Serif Display, DM Sans, Elsie) |
| **AI** | Gemini 2.0 Flash via OpenRouter API |
| **Voice** | Web Speech Recognition + Speech Synthesis (browser-native) |
| **HTTP Client** | Axios |
| **Backend** | Express 5, CORS |
| **Database** | MongoDB + Mongoose 9 |
| **Package Manager** | pnpm |

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- pnpm
- MongoDB (local or Atlas)
- API Key from [OpenRouter](https://openrouter.ai/)

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/Sabor-Provincia.git
cd Sabor-Provincia/Sabor\ \&\ Provincia
```

**Back-End:**
```bash
cd Back-End
pnpm install

# Create .env file
echo "PORT=5000" > .env
echo "DB_CS=your_mongodb_connection_string" >> .env

node index.js
```

**Front-End:**
```bash
cd Front-End
pnpm install

# Create .env file
echo "VITE_OPENROUTER_API_KEY=your_api_key" > .env

pnpm dev
```

---

## 🌟 Features

- **Immersive landing** with hero visuals and scroll-triggered animations (Intersection Observer + Animate.css)
- **Interactive recipe** with tabbed ingredients and step-by-step procedure
- **Voice AI assistant** that cooks with you in real time
- **Subscription system** with lead capture connected to the backend
- **Contributors section** showcasing project collaborators
- **Cultural storytelling** about the origin and traditions behind each recipe

---

<div align="center">

Made with 🧡 from Turrialba, Costa Rica

</div>