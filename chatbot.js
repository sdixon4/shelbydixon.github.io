function handleKeyPress(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById("chatbot-input").value.toLowerCase();
        let output = document.getElementById("chatbot-output");
        let response = "I'm still learning! Please check my resume or projects for details.";

        const responses = {
            "skills": "I have experience in Python, C, C++, Verilog, Arduino, FPGA programming, and cybersecurity.",
            "projects": "Some key projects include Adrian (AI-powered Raspberry Pi robot), AI Intrusion Detection, and AI-Powered Phishing Detector.",
            "experience": "I'm a Computer Engineering student at UH Manoa, working on AI, robotics, and space technology.",
            "robot": "I built Adrian, an AI-powered Raspberry Pi robot with vision & voice control.",
            "fpga": "I work on FPGA acceleration using Verilog & TensorFlow Lite for AI applications.",
            "cybersecurity": "I develop AI-driven security solutions, including an AI Network Intrusion Detection System.",
            "resume": "You can download my resume from the link in the navigation!"
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

