// Rolagem suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  
  // Modo escuro
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("toggle-dark");
  
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  });
  