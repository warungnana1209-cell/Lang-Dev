// CONTACT FORM
const form = document.getElementById('contactForm');

if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    form.reset();
  });
}

// HEADER EFFECT
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  
  if (window.scrollY > 40) {
    header.classList.add('header-scroll');
  } else {
    header.classList.remove('header-scroll');
  }
});

// FLOAT EFFECT
const heroImage = document.querySelector('.hero-image');

window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  
  if (heroImage) {
    heroImage.style.transform = `translateY(${scroll * 0.04}px)`;
  }
});

// MOUSE GLOW EFFECT
const glow = document.createElement('div');
glow.className = 'mouse-glow';
document.body.appendChild(glow);

window.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});