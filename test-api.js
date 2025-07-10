// Test script untuk API register dan login
const API_BASE_URL = "http://localhost:3000/api";

async function testRegister() {
     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    name: "Test User",
                    email: "test@example.com",
                    no_telp: "08123456789",
                    password: "password123",
                    role: "client",
               }),
          });

          const data = await response.json();
          console.log("Register Response:", response.status, data);
          return data;
     } catch (error) {
          console.error("Register Error:", error);
     }
}

async function testLogin() {
     try {
          const response = await fetch(`${API_BASE_URL}/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    email: "test@example.com",
                    password: "password123",
               }),
          });

          const data = await response.json();
          console.log("Login Response:", response.status, data);
          return data;
     } catch (error) {
          console.error("Login Error:", error);
     }
}

// Test kedua endpoint
console.log("Testing API endpoints...");
testRegister().then(() => {
     setTimeout(() => {
          testLogin();
     }, 1000);
});
