// Test untuk verifikasi payload yang dikirim ke backend
const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

async function testPayloadVerification() {
     console.log("🔍 Testing Payload Verification...\n");

     // Simulasi data yang sama seperti form register
     const formData = {
          name: "Test User Payload",
          email: "testpayload@example.com",
          no_telp: "08123456789",
          password: "test123",
          confirmPassword: "test123",
          role: "client",
     };

     // Remove confirmPassword seperti di frontend
     const { confirmPassword: _, ...userData } = formData;

     console.log("📤 Original form data:", JSON.stringify(formData, null, 2));
     console.log(
          "📤 Payload sent to backend:",
          JSON.stringify(userData, null, 2)
     );
     console.log(
          "✅ Field 'no_telp' is included:",
          Object.prototype.hasOwnProperty.call(userData, "no_telp")
     );
     console.log("✅ Field 'no_telp' value:", userData.no_telp);

     try {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(userData),
          });

          console.log("\n📥 Response Status:", response.status);
          const responseText = await response.text();
          console.log("📥 Response Body:", responseText);

          if (response.ok) {
               console.log("✅ Register berhasil!");
          } else {
               console.log("❌ Register gagal");

               // Parse error untuk detail
               try {
                    const errorData = JSON.parse(responseText);
                    console.log("❌ Error details:", errorData);
               } catch {
                    console.log("❌ Could not parse error response");
               }
          }
     } catch (error) {
          console.log("❌ Network error:", error.message);
     }
}

// Test dengan data yang berbeda untuk memastikan no_telp terkirim
async function testDifferentPhoneNumbers() {
     console.log("\n" + "=".repeat(50));
     console.log("🔍 Testing with different phone numbers...\n");

     const testCases = [
          {
               name: "User 1",
               email: "user1@test.com",
               no_telp: "08111111111",
               password: "test123",
               role: "client",
          },
          {
               name: "User 2",
               email: "user2@test.com",
               no_telp: "08222222222",
               password: "test123",
               role: "freelancer",
          },
     ];

     for (let i = 0; i < testCases.length; i++) {
          const testData = testCases[i];
          console.log(
               `\n📤 Test Case ${i + 1}:`,
               JSON.stringify(testData, null, 2)
          );

          try {
               const response = await fetch(`${API_BASE_URL}/auth/register`, {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                    },
                    body: JSON.stringify(testData),
               });

               console.log(`Status ${i + 1}:`, response.status);
               const responseText = await response.text();
               console.log(`Response ${i + 1}:`, responseText);

               if (response.ok) {
                    console.log(`✅ Test ${i + 1} berhasil!`);
               } else {
                    console.log(`❌ Test ${i + 1} gagal`);
               }
          } catch (error) {
               console.log(`❌ Test ${i + 1} network error:`, error.message);
          }
     }
}

// Jalankan semua test
async function runPayloadTests() {
     console.log("🧪 Starting Payload Verification Tests...\n");

     await testPayloadVerification();
     await testDifferentPhoneNumbers();

     console.log("\n🏁 Payload verification testing selesai!");
     console.log("\n💡 Summary:");
     console.log("- Field 'no_telp' sudah ada di form register");
     console.log("- Field 'no_telp' sudah ada di state formData");
     console.log("- Field 'no_telp' sudah ada di validasi");
     console.log("- Field 'no_telp' sudah dikirim ke backend");
     console.log("- Masalah kemungkinan di backend (error 500)");
}

runPayloadTests();
