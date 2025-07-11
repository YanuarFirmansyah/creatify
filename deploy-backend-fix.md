# Deploy Backend Fix untuk Register

## Perubahan yang Dilakukan

### 1. Enhanced Logging

-    Menambahkan `console.log("Register request body:", req.body)` untuk melihat data yang diterima
-    Menambahkan `console.log("Inserting user with data:", {...})` untuk melihat data yang akan diinsert
-    Menambahkan `console.log("Insert result:", result)` untuk melihat hasil insert

### 2. Phone Number Validation

-    Menambahkan validasi untuk `no_telp` duplicate
-    Jika nomor telepon sudah ada, akan mengembalikan error 409

### 3. Better Error Handling

-    Error logging yang lebih detail untuk debugging

## Langkah Deploy

### 1. Commit dan Push ke Repository

```bash
cd backend/temp-users-creatify
git add .
git commit -m "Fix register: add no_telp validation and better logging"
git push origin main
```

### 2. Deploy ke Railway

-    Railway akan otomatis deploy jika terhubung dengan repository
-    Atau manual deploy dari Railway dashboard

### 3. Cek Logs

-    Buka Railway dashboard
-    Lihat logs untuk memastikan tidak ada error saat startup

## Testing Setelah Deploy

### 1. Test Register dengan Data Baru

```bash
node test-payload-verification.js
```

### 2. Cek Logs Railway

-    Lihat console.log yang ditambahkan untuk debugging
-    Pastikan field `no_telp` terkirim dengan benar

### 3. Test dari Frontend

-    Buka aplikasi frontend
-    Coba register dengan data baru
-    Pastikan tidak ada error

## Expected Results

### Jika Berhasil:

-    Register akan berhasil dengan status 201
-    User baru akan tersimpan di database dengan field `no_telp`
-    Logs akan menampilkan data yang diinsert

### Jika Masih Error:

-    Logs akan menampilkan error detail yang lebih jelas
-    Bisa diketahui apakah masalah di database, query, atau data

## Troubleshooting

### Jika Masih Error 500:

1. Cek logs Railway untuk error detail
2. Pastikan struktur tabel database sesuai
3. Cek koneksi database
4. Pastikan environment variables sudah benar

### Jika Error 409:

-    Email atau nomor telepon sudah terdaftar
-    Gunakan data yang berbeda

## Database Schema yang Diperlukan

```sql
CREATE TABLE IF NOT EXISTS users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    no_telp VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('freelancer', 'client') NOT NULL DEFAULT 'client',
    bio TEXT,
    profile_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
