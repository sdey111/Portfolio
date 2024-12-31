// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animation for project section (example)
window.addEventListener("scroll", function () {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        const position = project.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            project.classList.add('fade-in');
        }
    });
});
