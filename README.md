# 🌐 Auction System Frontend

This is the frontend for the Auction System built using React (Vite). It connects to the backend API to manage users, auctions, and admin dashboard.

---

## 🚀 Tech Stack

* React.js (Vite)
* Axios
* React Router
* Tailwind CSS (if used)

---

## 📁 Project Setup

### 1. Navigate to client folder

```bash
cd client
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Create a `.env` file:

```env
VITE_API=http://localhost:5000
VITE_AUCTION_API=http://localhost:5000/auction
```

---

### 4. Run the frontend

```bash
npm run dev
```

App will run on:

```
http://localhost:5173
```

---

## 🔗 API Usage

All API calls are made using:

```js
const API = import.meta.env.VITE_API;
```

Example:

```js
axios.post(`${API}/api/auth/login`, data)
axios.get(`${API}/api/admin/dashboard`)
```

---

## 🔐 Demo Login

```json
{
  "email": "testuser@gmail.com",
  "password": "12345678"
}
```
## 🌐 Live Demo

- Frontend: https://biddingnest.netlify.app/
- Backend API: https://ap-backend-l7u7.onrender.com
