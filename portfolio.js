document.addEventListener('DOMContentLoaded', () => {
    // Counting Animation
    const counters = document.querySelectorAll('.count');
    counters.forEach(counter => {
        const updateCounter = () => {
            const target = +counter.getAttribute('data-target');
            const current = +counter.innerText;
            const increment = target / 200;

            if (current < target) {
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });

    // Skill Bar Animation and Alternating Colors
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    const colors = ['#ff7e5f', '#feb47b', '#24c6dc', '#514a9d', '#f76b1c', '#4caf50']; // Array of colors for alternating

    skillBars.forEach((bar, index) => {
        const percentage = bar.getAttribute('data-skill');
        bar.style.width = percentage;
        bar.style.backgroundColor = colors[index % colors.length]; // Alternate colors
    });
});

//section
// Function to show different sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}