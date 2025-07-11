// Test file untuk mengecek koneksi ke backend baru
const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

// Test koneksi ke endpoint register
async function testRegisterEndpoint() {
     console.log("🔍 Testing Register Endpoint...");

     // Test berbagai kemungkinan endpoint
     const endpoints = [
          "/api/auth/register",
          "/auth/register",
          "/api/user/register",
          "/user/register",
     ];

     for (const endpoint of endpoints) {
          console.log(`\nTesting endpoint: ${endpoint}`);

          try {
               const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                         name: "Test User",
                         email: "test@example.com",
                         no_telp: "08123456789",
                         password: "test123",
                         role: "client",
                    }),
               });

               console.log("Status:", response.status);

               if (response.ok) {
                    const data = await response.json();
                    console.log("✅ Register endpoint berfungsi!");
                    console.log("Response:", data);
                    return true;
               } else {
                    const text = await response.text();
                    console.log("❌ Response text:", text.substring(0, 200));
               }
          } catch (error) {
               console.log("❌ Network error:", error.message);
          }
     }

     return false;
}

// Test koneksi ke endpoint login
async function testLoginEndpoint() {
     console.log("\n🔍 Testing Login Endpoint...");

     // Test berbagai kemungkinan endpoint
     const endpoints = [
          "/api/auth/login",
          "/auth/login",
          "/api/user/login",
          "/user/login",
     ];

     for (const endpoint of endpoints) {
          console.log(`\nTesting endpoint: ${endpoint}`);

          try {
               const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                         email: "test@example.com",
                         password: "test123",
                    }),
               });

               console.log("Status:", response.status);

               if (response.ok) {
                    const data = await response.json();
                    console.log("✅ Login endpoint berfungsi!");
                    console.log("Response:", data);
                    return true;
               } else {
                    const text = await response.text();
                    console.log("❌ Response text:", text.substring(0, 200));
               }
          } catch (error) {
               console.log("❌ Network error:", error.message);
          }
     }

     return false;
}

// Test koneksi umum
async function testBackendConnection() {
     console.log("🚀 Testing Backend Connection...");
     console.log("Backend URL:", API_BASE_URL);

     const healthEndpoints = ["/", "/health", "/api/health", "/status"];

     for (const endpoint of healthEndpoints) {
          console.log(`\nTesting health endpoint: ${endpoint}`);

          try {
               const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                    method: "GET",
               });

               console.log("Status:", response.status);

               if (response.ok) {
                    const text = await response.text();
                    console.log("✅ Backend is reachable!");
                    console.log("Response:", text.substring(0, 200));
                    return true;
               } else {
                    const text = await response.text();
                    console.log("Response:", text.substring(0, 200));
               }
          } catch (error) {
               console.log("❌ Connection failed:", error.message);
          }
     }

     return false;
}

// Jalankan semua test
async function runAllTests() {
     console.log("🧪 Starting Backend Connection Tests...\n");

     const healthOk = await testBackendConnection();
     const registerOk = await testRegisterEndpoint();
     const loginOk = await testLoginEndpoint();

     console.log("\n📊 Test Results Summary:");
     console.log("Health Check:", healthOk ? "✅ PASS" : "❌ FAIL");
     console.log("Register:", registerOk ? "✅ PASS" : "❌ FAIL");
     console.log("Login:", loginOk ? "✅ PASS" : "❌ FAIL");

     console.log("\n🏁 Testing selesai!");
}

// Jalankan test jika file dijalankan langsung
if (typeof window === "undefined") {
     runAllTests();
}

export { testBackendConnection, testRegisterEndpoint, testLoginEndpoint };
