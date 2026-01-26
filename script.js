// MOBILE MENU TOGGLE
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Close menu when a link is clicked (VERY IMPORTANT)
document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


// ABSTRACT RANDOM MOTION 
const blobs = document.querySelectorAll('.blob');
const lines = document.querySelectorAll('.line');

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

function animateElement(el, rangeX, rangeY) {
  let posX = 0;
  let posY = 0;
  let dirX = 1;
  let dirY = 1;

  function move() {
    posX += dirX * 0.1;
    posY += dirY * 0.05;

    if (posX > rangeX || posX < -rangeX) dirX *= -1;
    if (posY > rangeY || posY < -rangeY) dirY *= -1;

    el.style.transform = `translate(${posX}px, ${posY}px)`;
    requestAnimationFrame(move);
  }

  move();
}

blobs.forEach((b) => animateElement(b, randomFloat(20,40), randomFloat(10,30)));
lines.forEach((l) => animateElement(l, randomFloat(30,60), 0));

// FLOATING 3D CARD
const card = document.querySelector('.about-card');

let angleX = 0;
let angleY = 0;

function floatCard() {
  angleX += 0.02;
  angleY += 0.01;

  card.style.transform = `
    rotateY(${Math.sin(angleX) * 5}deg)
    rotateX(${Math.sin(angleY) * 5}deg)
  `;

  requestAnimationFrame(floatCard);
}

floatCard();

