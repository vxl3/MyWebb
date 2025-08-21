// وضع داكن
function toggleDark() {
  document.body.classList.toggle('dark');
}

// تفعيل تأثير 3D على العناصر
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3
});

// نافذة الدردشة
function toggleChat() {
  const body = document.getElementById("chatBody");
  const input = document.getElementById("chatInput");
  body.style.display = body.style.display === "block" ? "none" : "block";
  input.style.display = input.style.display === "block" ? "none" : "block";
}

// إرسال رسالة وهمية
function sendMessage(e) {
  if(e.key === "Enter") {
    const input = document.getElementById("chatInput");
    const body = document.getElementById("chatBody");
    if(input.value.trim() !== "") {
      const msg = document.createElement("div");
      msg.classList.add("message");
      msg.textContent = "أنت: " + input.value;
      body.appendChild(msg);

      // رد تلقائي وهمي
      const botMsg = document.createElement("div");
      botMsg.classList.add("message");
      botMsg.textContent = "AI: شكراً على رسالتك!";
      body.appendChild(botMsg);

      body.scrollTop = body.scrollHeight;
      input.value = "";
    }
  }
}
