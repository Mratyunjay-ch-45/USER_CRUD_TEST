# 🧑‍💻 USER\_CRUD\_TEST — MERN Stack CRUD App with Testing

A full-stack user management system built using **MongoDB, Express.js, React, and Node.js**, complete with **RESTful APIs**, a clean React frontend, and **automated testing using Jest and Supertest**.

---

## ✨ Features

- ✅ User Signup & Login
- 🔍 Get User by Email
- ✏️ Update User Details
- ❌ Delete User Account
- 📆 MongoDB + Mongoose Integration
- 🧲 Unit, Integration & API Testing
- 🎨 Responsive UI with React & Tailwind CSS

---

## 📌 Technologies Used

| Layer      | Technology           |
| ---------- | -------------------- |
| Frontend   | React + Tailwind CSS |
| Backend    | Node.js + Express.js |
| Database   | MongoDB + Mongoose   |
| Testing    | Jest + Supertest     |
| API Format | RESTful + JSON       |

---

## 📘 API Endpoints

| Method | Endpoint                         | Description                  |
| ------ | -------------------------------- | ---------------------------- |
| POST   | `/api/auth/signup`               | Register a new user          |
| POST   | `/api/auth/login`                | Login with email & password  |
| GET    | `/api/auth/getuser?email=...`    | Retrieve user by email       |
| PUT    | `/api/auth/updateuser?email=...` | Update user data by email    |
| DELETE | `/api/auth/deleteuser?email=...` | Delete user account by email |

---

## 🧲 Testing Overview

This project includes **unit, integration, and API tests** using:

- **Jest** — JavaScript testing framework.
- **Supertest** — HTTP assertions for API routes.

### ✅ Run Tests:

```bash
npm run test
```

> This runs all test suites with code coverage enabled.

### 🚽 Sample API Test (Login):

```js
it("should return 400 for invalid email", async () => {
  const res = await request(app).post("/api/auth/login").send({
    email: "wrong@example.com",
    password: "wrongpass"
  });
  expect(res.statusCode).toBe(400);
});
```

---

## 📊 Test Coverage Screenshot



> You can find this image in the `screenshots/` folder. It shows coverage percentage for each layer (controller, model, route).

---

## ⚙️ How to Run the Project

### 1. 📦 Clone the Repository

```bash
git clone https://github.com/Mratyunjay-ch-45/USER_CRUD_TEST.git
cd USER_CRUD_TEST
```

---

### 2. 🔧 Run the Backend

```bash
cd backend
npm install
node server.js
```

> Server starts at `http://localhost:8000`

---

### 3. 🌐 Run the Frontend

```bash
cd frontend/react-app
npm install
npm run dev
```

> React app runs at `http://localhost:5173`

---

### 🔗 Frontend Pages to Access APIs

| Page        | URL                                |
| ----------- | ---------------------------------- |
| Signup      | `http://localhost:5173/signup`     |
| Login       | `http://localhost:5173/login`      |
| Get User    | `http://localhost:5173/getuser`    |
| Update User | `http://localhost:5173/updateuser` |
| Delete User | Button available on Update page    |

---

## 📂 MongoDB Configuration

Make sure MongoDB is running locally or remotely and your connection string is set in `server.js`:

```js
mongoose.connect("mongodb://127.0.0.1:27017/Keploy");
```

---

