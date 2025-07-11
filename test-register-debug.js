// Debug test untuk register
const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

async function testRegisterWithDifferentData() {
     console.log("🔍 Testing Register with different data formats...\n");

     // Test 1: Data dengan format yang mungkin diharapkan backend
     const testData1 = {
          name: "Test User Debug",
          email: "testdebug@example.com",
          no_telp: "08123456789",
          password: "test123",
          role: "client",
     };

     console.log(
          "📤 Sending data format 1:",
          JSON.stringify(testData1, null, 2)
     );

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(testData1),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.ok) {
               console.log("✅ Register berhasil!");
          } else {
               console.log("❌ Register gagal");
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }

     console.log("\n" + "=".repeat(50) + "\n");

     // Test 2: Data dengan format alternatif (mungkin backend mengharapkan field berbeda)
     const testData2 = {
          fullName: "Test User Debug 2",
          email: "testdebug2@example.com",
          phone: "08123456788",
          password: "test123",
          userRole: "client",
     };

     console.log(
          "📤 Sending data format 2:",
          JSON.stringify(testData2, null, 2)
     );

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(testData2),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.ok) {
               console.log("✅ Register berhasil!");
          } else {
               console.log("❌ Register gagal");
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }

     console.log("\n" + "=".repeat(50) + "\n");

     // Test 3: Data minimal (mungkin ada field yang tidak diperlukan)
     const testData3 = {
          name: "Test User Debug 3",
          email: "testdebug3@example.com",
          password: "test123",
     };

     console.log(
          "📤 Sending minimal data:",
          JSON.stringify(testData3, null, 2)
     );

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(testData3),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.ok) {
               console.log("✅ Register berhasil!");
          } else {
               console.log("❌ Register gagal");
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }
}

// Test OPTIONS request untuk melihat CORS dan allowed methods
async function testOptionsRequest() {
     console.log("\n🔍 Testing OPTIONS request...");

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "OPTIONS",
          });

          console.log("Status:", response.status);
          console.log(
               "Headers:",
               Object.fromEntries(response.headers.entries())
          );
     } catch (error) {
          console.log("❌ OPTIONS request failed:", error.message);
     }
}

// Jalankan semua test
async function runDebugTests() {
     console.log("🧪 Starting Register Debug Tests...\n");

     await testOptionsRequest();
     await testRegisterWithDifferentData();

     console.log("\n🏁 Debug testing selesai!");
}

runDebugTests();
