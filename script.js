ScrollReveal().reveal('.Membros', { delay: 500});
ScrollReveal().reveal('.agenda', { delay: 100});
ScrollReveal().reveal('.alb1', { delay: 100});

const cards = document.querySelectorAll('.card-expandable');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('expanded');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('expanded');
      });
    });
