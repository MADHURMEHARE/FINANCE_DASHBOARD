# 💰 Finance Data Processing & Access Control Backend

## 🚀 Overview

This project is a backend system designed to manage financial records with **role-based access control** and **secure authentication**.

It enables different types of users to interact with financial data based on their roles and provides **dashboard-level analytics** for insights.

---

## 🧠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB Atlas (Cloud Database)**
* **Mongoose**
* **JWT Authentication**
* **bcrypt (Password Hashing)**

---

## 💾 Data Persistence

This project uses **MongoDB Atlas (cloud-based NoSQL database)** for data persistence.

### 🔍 Why MongoDB?

* Flexible schema for financial data
* Easy integration with Node.js
* Faster development and prototyping
* Suitable for scalable applications

### 📌 Note on RDBMS

Relational databases (like MySQL/PostgreSQL) are also suitable for this use case.
The system is designed in a modular way and can be easily adapted to an RDBMS by defining relational schemas and relationships.

---

## 🔐 Features

### Authentication & Security

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication
* Rate limiting to prevent brute-force attacks

---

### 👥 Role-Based Access Control

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Viewer  | View records only                    |
| Analyst | View records + dashboard             |
| Admin   | Full access (CRUD + user management) |

---

### 💰 Financial Records

* Create, Read, Update, Delete records
* Filtering by:

  * type (income/expense)
  * category
* Pagination support
* Input validation
* Soft delete (optional enhancement)

---

### 📊 Dashboard APIs

* Total Income
* Total Expense
* Net Balance
* Category-wise breakdown

---

### ⚙️ Additional Enhancements

* Pagination (`page`, `limit`)
* Filtering (`type`, `category`)
* Rate Limiting (API protection)
* Secure environment variable handling

---

## 📌 API Endpoints

### 🔐 Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

---

### 👤 Users (Admin only)

* `GET /api/users`
* `PUT /api/users/:id/status`

---

### 💰 Records

* `POST /api/records` (Admin)
* `GET /api/records` (All roles)
* `PUT /api/records/:id` (Admin)
* `DELETE /api/records/:id` (Admin)

---

### 📊 Dashboard

* `GET /api/dashboard` (Analyst, Admin)

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd finance-backend
```

---

### 2️⃣ Install dependencies

```bash
npm install
```

---

### 3️⃣ Create `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the server

```bash
npm run dev
```

---

## 🔑 Environment Variables

This project uses environment variables for configuration.

Create a `.env` file using `.env.example` as reference.

### ⚠️ Important

* Do NOT commit `.env` to version control
* Use your own MongoDB Atlas connection string

---

## 🧪 Testing

APIs were tested using Postman.

### Example Login Request

```json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

---

## ⚠️ Assumptions

* Roles are predefined: viewer, analyst, admin
* JWT is used for authentication
* MongoDB Atlas is used for cloud data storage

---

## 🧪 Edge Cases Handled

* Missing or invalid input
* Unauthorized access
* Invalid or missing token
* Record not found
* Rate limit exceeded

---
## 🧪 Testing Guide

All APIs were tested using Postman.

---

### 🔐 1. Register User

**POST** `/api/auth/register`

```json
{
  "name": "Admin",
  "email": "admin@test.com",
  "password": "123456",
  "role": "admin"
}
```

---

### 🔐 2. Login

**POST** `/api/auth/login`

```json
{
  "email": "admin@test.com",
  "password": "123456"
}
```

👉 Copy the JWT token from response.

---

### 🔑 3. Authorization Header

Add this header to protected routes:

```
Authorization: Bearer <token>
```

---

### 💰 4. Create Record

**POST** `/api/records`

```json
{
  "amount": 5000,
  "type": "income",
  "category": "salary",
  "note": "first income"
}
```

---

### 📄 5. Get Records (Pagination)

**GET** `/api/records?page=1&limit=5`

---

### 🔍 6. Filter Records

* By type: `/api/records?type=income`
* By category: `/api/records?category=salary`

---

### ✏️ 7. Update Record

**PUT** `/api/records/:id`

```json
{
  "amount": 7000
}
```

---

### ❌ 8. Delete Record

**DELETE** `/api/records/:id`

---

### 📊 9. Dashboard

**GET** `/api/dashboard`

Expected response:

```json
{
  "totalIncome": 7000,
  "totalExpense": 0,
  "netBalance": 7000
}
```

---

### 🔐 10. Role-Based Access Testing

* Viewer → Cannot create/update/delete ❌
* Analyst → Can view + dashboard ✅
* Admin → Full access ✅

---

### 🚫 11. Rate Limiting

Repeated login attempts:

**POST** `/api/auth/login`

After limit:

```json
{
  "message": "Too many login attempts, try later"
}
```

---

### ✅ Summary

The system was tested for:

* Authentication & authorization
* CRUD operations
* Pagination & filtering
* Role-based access control
* Rate limiting
* Error handling


## 🏁 Conclusion

This project demonstrates:

* Clean backend architecture
* Secure authentication and authorization
* Scalable API design with pagination and filtering
* Cloud-based data persistence using MongoDB Atlas

The system is designed to be extensible and can be adapted to relational databases if required.

---

## 👨‍💻 Author

**Madhur Mehare**
