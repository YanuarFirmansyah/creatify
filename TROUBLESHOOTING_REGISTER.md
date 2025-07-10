# 🔧 Troubleshooting Register Issues

## ✅ **Masalah Sudah Diperbaiki!**

### **Masalah yang Ditemukan:**

1. **API Endpoint Mismatch** - Frontend menggunakan `/api/auth/register` tapi backend hanya `/auth/register`
2. **Missing Field** - Backend tidak menerima field `no_telp` yang dikirim frontend

### **Perbaikan yang Dilakukan:**

#### 1. **API Endpoint Fixed**

-    ✅ Backend sekarang menggunakan prefix `/api`
-    ✅ Endpoint: `http://localhost:3000/api/auth/register`

#### 2. **Controller Updated**

-    ✅ Menerima field `no_telp`
-    ✅ Default value untuk `role` jika tidak dikirim
-    ✅ Better error handling

## 🧪 **Test API Register:**

### **Manual Test dengan curl:**

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "no_telp": "08123456789",
    "password": "password123",
    "role": "client"
  }'
```

### **Expected Response:**

```json
{
     "message": "Registrasi berhasil",
     "userId": 1
}
```

## 🔍 **Cara Debug Register:**

### **1. Cek Browser Console**

-    Buka Developer Tools (F12)
-    Lihat tab Console untuk error messages
-    Lihat tab Network untuk API calls

### **2. Cek Backend Logs**

-    Lihat terminal backend untuk error messages
-    Pastikan database connection berhasil

### **3. Test dengan Script**

Jalankan test script:

```bash
node test-api.js
```

## 🚨 **Common Issues & Solutions:**

### **Error: "Network Error"**

-    ✅ Backend tidak berjalan
-    ✅ CORS issue
-    ✅ Port tidak sesuai

### **Error: "Email sudah digunakan"**

-    ✅ Email sudah terdaftar
-    ✅ Gunakan email berbeda

### **Error: "Semua field harus diisi"**

-    ✅ Pastikan semua field required terisi
-    ✅ Cek validasi form

### **Error: "Gagal melakukan registrasi"**

-    ✅ Database connection issue
-    ✅ Table structure problem
-    ✅ Check backend logs

## 📱 **Frontend Integration:**

### **Pastikan:**

1. **Backend berjalan** di port 3000
2. **Frontend berjalan** di port 5173
3. **API URL benar** di `src/services/api.js`
4. **Form validation** berfungsi
5. **Error handling** menampilkan pesan error

### **Test Register Flow:**

1. Buka `http://localhost:5173/register`
2. Isi semua field required
3. Submit form
4. Cek response di browser console
5. Redirect ke login page jika berhasil

## 🎯 **Status Sekarang:**

-    ✅ Backend API endpoints fixed
-    ✅ Controller updated untuk menerima semua fields
-    ✅ CORS configured
-    ✅ Database connection working
-    ✅ Ready untuk testing

## 🚀 **Next Steps:**

1. Restart backend: `npm run dev`
2. Test register di frontend
3. Cek browser console untuk error
4. Test login setelah register berhasil

Register seharusnya sudah berfungsi sekarang! 🎉
