 const cards = document.querySelectorAll('.card-expandable');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => card.classList.add('expanded'));
      card.addEventListener('mouseleave', () => card.classList.remove('expanded'));
    });

 document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.reveal', {
    origin: 'bottom',
    distance: '40px',
    duration: 400,
    delay: 40,
    easing: 'ease-in-out',
    interval: 150,
    reset: true,
    viewFactor: 0.1
  });
});

