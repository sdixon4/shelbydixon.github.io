function handleKeyPress(event) {
    if (event.key === 'Enter') {
        let input = document.getElementById("chatbot-input").value.toLowerCase();
        let output = document.getElementById("chatbot-output");
        let response = "I'm still learning! Please check my resume or projects for details.";

        const responses = {
            "skills": "I have experience in AI, Robotics, Cybersecurity, and FPGA programming. I work with C, C++, Python, and TensorFlow.",
            "projects": "I am currently working on NASA's RockSat-X project and First Nations Launch high-powered rocketry.",
            "experience": "I transitioned from being an organic farmer to a Computer Engineering student. I’ve worked in aerospace, physics, and cybersecurity.",
            "resume": "You can download my resume from the navigation bar!"
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

