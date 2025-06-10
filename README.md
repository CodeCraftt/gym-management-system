# 🏋️‍♂️ GYM Management System — MERN Stack Project

This is a full-featured Gym Management System built with the **MERN Stack** (MongoDB, Express, React, Node.js). It provides a digital platform for gym owners and members to manage gym activities, payments, and communications.

---

## 🚀 Features Implemented So Far

### ✅ Authentication
- Secure **login/signup** for Admins and Members
- Role-based access control (`admin`, `member`)
- Token-based session using JWT

---

### 🧑‍💼 Admin Features
- **Dashboard** with personalized greeting
- Add **new members** with automatic account creation
- Assign and manage **fee packages**
- Generate **bill receipts** for members
- Create and send **in-app notifications**
- View and manage **member list**
- Full **navigation panel** with protected routes

---

### 🧍 Member Features
- **Dashboard** with personalized greeting
- View assigned **bill receipts**
- See **notifications** posted by admin
- Seamless login with default credentials created by admin
- Mobile responsive pages

---

### 🧱 General System Features
- Fully RESTful **backend API**
- **MongoDB Atlas** used for database in production
- **Tailwind CSS** + **Material UI** for a polished UI
- Responsive layout (desktop/tablet/mobile)
- Role-based **navigation bar**
- Modular code structure for easy scalability

---

## 📦 Tech Stack

| Technology | Usage |
|------------|--------|
| MongoDB    | Database (local & cloud via MongoDB Atlas) |
| Express.js | Backend Framework |
| React.js   | Frontend UI |
| Node.js    | Server environment |
| Tailwind CSS | Utility-first CSS for layout |
| Material UI | Styled UI components |
| JWT        | Authentication and Authorization |
| bcrypt.js  | Password hashing |

---

## 🔐 Default Admin/Member Behavior

- When an Admin adds a new member:
  - A **Member record** is created in the database
  - A corresponding **User login** is auto-generated with:
    - Default password: `default@123`
    - Role: `member`

---

## 📁 Project Structure (simplified)

