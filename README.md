# 🧑‍💻 USER_CRUD_TEST — MERN Stack

This is a full-stack user management system built using **MongoDB, Express, React, and Node.js**. It includes a complete set of **RESTful APIs** for managing users along with a responsive frontend for interaction.

---

## 🚀 Features

- User Signup and Login
- Get User by Email
- Update User Details
- Delete User Account
- Clean and responsive frontend UI (React + Tailwind CSS)

---

## 📌 Technologies Used

| Layer      | Technology     |
|------------|----------------|
| Frontend   | React + Tailwind CSS |
| Backend    | Node.js + Express |
| Database   | MongoDB (with Mongoose) |
| API Format | RESTful + JSON |

---

## 📘 API Endpoints

| Method | Endpoint                            | Description                     |
|--------|-------------------------------------|---------------------------------|
| POST   | `/api/auth/signup`                  | Register a new user             |
| POST   | `/api/auth/login`                   | Login with email & password     |
| GET    | `/api/auth/getuser?email=...`       | Retrieve user by email          |
| PUT    | `/api/auth/updateuser?email=...`    | Update user data by email       |
| DELETE | `/api/auth/deleteuser?email=...`    | Delete user account by email    |

---

## 🧪 Sample API Requests

### 🔹 Signup

```http
POST /api/auth/signup
Content-Type: application/json

{
  "fname": "John",
  "lname": "Doe",
  "dob": "2000-01-01",
  "email": "john@example.com",
  "password": "secure123",
  "gender": "male"
}
```

### 🔹 Login

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "secure123"
}
```

### 🔹 Get User

```http
GET /api/auth/getuser?email=john@example.com
```

### 🔹 Update User

```http
PUT /api/auth/updateuser?email=john@example.com
Content-Type: application/json

{
  "fname": "Johnny",
  "gender": "male"
}
```

### 🔹 Delete User

```http
DELETE /api/auth/deleteuser?email=john@example.com
```

---

## 🧰 Database Integration

This project uses **MongoDB** as the database, and **Mongoose** for object modeling.

- Connect to MongoDB in `server.js`:
```js
mongoose.connect("mongodb://127.0.0.1:27017/Keploy");

```

- Define user schema in `models/User.js`:
```js
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  dob: Date,
  email: String,
  password: String,
  gender: String
});
```

---

## ⚙️ How to Run the Project

### 📦 1. Clone the Repository

```bash
git clone https://github.com/Mratyunjay-ch-45/USER_CRUD_TEST.git

```

---

### 🔧 2. Run the Backend

```bash
cd backend
npm install
node server.js
```

> Your server will start on `http://localhost:8000`

---

### 🌐 3. Run the Frontend 

```bash
cd frontend
cd react-app
npm install
npm run dev
```

> React app will open at `http://localhost:5173`
```

manually go to this frontend routes to test the API's

1.Signup:http://localhost:5173/signup
2.Login:http://localhost:5173/login
3.Get User:http://localhost:5173/getuser
4.Update User:http://localhost:5173/updateuser 
5.Delete User:The Update user page have a delete button to delete the user directly from there

```

