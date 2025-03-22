
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    let input = document.getElementById("chatbot-input").value.toLowerCase();
    let output = document.getElementById("chatbot-output");
    let response = "I'm still learning! Please check my resume or projects for details.";

    const responses = {
      "skills": "I have experience in AI, Robotics, Cybersecurity, FPGA programming, and tools like Python, C++, Verilog, Arduino, Git, LTSpice, and Aladdin.",
      "projects": "Some of my current projects include a Raspberry Pi robot named Adrian, First Nations Launch rocketry, and the RockSat-X program.",
      "experience": "I'm a Computer Engineering student at UH Manoa. I’ve worked as a physics lab assistant, research lead, and organic farmer.",
      "resume": "Please check my Resume page or contact me directly at sdixon4@hawaii.edu.",
      "robot": "I built Adrian, an AI-powered Raspberry Pi robot integrating computer vision and speech recognition.",
      "rocksat": "I'm working on NASA's RockSat-X 2025 project, leading the Mobius camera payload system.",
      "fnl": "I'm the Simulations and Motor Lead for the 2025 First Nations Launch rocketry challenge."
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
