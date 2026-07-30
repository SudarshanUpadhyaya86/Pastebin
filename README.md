# 🚀 PasteBin - Full Stack Paste Sharing Application

A modern PasteBin web application that allows users to create, view, share, and delete text snippets. Built with React, Express.js, Supabase, and Docker, and deployed using Vercel and Render.

## 🌐 Live Demo

**Frontend:** https://pastebin-nu-two.vercel.app

**Backend API:** https://pastebin-backend-su7v.onrender.com

**Swagger API Docs:** https://pastebin-backend-su7v.onrender.com/api-docs

---

# ✨ Features

- 📝 Create text pastes
- 📋 View all pastes
- 🔍 View individual pastes
- 🗑 Delete pastes
- 🔗 Share pastes using the Web Share API
- 📖 Swagger API documentation
- 🐳 Docker support
- ☁️ Cloud deployment
- ⚡ Fast React frontend using Vite

---

# 🛠 Tech Stack

### Frontend
- React
- Vite
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js

### Database
- Supabase (PostgreSQL)

### API Documentation
- Swagger UI

### Deployment
- Vercel
- Render

### Containerization
- Docker
- Docker Compose

---

# 📂 Project Structure

```
Pastebin/
│
├── backend/
│   ├── routes/
│   ├── swagger/
│   ├── server.js
│   ├── Dockerfile
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── styles/
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

# 🚀 Getting Started

## Clone the repository

```bash
git clone https://github.com/SudarshanUpadhyaya86/Pastebin.git
cd Pastebin
```

---

# Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

Example:

```env
SUPABASE_URL=YOUR_SUPABASE_URL
SUPABASE_KEY=YOUR_SUPABASE_ANON_KEY
PORT=5000
```

Start the backend:

```bash
npm start
```

Runs on:

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🐳 Running with Docker

Build and start the application:

```bash
docker compose up --build
```

Stop the containers:

```bash
docker compose down
```

---

# 📖 API Documentation

Swagger UI is available at:

```
http://localhost:5000/api-docs
```

or

```
https://pastebin-backend-su7v.onrender.com/api-docs
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|----------|----------------|------------------------|
| POST | `/pastes` | Create a new paste |
| GET | `/pastes` | Get all pastes |
| GET | `/pastes/:id` | Get a single paste |
| DELETE | `/pastes/:id` | Delete a paste |

---

# 🔄 Application Architecture

```
                User
                  │
                  ▼
          React + Vite Frontend
                  │
             Axios HTTP Client
                  │
                  ▼
        Express.js REST API
                  │
                  ▼
       Supabase PostgreSQL Database
```

---

# 📷 Screenshots

Add screenshots here.

Example:

```
screenshots/

Home.png

ViewPaste.png

Swagger.png
```

---

# 🌍 Deployment

## Frontend

Hosted on **Vercel**

## Backend

Hosted on **Render**

## Database

Hosted on **Supabase**

---

# 📌 Future Improvements

- User authentication
- Syntax highlighting
- Paste expiration
- Password protected pastes
- Search functionality
- Edit existing pastes
- Dark mode
- Copy to clipboard button
- Code language detection

---

# 👨‍💻 Author

**H. Sudarshan Upadhyaya**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_PROFILE

---

# 📄 License

This project is developed for educational purposes.
