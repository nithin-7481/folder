// Typing effect
var typed = new Typed("#typing", {
  strings: ["Frontend Developer", "UI/UX Designer", "Web Creator"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true
});

// Scroll button
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 },
    move: { speed: 2 },
    line_linked: { enable: true }
  }
});