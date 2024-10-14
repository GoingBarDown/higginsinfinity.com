document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// When the user scrolls, check the scroll position
window.addEventListener('scroll', function() {
    const arrows = document.querySelector('.scroll-arrows');
    if (window.scrollY < 30) {  // Adjust '100' to the desired scroll distance
        arrows.style.opacity = 1;  // Make arrows visible
    } else {
        arrows.style.opacity = 0;  // Hide arrows
    }
});






