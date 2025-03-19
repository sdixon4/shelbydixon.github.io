document.addEventListener("DOMContentLoaded", () => {
    const chatbotInput = document.getElementById("chatbot-input");
    const chatbotOutput = document.getElementById("chatbot-output");

    chatbotInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            let input = chatbotInput.value.toLowerCase();
            let response = "I'm still learning! Check my resume or projects for more info.";

            const responses = {
                "skills": "I have experience in AI, Robotics, Cybersecurity, FPGA, and embedded systems. I work with Python, C++, Verilog, TensorFlow, and Altium.",
                "projects": "Key projects include AI-powered Raspberry Pi robot (Adrian), First Nations Launch (FNL) rocketry simulations, and NASA RockSat-X camera systems.",
                "experience": "I've worked in AI security, robotics, FPGA acceleration, and physics labs. I also have experience in organic farming in Hawaii and California.",
                "robot": "I built Adrian, my AI-powered Raspberry Pi robot with TensorFlow Lite for object detection and voice control.",
                "fpga": "I work on FPGA acceleration projects, optimizing AI inference using Verilog and TensorFlow Lite.",
                "cybersecurity": "I focus on AI-driven security solutions like intrusion detection and phishing detection.",
                "resume": "You can download my resume from the main menu!",
                "rocksat-x": "I'm leading the Mobius Camera system for NASA’s RockSat-X program, enabling high-resolution spaceflight imaging."
            };

            // Check for matching keywords
            for (let key in responses) {
                if (input.includes(key)) {
                    response = responses[key];
                    break;
                }
            }

            // Display response
            chatbotOutput.innerHTML = `<p>${response}</p>`;
            chatbotInput.value = "";
        }
    });
});

