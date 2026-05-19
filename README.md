# AI-dialog
AI чат-приложение (Frontend + Backend)

## 📦 Архитектура

### Backend (Node.js + Express + TypeScript)
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

### Логика backend:
- POST /api/chat
- вход: { message: string }
- обработка:
  - если есть OPENAI_API_KEY → OpenAI API
  - если нет → mock-ответ
- ответ: { reply: string }

### Frontend (React + styled-components)
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

### Логика UI:
1. пользователь вводит сообщение  
2. отправка на backend  
3. loading  
4. ответ от сервера  
5. отображение в чате  

### UI поведение:
- user → справа (синий фон)
- AI → слева (синий фон)

## 🤖 OpenAI API integration
Интеграция API OpenAI реализована и готова.

### Для включения реального API:
- добавьте OPENAI_API_KEY в файле .env
- установите useOpenAI = true в файле src/services/ai.service.js

### Пример .env:
OPENAI_API_KEY=your_api_key_here
PORT=3001

### Поведение:
- если есть OPENAI_API_KEY → используется OpenAI API
- если нет → используется mock service


## 🚀 Установка и запуск

### 1. Клонирование проекта
git clone https://github.com/learner4691/AI-dialog.git
cd AI-dialog

### 2. Backend запуск
⚠️ Для Node 13 иногда требуется ручная установка cors
cd dialog-server
npm install
npm install cors
npm run dev

--------------

Backend: http://localhost:3001/api/chat

### 3. Frontend запуск
cd dialog-frontend
npm install
npm start

Frontend: http://localhost:3000

## 🔗 Проверка
1. открыть frontend
2. ввести сообщение
3. получить ответ от AI или mock

## ⚙️ Примечание

Если OPENAI_API_KEY не задан — приложение работает в demo режиме.



