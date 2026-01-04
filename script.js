// Simple scroll reveal animation
  const cards = document.querySelectorAll('.skill-card, .project-card, .experience-box');

  window.addEventListener('scroll', () => {
    cards.forEach(card => {
      const top = card.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }
    });
  });