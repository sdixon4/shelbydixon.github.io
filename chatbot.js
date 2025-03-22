function handleKeyPress(event) {
  if (event.key === 'Enter') {
    const input = document.getElementById("chatbot-input").value.toLowerCase();
    const output = document.getElementById("chatbot-output");
    let response = "I'm still learning! Please check my resume or portfolio for details.";

    const responses = {
      "skills": "I'm skilled in Python, C, C++, Arduino, Git, LTSpice, Aladdin Software, Verilog, and RockSim. I’m currently exploring FPGA programming and edge AI optimization.",
      "programming languages": "I primarily use Python, C, C++, and Arduino. I also work with Verilog for hardware design.",
      "projects": "Some of my key projects include Adrian (AI robot), RockSat-X Mobius camera payload, First Nations Launch high-power rocket avionics, and AI security tools.",
      "experience": "I've worked in research, taught physics lab sessions, and even worked as an organic farmer. My journey blends practical experience with deep technical curiosity.",
      "resume": "You can download my resume by clicking the 'Download Resume' button on the homepage!",
      "robot": "Adrian is my Raspberry Pi-powered AI robot that uses computer vision and voice control — built entirely from scratch.",
      "rocksat": "For RockSat-X, I lead the Mobius Camera system — capturing video during rocket deployment, while optimizing for weight, vibration, and storage constraints.",
      "fnl": "First Nations Launch is a NASA-sponsored rocketry competition. My team designed avionics and sensor integration for a 5.5” high-power HyperLOC rocket.",
      "background": "I transitioned from organic farming in California and Hawaii to studying computer engineering. My background fuels my interest in sustainability and tech with impact.",
      "hobbies": "I love traveling, baking sourdough, and spending time outdoors — especially with my dog.",
      "school": "I'm studying Computer Engineering at the University of Hawai‘i at Mānoa.",
      "contact": "Feel free to connect with me via GitHub or LinkedIn — links are at the bottom of the site!",
      "interests": "My passions include AI, robotics, aerospace systems, cybersecurity, and building things that bridge the digital and physical world.",
      "ai": "I work on AI models that run efficiently on small hardware — think Raspberry Pi, FPGA, or low-power microcontrollers.",
      "cybersecurity": "I'm working on anomaly detection and phishing detection using AI. My goal is to make cybersecurity smarter, faster, and more adaptive.",
      "verilog": "I use Verilog for designing digital logic circuits and working with FPGA platforms for hardware acceleration.",
      "space grant": "I’m a researcher through the Hawai‘i Space Grant Consortium — working on RockSat-X and other hands-on aerospace projects.",
      "how did you get into engineering": "I started in organic farming! But my curiosity for how things worked led me to build small electronics, and eventually dive into computer engineering.",
      "what kind of dog": "He's a fluffy little guy — you'll find him in a photo on my About page. Dogs make everything better, even rocket launches.",
      "why robotics": "I love the tangible nature of robotics — it's code that moves, reacts, and interacts with the real world.",
      "rocksim": "I use RockSim to simulate rocket performance and optimize designs before physical testing.",
      "ltspice": "LTSpice is a tool I use for circuit simulation — super handy for analog/digital system design.",
      "favorite project": "Honestly, it’s hard to choose! I loved building my AI robot Adrian, but leading the RockSat-X camera system taught me a ton about systems engineering.",
      "arduino": "I use Arduino for prototyping — it's great for sensors, actuators, and embedded control systems.",
      "fpga": "I’m learning how to accelerate AI models using FPGAs. It’s a powerful way to optimize for speed and energy use.",
      "future goals": "I want to keep combining hardware, AI, and security — especially in aerospace and robotics domains.",
      "travel": "I’ve been lucky to travel for education, inspiration, and exploration. It helps me think creatively — even in engineering!",
      "teaching": "As a physics lab assistant, I helped students understand core physics concepts by running hands-on experiments and guiding analysis.",
      "bread": "Yes, I bake! I love the science-meets-art of breadmaking — it's surprisingly similar to engineering.",
      "certifications": "I’m working on earning certifications in embedded systems and AI model deployment. Always learning!",
      "github": "You can browse my GitHub projects by clicking the GitHub icon in the footer or navigation bar.",
      "portfolio": "This site is fully custom — built with HTML, CSS, JavaScript, and Bootstrap 4. Let me know what you think!",
      "design": "The portfolio design was inspired by clean, modern interfaces — with a dark/light toggle and personal storytelling baked in."
    };

    for (let key in responses) {
      if (input.includes(key)) {
        response = responses[key];
        break;
      }
    }

    output.innerHTML = `<p>${response}</p>`;
    document.getElementById("chatbot-input").value = "";
  }
}

