# Authentication Setup Guide

## Overview

This guide will help you set up the login and register functionality using the backend you've prepared.

## Backend Setup

### 1. Install Dependencies

Navigate to the backend directory and install dependencies:

```bash
cd backend/temp-users-creatify
npm install
```

### 2. Environment Configuration

Create a `.env` file in the backend directory with the following variables:

```env
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
JWT_KEY=your_jwt_secret_key_here
PORT=3000
```

### 3. Database Setup

Make sure you have MySQL running and create the users table:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    no_telp VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    role ENUM('client', 'freelancer') DEFAULT 'client',
    bio TEXT,
    profile_image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### 4. Start Backend Server

```bash
npm run dev
```

The backend will run on `http://localhost:3000`

## Frontend Setup

### 1. Install Dependencies (if not already done)

```bash
npm install
```

### 2. Start Frontend Development Server

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Features Implemented

### Authentication Context (`src/context/AuthContext.jsx`)

-    User state management
-    Login functionality with API integration
-    Register functionality with API integration
-    Logout functionality
-    Token management
-    Loading and error states

### API Service (`src/services/api.js`)

-    Centralized API calls
-    Error handling
-    Token management helpers

### Login Page (`src/pages/auth/Login.jsx`)

-    Email and password validation
-    Role selection (Client/Freelancer)
-    Error display
-    Loading states
-    Form validation

### Register Page (`src/pages/auth/Register.jsx`)

-    Complete registration form
-    Form validation
-    Password confirmation
-    Role selection
-    Error handling
-    Loading states

### Navbar Integration

-    Dynamic menu based on authentication status
-    Logout functionality
-    User profile display

## API Endpoints

### Register

-    **URL**: `POST /api/auth/register`
-    **Body**:
     ```json
     {
          "name": "User Name",
          "email": "user@example.com",
          "no_telp": "08123456789",
          "password": "password123",
          "role": "client"
     }
     ```

### Login

-    **URL**: `POST /api/auth/login`
-    **Body**:
     ```json
     {
          "email": "user@example.com",
          "password": "password123"
     }
     ```

## Usage

1. **Registration**: Users can register as either a client or freelancer
2. **Login**: Users can login with their email and password
3. **Authentication State**: The app maintains user session using JWT tokens
4. **Logout**: Users can logout, which clears their session

## Security Features

-    JWT token-based authentication
-    Password validation
-    Email uniqueness validation
-    Form validation on both frontend and backend
-    Secure token storage in localStorage

## Error Handling

-    Network errors
-    Validation errors
-    Authentication errors
-    User-friendly error messages

## Notes

-    Make sure your backend server is running before testing the frontend
-    The API base URL is set to `http://localhost:3000/api` - update this in `src/services/api.js` if your backend runs on a different port
-    CORS is enabled on the backend to allow frontend requests
-    All passwords are currently stored as plain text in the database - consider implementing password hashing for production use
