// Project image carousels
document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const dots = carousel.querySelectorAll('.carousel-dot');
    const arrows = carousel.querySelectorAll('.carousel-arrow');
    let index = 0;

    function goTo(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, di) => d.classList.toggle('active', di === index));
    }

    arrows.forEach(arrow => {
        arrow.addEventListener('click', () => goTo(index + parseInt(arrow.dataset.dir, 10)));
    });
    dots.forEach((dot, di) => {
        dot.addEventListener('click', () => goTo(di));
    });

    // Swipe support (touch)
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(diff) > 40) goTo(index + (diff < 0 ? 1 : -1));
    }, { passive: true });
});