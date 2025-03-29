document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  const fadeIns = document.querySelectorAll(".fade-in");
  fadeIns.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.3}s`;
  });
});
