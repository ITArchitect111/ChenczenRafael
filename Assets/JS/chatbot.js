window.onload = function () {
    document.getElementById("chat-icon").addEventListener("click", toggleChatbot);
  };

const responses = {
  "about me": "I am Chenczen Rafael a BS in Information Systems graduate of Isabela State University Main Campus, i am from Sta. Lucia, Quirino, Isabela and i am aspiring IT proffesional by upskilling.",
  "services": "I offer technical assistance to people who needs ranging from Networking, System Design, Database, Web projecst, and Console progamming.",
  "projects": "You can view my projects on my GitHub: github.com/ITArchitect111"
};

function toggleChatbot() {
  const popup = document.getElementById("chatbot-popup");
  popup.style.display = (popup.style.display === "block") ? "none" : "block";
}

function processInput() {
  const input = document.getElementById("userInput").value.trim().toLowerCase();
  const chatbox = document.getElementById("chatbox");

  document.getElementById("userInput").value = "";

  chatbox.innerHTML += `<div class="user">🧑 You: ${input}</div>`;


  const reply = responses[input] || "Contact the owner for further information.";
  chatbox.innerHTML += `<div class="bot">🤖 Bot: ${reply}</div>`;

  chatbox.scrollTop = chatbox.scrollHeight;
}
