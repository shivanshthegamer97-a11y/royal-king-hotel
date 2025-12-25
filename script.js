// Smooth scroll for navbar links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form submit message
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    form.reset();
  });
}

// Optional: Day / Night exterior toggle (future ready)
let isDay = true;
function toggleExterior() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  if (isDay) {
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('assets/exteriornight.jpg')";
  } else {
    hero.style.backgroundImage =
      "linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('assets/exteriorday.jpg')";
  }
  isDay = !isDay;
}