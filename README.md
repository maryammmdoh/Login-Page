# 🔐 Smart Login and Registration System

This is a front-end only **Login & Registration system** developed using **HTML**, **CSS**, and **JavaScript** with **Bootstrap 5**. It includes **form validation**, **personalized welcome**, and **localStorage-based user management** — ideal for learning client-side authentication logic.

---

## 🌟 Features

### ✅ User Registration:
- Validates input before account creation
- Prevents duplicate email registration
- Displays success or failure messages dynamically

### ✅ User Login:
- Checks email (case-insensitive) and password
- Shows alerts if email/password are incorrect or missing
- Displays a personalized `Welcome {username}` message

### ✅ Responsive Design:
- Layout adapts to mobile, tablet, and desktop screens using Bootstrap

### ✅ Validation Alerts:
- Input validation is performed using regular expressions (`RegEx`)
- Invalid inputs are shown with real-time feedback using `.is-valid` and `.is-invalid` classes

---

## 📋 Validation Rules

| Field      | Rule                                                                 |
|------------|----------------------------------------------------------------------|
| Name       | Only letters, numbers, spaces, `'`, `-`, and between 2–10 characters |
| Email      | Must be a valid format like `user@example.com`                       |
| Password   | Minimum 8 characters                                                 |
| Login      | Case-insensitive email match, exact password                         |

---

## 🛠 Technologies Used

- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript
- Google Fonts
- FontAwesome (icons)

---

## 🧠 Learning Outcomes
This project is perfect if you're learning:

- DOM manipulation
- Form validation using RegEx
- Working with localStorage
- Bootstrap 5 responsive layout
- Clean UI structure using sections
