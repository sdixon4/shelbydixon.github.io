async function loadModel() {
    console.log("AI Model Loaded (Future Expansion)");
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById("chatbot-input").value.toLowerCase();
        let output = document.getElementById("chatbot-output");
        let response = "I'm still learning! Please check my resume or projects for details.";

        const responses = {
            "skills": "I have experience in AI, Robotics, Cybersecurity, FPGA programming, and embedded systems. My technical stack includes Python, C, C++, Verilog, Arduino, and Git.",
            "languages": "I program in Python, C, C++, and Verilog. I also work with embedded systems like Arduino and FPGA.",
            "projects": "Some of my key projects include Adrian (AI-powered Raspberry Pi robot), AI-Enhanced Network Intrusion Detection, FPGA AI Accelerator, and AI-Powered Phishing Detector.",
            "experience": "I am a Computer Engineering student at UH Manoa, specializing in AI-driven hardware, FPGA acceleration, and cybersecurity. I also have experience as a physics lab assistant and an organic farmer.",
            "robot": "I built Adrian, my AI-powered Raspberry Pi robot, which integrates computer vision and voice command functionality.",
            "fpga": "I work on FPGA acceleration projects using Verilog and TensorFlow Lite for AI inference optimization.",
            "cybersecurity": "I am developing AI-driven security solutions, including an AI-Enhanced Network Intrusion Detection System and an AI-Powered Phishing Detector.",
            "arduino": "I use Arduino for embedded systems development, particularly for robotics and automation projects.",
            "resume": "You can download my resume using the 'Download Resume' button on my site!",
            "research": "I have contributed to space research through NASA’s First Nations Launch, RockSat-X, and the Hawaii Space Grant. My role in FNL includes serving as the Simulations and Motor Lead.",
            "physics": "I worked as a Physics Lab Assistant, helping students understand fundamental physics concepts through hands-on experiments.",
            "organic farming": "Before Computer Engineering, I worked as an organic farmer at Kahumana Organic Farm in Lualualei Valley and other organic farms along California's North Coast. My experience includes sustainable agriculture and ecological farming practices."
        };

        for (let key in responses) {
            if (input.includes(key)) {
                response = responses[key];
                break;
            }
        }
        
        output.innerHTML = `<p>${response}</p>`;
    }
}

loadModel();

