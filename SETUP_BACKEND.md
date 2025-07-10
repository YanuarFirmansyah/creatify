# 🚀 Backend Setup Guide - Creatify

## ✅ **Status: Backend Sudah Berhasil Berjalan!**

## 📋 **Langkah-langkah Setup:**

### 1. **Install Dependencies**

```bash
cd backend/temp-users-creatify
npm install
```

### 2. **Setup Database (MySQL)**

Pastikan MySQL server sudah berjalan, lalu:

**Opsi A: Buat Database Manual**

```sql
CREATE DATABASE `users-creatify`;
```

**Opsi B: Gunakan Konfigurasi Otomatis (Sudah Diimplementasi)**

-    Backend akan otomatis membuat database jika belum ada
-    Pastikan user MySQL memiliki permission untuk membuat database

### 3. **Konfigurasi Environment (Opsional)**

Buat file `.env` di folder `backend/temp-users-creatify/`:

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password_jika_ada
DB_NAME=users-creatify

# JWT Configuration
JWT_KEY=your_super_secret_jwt_key_here_change_this_in_production

# Server Configuration
PORT=3000
```

**Note:** Jika tidak ada file `.env`, backend akan menggunakan konfigurasi default.

### 4. **Jalankan Backend**

```bash
npm run dev
```

## 🎯 **Yang Sudah Diperbaiki:**

### ✅ **Database Connection**

-    Auto-create database jika belum ada
-    Better error handling
-    Environment variable support

### ✅ **Configuration**

-    JWT secret dari environment variable
-    Port configuration
-    Database credentials dari environment

### ✅ **Error Handling**

-    Clear error messages
-    Database connection troubleshooting
-    User-friendly logs

## 🔧 **API Endpoints yang Tersedia:**

### **Authentication**

-    `POST /auth/register` - Register user baru
-    `POST /auth/login` - Login user

### **User Management**

-    `GET /me/profile` - Get user profile
-    `PUT /me/profile` - Update user profile

## 🧪 **Test API:**

### **Register User:**

```bash
curl -X POST http://localhost:3000/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "role": "client"
  }'
```

### **Login User:**

```bash
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "password123"
  }'
```

## 🚨 **Troubleshooting:**

### **Error: "Unknown database"**

-    Pastikan MySQL server berjalan
-    Pastikan user MySQL memiliki permission untuk membuat database
-    Atau buat database manual: `CREATE DATABASE users-creatify;`

### **Error: "Access denied"**

-    Cek username dan password MySQL di file `.env`
-    Pastikan user MySQL memiliki akses ke database

### **Error: "Port already in use"**

-    Ganti port di file `.env`: `PORT=3001`
-    Atau matikan aplikasi yang menggunakan port 3000

## 📱 **Frontend Integration:**

Backend sudah siap untuk digunakan dengan frontend. Pastikan:

1. **Frontend API URL** di `src/services/api.js` sudah benar:

     ```javascript
     const API_BASE_URL = "http://localhost:3000/api";
     ```

2. **CORS** sudah dikonfigurasi untuk menerima request dari frontend

3. **Jalankan frontend** di terminal terpisah:
     ```bash
     npm run dev
     ```

## 🎉 **Backend Siap Digunakan!**

Sekarang backend sudah berjalan dengan baik dan siap untuk digunakan dengan frontend authentication system yang sudah dibuat sebelumnya.
