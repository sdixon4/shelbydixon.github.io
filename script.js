document.querySelector("a.reset").addEventListener("click", function(e) {
    e.preventDefault();

    let titles = document.querySelectorAll(".titles li");
    titles.forEach((title, index) => {
        title.style.opacity = "0";
        setTimeout(() => {
            title.style.opacity = "1";
        }, index * 1000);
    });
});

// Chatbot Functionality
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById("chatbot-input").value.toLowerCase();
        let output = document.getElementById("chatbot-output");
        let response = "I'm still learning! Please check my resume or projects for details.";

        const responses = {
            "skills": "I have experience in AI, Robotics, Cybersecurity, and FPGA programming. I work with Python, C++, Verilog, and TensorFlow.",
            "projects": "Some of my key projects include AI-powered Raspberry Pi robots, AI-Enhanced Network Intrusion Detection, and AI-Powered Phishing Detector.",
            "experience": "I'm a Computer Engineering student working on AI-driven hardware and cybersecurity projects.",
            "resume": "You can download my resume using the 'Download Resume' button on my site!"
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

