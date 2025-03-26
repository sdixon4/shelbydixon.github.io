document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("chatbot-placeholder");

  // Load chatbot.html if it's not already loaded
  fetch("chatbot.html")
    .then((res) => res.text())
    .then((html) => {
      placeholder.innerHTML = html;
    });

  // Global toggle function
  window.toggleChatbot = function () {
    const bot = document.getElementById("chatbot-box");
    if (bot) {
      bot.classList.toggle("open");
    }
  };

  // Chatbot logic
  const responses = {
    skills: "I specialize in C/C++, Python, JavaScript, AI/ML with PyTorch & TensorFlow, and embedded systems like Arduino & Raspberry Pi.",
    ai: "I've built phishing detection and NLP projects using Hugging Face Transformers and Flask. I also love training on hardware.",
    projects: "Some of my favorite projects include RockSat-X (NASA), First Nations Launch (FNL), and an AI-based phishing detector.",
    cybersecurity: "I've worked with Wireshark, Nmap, and Snort for anomaly detection. Cybersecurity is a huge passion of mine.",
    background: "I'm a Computer Engineering student at UH Mānoa. Before this, I was an organic farmer — that creativity shaped how I build things.",
    resume: "You can find my resume on the About page or at the top of this site. Let me know if you'd like the direct link.",
    fun: "I love traveling, hiking with my dog, and baking sourdough when I'm not working with rockets or robots.",
    robot: "Adrian is my Raspberry Pi-powered AI robot — programmed in Python with voice control and motion!",
    contact: "Feel free to reach out through the Contact page — it goes straight to my email inbox!",
    github: "You can explore all my open-source projects through the GitHub link at the bottom of this site.",
  };

  document.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const input = document.getElementById("chatbot-input");
      const output = document.getElementById("chatbot-output");
      const query = input.value.toLowerCase();
      let reply = "I'm still learning — ask me about my skills, AI, or projects!";

      for (let key in responses) {
        if (query.includes(key)) {
          reply = responses[key];
          break;
        }
      }

      const userMsg = `<div class="bubble user-bubble">${input.value}</div>`;
      const botMsg = `<div class="bubble bot-bubble"><img src="avatar.png" class="bot-avatar"> ${reply}</div>`;
      output.innerHTML += userMsg + botMsg;
      input.value = "";
      output.scrollTop = output.scrollHeight;
    }
  });
});

