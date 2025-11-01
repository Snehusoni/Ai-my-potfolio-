const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("userInput");

function addMessage(message, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, "user");
  userInput.value = "";

  // Simple AI logic (no backend)
  let reply = "";

  if (text.toLowerCase().includes("hello")) {
    reply = "Hi there! I'm Sneha’s AI Assistant 🤖. How can I help you today?";
  } else if (text.toLowerCase().includes("project")) {
    reply = "Sneha has built AI Chatbots, Dashboards, and Web Apps using React, Node, and MongoDB!";
  } else if (text.toLowerCase().includes("skills")) {
    reply = "Sneha’s skills include HTML, CSS, JavaScript, React.js, Node.js, and AI integration 💡";
  } else if (text.toLowerCase().includes("goal")) {
    reply = "Sneha’s goal is to become an AI Engineer and IAS Officer 🌟";
  } else {
    reply = "I'm still learning! Ask about Sneha’s skills, projects, or goals.";
  }

  setTimeout(() => addMessage(reply, "bot"), 600);
}