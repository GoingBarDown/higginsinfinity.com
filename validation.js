// When the user scrolls, check the scroll position.
window.addEventListener('scroll', function() {
    const arrows = document.querySelector('.scroll-arrows');
    if (window.scrollY < 30) {  // Adjust '100' to the desired scroll distance
        arrows.style.opacity = 1;  // Make arrows visible
    } else {
        arrows.style.opacity = 0;  // Hide arrows
    }
});






