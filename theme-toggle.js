document.addEventListener("DOMContentLoaded", () => {
    const toggleTheme = document.getElementById("toggle-theme");

    // Load theme from local storage
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        toggleTheme.checked = true;
    }

    toggleTheme.addEventListener("change", () => {
        if (toggleTheme.checked) {
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-mode");
            localStorage.setItem("theme", "dark");
        }
    });
});

