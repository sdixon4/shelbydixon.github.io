// ShelbyBot: Chat Logic with Typing Animation, Chat History, Modes, and Easter Eggs

let chatHistory = [];
let currentMode = 'default'; // Modes: default, projects, ai, cybersecurity

const responses = {
  skills: "I specialize in C/C++, Python, JavaScript, AI/ML with PyTorch & TensorFlow, and embedded systems like Arduino & Raspberry Pi.",
  ai: "I work on AI models that detect phishing and anomalies using NLP with Hugging Face Transformers.",
  projects: "I've worked on RockSat-X, First Nations Launch, and built an AI phishing detection tool.",
  cybersecurity: "I use Wireshark, Nmap, and Snort for network monitoring and intrusion detection.",
  resume: "You can view my resume from the About or Contact page — or message me directly for a copy!",
  github: "Check out my projects on GitHub — link's at the bottom of the site!",

  // Easter Eggs 🎉
  joke: "Why did the rocket scientist bring a ladder? Because she wanted to reach new heights!",
  joke2: "What do you call a space magician? A flying sorcerer!",
  joke3: "Why don’t scientists trust atoms? Because they make up everything.",
  dog: "Shelby LOVES dogs. Especially rocket-launch-loving, cookie-stealing ones 🐶.",
  baking: "Shelby bakes with scientific precision — laminated doughs are an art AND a science.",
  favorite: "Favorite project? RockSat-X, hands down. Filming from space? Incredible.",
  certifications: "Currently pursuing AWS, GCP, and model deployment certs.",
  quote: "'Code is like humor. When you have to explain it, it’s bad.' – Cory House",

  // Space Jokes 🚀
  spacejoke1: "What do you call a comet wrapped in bacon? An *astroll!* 🥓",
  spacejoke2: "Why did the astronaut bring a broom? He wanted to sweep the Milky Way! 🌌",
  spacejoke3: "How do rockets stay in touch? They use *spacebook*! 📡",
  spacejoke4: "What do you call a rocket’s favorite drink? Launch-a-latte! ☕",
  spacejoke5: "Where do aliens park their ships? At the *parking meteor*! 🛸",
  spacejoke6: "Why don’t aliens visit Earth? They’ve got better Yelp reviews on Mars.",
  spacejoke7: "How do astronauts organize a party? They planet.",
  spacejoke8: "Why did the moon skip dinner? It was full.",
  spacejoke9: "Saturn’s the best — it always has a ring to it.",
  spacejoke10: "What’s a rocket’s favorite movie genre? Sci-Fly.",
};

function displayMessage(sender, message) {
  const chatOutput = document.getElementById('chatbot-output');
  const messageBubble = document.createElement('div');
  messageBubble.className = `chat-bubble ${sender}`;
  messageBubble.innerHTML = `<strong>${sender === 'user' ? 'You' : 'ShelbyBot'}:</strong> ${message}`;
  chatOutput.appendChild(messageBubble);
  chatOutput.scrollTop = chatOutput.scrollHeight;
}

function shelbyBotReply(query) {
  let reply = "I'm still learning — try asking about skills, projects, or AI!";

  // Handle chatbot mode switching
  if (query.includes('mode')) {
    if (query.includes('project')) currentMode = 'projects';
    else if (query.includes('ai')) currentMode = 'ai';
    else if (query.includes('cyber')) currentMode = 'cybersecurity';
    else currentMode = 'default';
    return `Switched to ${currentMode} mode.`;
  }

  // Handle joke/spacejoke randomness
  if (query.includes('joke')) {
    const jokes = Object.keys(responses).filter(k => k.includes('joke'));
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return responses[randomJoke];
  }

  // Match based on keywords
  for (const key in responses) {
    if (query.includes(key)) {
      return responses[key];
    }
  }

  return reply;
}

// Init Chatbot Logic
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('chatbot-input');
  const chatOutput = document.getElementById('chatbot-output');
  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-bubble shelbybot typing';
  typingIndicator.textContent = 'ShelbyBot is typing...';

  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      const query = input.value.trim().toLowerCase();
      if (!query) return;

      displayMessage('user', input.value);
      chatHistory.push({ role: 'user', content: input.value });

      input.value = '';

      chatOutput.appendChild(typingIndicator);
      chatOutput.scrollTop = chatOutput.scrollHeight;

      setTimeout(() => {
        typingIndicator.remove();
        const reply = shelbyBotReply(query);
        displayMessage('shelbybot', reply);
        chatHistory.push({ role: 'shelbybot', content: reply });
      }, 800);
    }
  });
});

