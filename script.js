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

