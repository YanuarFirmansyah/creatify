// Test untuk memperbaiki masalah register
const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

async function testRegisterWithUniqueData() {
     console.log("🔍 Testing Register with unique data...\n");

     // Generate unique email dan phone
     const timestamp = Date.now();
     const uniqueEmail = `test${timestamp}@example.com`;
     const uniquePhone = `0812${timestamp.toString().slice(-8)}`;

     const testData = {
          name: `Test User ${timestamp}`,
          email: uniqueEmail,
          no_telp: uniquePhone,
          password: "test123",
          role: "client",
     };

     console.log("📤 Sending unique data:", JSON.stringify(testData, null, 2));

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(testData),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.ok) {
               console.log("✅ Register berhasil!");

               // Test login dengan user yang baru dibuat
               console.log("\n🔍 Testing login with newly created user...");
               await testLoginWithNewUser(uniqueEmail, "test123");
          } else {
               console.log("❌ Register gagal");

               // Coba parse response untuk melihat detail error
               try {
                    const errorData = JSON.parse(responseText);
                    console.log("Error details:", errorData);
               } catch (e) {
                    console.log("Could not parse error response");
               }
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }
}

async function testLoginWithNewUser(email, password) {
     try {
          const response = await fetch(`${API_BASE_URL}/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({ email, password }),
          });

          console.log("Login Status:", response.status);
          const responseText = await response.text();
          console.log("Login Response:", responseText);

          if (response.ok) {
               console.log("✅ Login berhasil!");
          } else {
               console.log("❌ Login gagal");
          }
     } catch (error) {
          console.log("❌ Login network error:", error.message);
     }
}

// Test dengan data yang sudah ada (untuk melihat error yang tepat)
async function testRegisterWithExistingData() {
     console.log("\n🔍 Testing Register with existing data...\n");

     const existingData = {
          name: "Test Existing User",
          email: "johndoe@gmail.com", // Email yang sudah ada di dummy data
          no_telp: "08123456789", // Phone yang sudah ada di dummy data
          password: "test123",
          role: "client",
     };

     console.log(
          "📤 Sending existing data:",
          JSON.stringify(existingData, null, 2)
     );

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(existingData),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.status === 409) {
               console.log("✅ Backend correctly rejects duplicate data");
          } else {
               console.log("❌ Unexpected response for duplicate data");
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }
}

// Jalankan semua test
async function runFixTests() {
     console.log("🧪 Starting Register Fix Tests...\n");

     await testRegisterWithUniqueData();
     await testRegisterWithExistingData();

     console.log("\n🏁 Fix testing selesai!");
}

runFixTests();
