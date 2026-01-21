☕ Caffeine Cove – React Frontend

واجهة أمامية (Frontend) مبنية بـ React.js لإدارة موقع كافيه متكامل، متصلة بـ Laravel REST API، وتشمل لوحة تحكم إدارية، نظام حجز، مصادقة مستخدمين، وبحث + Pagination ديناميكي.

🚀 Features
👤 Authentication

تسجيل دخول باستخدام Laravel Sanctum

تخزين token و user في localStorage

توجيه المستخدم حسب الدور:

Admin → Dashboard

User → Home

📊 Admin Dashboard

عرض إحصائيات (Users – Products – Orders – Reservations …)

عرض أحدث البيانات لكل جدول

Generic CRUD Tables (جدول واحد يخدم كل الجداول)

Search لكل جدول (Backend Search)

Pagination

إخفاء الحقول الحساسة (مثل password)

📅 Reservations System

إرسال حجز من المستخدم → pending

تحكم الأدمن:

✅ Confirm Reservation

❌ Cancel Reservation

إرسال Email Confirmation تلقائي عند التأكيد

🔍 Search & Performance

Search مربوط بالـ Backend

useDebounce لتقليل عدد الـ requests

معالجة أخطاء 429 (Too Many Requests)

🧠 Concepts Used

React Hooks (useState, useEffect, useCallback)

Context API (AuthContext)

Axios + Interceptors

Protected Routes

Debounced Search

Reusable Components

Clean API Integration

Error Handling & Notifications

🛠️ Tech Stack

Frontend

React.js

React Router

Axios

Context API

Backend (Connected)

Laravel

Sanctum Authentication

RESTful APIs

Mail (Mailtrap)

📂 Project Structure (Simplified)
src/
│── pages/
│ ├── Login.jsx
│ ├── Admin/
│ │ └── Dashboard.jsx
│
│── components/
│ ├── CrudTable.jsx
│ ├── AdminLayout.jsx
│
│── context/
│ └── AuthContext.jsx
│
│── services/
│ └── axios.js

🔐 Environment Setup
REACT_APP_API_URL=http://127.0.0.1:8000/api

▶️ Run Project
npm install
npm start

⚠️ Common Issues Handled

401 Unauthorized → Token أو Password خطأ

429 Too Many Requests → حلها بـ Debounce

Route [login] not defined → Middleware Sanctum

ظهور password → تم حله من Backend

بطء Dashboard → تقليل عدد الـ API calls

📌 Future Improvements

Role Permissions (RBAC)

Export data (Excel / PDF)

Advanced filters

Real-time notifications

👨‍💻 Author

Mohamed Berik
Junior Full Stack Web Developer
Laravel | React | REST APIs
