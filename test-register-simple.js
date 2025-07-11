// Test sederhana untuk register
const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

async function testSimpleRegister() {
     console.log("🔍 Testing Simple Register...\n");

     // Generate unique data
     const timestamp = Date.now();
     const uniqueEmail = `simple${timestamp}@test.com`;
     const uniquePhone = `0813${timestamp.toString().slice(-8)}`;

     const testData = {
          name: `Simple User ${timestamp}`,
          email: uniqueEmail,
          no_telp: uniquePhone,
          password: "simple123",
          role: "client",
     };

     console.log("📤 Sending data:", JSON.stringify(testData, null, 2));

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
               return { success: true, email: uniqueEmail };
          } else {
               console.log("❌ Register gagal");
               return { success: false, error: responseText };
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
          return { success: false, error: error.message };
     }
}

// Test login dengan user yang sudah ada
async function testExistingUserLogin() {
     console.log("\n🔍 Testing Login with existing user...\n");

     const loginData = {
          email: "johndoe@gmail.com",
          password: "rahasia123",
     };

     console.log("📤 Login data:", JSON.stringify(loginData, null, 2));

     try {
          const response = await fetch(`${API_BASE_URL}/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(loginData),
          });

          console.log("Status:", response.status);
          const responseText = await response.text();
          console.log("Response:", responseText);

          if (response.ok) {
               console.log("✅ Login berhasil!");
               return { success: true };
          } else {
               console.log("❌ Login gagal");
               return { success: false, error: responseText };
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
          return { success: false, error: error.message };
     }
}

// Jalankan test
async function runSimpleTests() {
     console.log("🧪 Starting Simple Register Tests...\n");

     const registerResult = await testSimpleRegister();
     const loginResult = await testExistingUserLogin();

     console.log("\n📊 Test Results:");
     console.log("Register:", registerResult.success ? "✅ PASS" : "❌ FAIL");
     console.log("Login:", loginResult.success ? "✅ PASS" : "❌ FAIL");

     if (!registerResult.success) {
          console.log(
               "\n💡 Suggestion: Check backend logs for detailed error information"
          );
          console.log("The 500 error suggests a server-side issue, possibly:");
          console.log("- Database connection problem");
          console.log("- Password hashing issue");
          console.log("- Missing environment variables");
          console.log("- Database table structure mismatch");
     }

     console.log("\n🏁 Simple testing selesai!");
}

runSimpleTests();
