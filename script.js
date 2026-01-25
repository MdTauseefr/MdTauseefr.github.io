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
// Typing effect for hero section

  const texts = [
    "Md Tauseef Raja",
    "Frontend Developer",
    "JavaScript Developer",
  ];

  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  const speed = 120;
  const delay = 1200;

  const element = document.getElementById("Md Tauseef Raja");

  function typeLoop() {
    const currentText = texts[index];

    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex--);
    } else {
      element.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => isDeleting = true, delay);
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index = (index + 1) % texts.length;
    }

    setTimeout(typeLoop, isDeleting ? speed / 2 : speed);
  }

  typeLoop();


