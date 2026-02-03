/***********************
 FRONTEND OTP (DEMO)
************************/

let generatedOTP = null;

// SEND OTP (ALERT)
function sendOTP() {
  const number = document.getElementById("number").value;

  if (!number || number.length < 10) {
    alert("Please enter a valid mobile number");
    return;
  }

  generatedOTP = Math.floor(100000 + Math.random() * 900000);

  // Simulating SMS
  alert("Your OTP is: " + generatedOTP);
}

// VERIFY OTP
function verifyOTP() {
  const enteredOTP = document.getElementById("otp").value;
  const name = document.getElementById("name").value;

  if (!name || !enteredOTP) {
    alert("Please fill all details");
    return;
  }

  if (enteredOTP == generatedOTP) {
    localStorage.setItem("username", name);
    localStorage.setItem("loginTime", new Date().toString());
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid OTP");
  }
}

/***********************
 DASHBOARD
************************/

function showHistory() {
  const name = localStorage.getItem("username");
  const time = localStorage.getItem("loginTime");

  document.getElementById("output").innerHTML = `
    <p><b>Name:</b> ${name}</p>
    <p><b>First Login:</b><br>${time}</p>
  `;
}

function goChat() {
  window.location.href = "chat.html";
}

/***********************
 CHATBOT
************************/

function sendMessage() {
  const input = document.getElementById("userMsg");
  const msg = input.value.trim().toLowerCase();

  if (msg === "") return;

  let reply = "I'm here for you 🌱";

  if (msg.includes("stress"))
    reply = "Take a deep breath. Stress is temporary.";
  else if (msg.includes("exam"))
    reply = "You are more than your exam results.";
  else if (msg.includes("sad"))
    reply = "It's okay to feel sad. You are not alone.";
  else if (msg.includes("lonely"))
    reply = "Someone cares about you, even if it doesn't feel like it.";
  else if (msg.includes("anxiety"))
    reply = "Slow breathing can help reduce anxiety.";

  const box = document.getElementById("chatBox");

  box.innerHTML += `<p><b>You:</b> ${input.value}</p>`;
  box.innerHTML += `<p><b>MINDLIFT:</b> ${reply}</p>`;

  input.value = "";
  box.scrollTop = box.scrollHeight;
}
