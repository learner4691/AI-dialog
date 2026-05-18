# AI-dialog
AI чат-приложение (Frontend + Backend)

## 🧪 Requirements
### Backend
- Node.js 13+
- Express
- npm

### Frontend
- React
- styled-components
- npm

## 📦 Архитектура
### 🖥 Backend (Node.js + Express + TypeScript)
```
dialog-server/
├─ src/
│  ├─ app.js
│  ├─ server.js
│  ├─ routes/chat.route.js
│  ├─ controllers/chat.controller.js
│  ├─ services/openai.service.js
│  ├─ services/mock.service.js
│  ├─ services/ai.service.js
│  └─ types/
├─ .env
```

### 🔹 Логика backend
- POST /api/chat
- вход: { message: string }
- обработка:
  - если есть OPENAI_API_KEY → OpenAI API
  - если нет → mock-ответ
- ответ: { reply: string }

### 💻 Frontend (React + styled-components)
```
dialog-frontend/
├─ src/
│  ├─ containers/ChatContainer.jsx
│  ├─ components/Chat.jsx
│  ├─ components/MessageList.jsx
│  ├─ components/MessageInput.jsx
│  ├─ App.jsx
│  ├─ index.jsx
│  ├─ index.html
│  └─ style.css
```

## 🔹 Логика UI
1. пользователь вводит сообщение  
2. отправка на backend  
3. отображается loading  
4. приходит ответ  
5. сообщение добавляется в чат  

## 🎨 UI поведение
- User → справа (синий фон)
- AI → слева (синий фон)

## 🤖 OpenAI API integration
Интеграция OpenAI API уже реализована.

### 🔓 Включение реального API
- добавьте OPENAI_API_KEY в .env
- установите useOpenAI = true в src/services/ai.service.js

### 📄 Пример .env
```env
OPENAI_API_KEY=your_api_key_here
PORT=3001
```

### 🔄 Поведение системы
- есть ключ → используется OpenAI API
- нет ключа → используется mock service

---
## 🚀 Установка и запуск
### ▶️ Клонирование проекта
```bash
git clone https://github.com/learner4691/AI-dialog.git
cd AI-dialog
```
---

### ▶️ Backend запуск
⚠️ Для Node 13 иногда требуется ручная установка cors
```bash
cd dialog-server
npm install 
npm install cors  
npm run dev
```

Backend:
```
http://localhost:3001/api/chat
```

---
### ▶️ Frontend запуск
```bash
cd dialog-frontend
npm install
npm start
```

Frontend:
```
http://localhost:3000
```
---

## 🔗 Проверка работы
- открыть frontend  
- ввести сообщение  
- получить ответ от AI / mock  

## ⚙️ Примечание
- если `OPENAI_API_KEY` не задан → приложение работает в demo режиме  
- проект полностью запускается локально без API ключа