document.addEventListener("DOMContentLoaded", function () {
    createFireworks();
  });
  
  function createFireworks() {
    const fireworksContainer = document.querySelector(".fireworks-container");
  
    for (let i = 0; i < 50; i++) {
      const firework = document.createElement("div");
      firework.className = "firework";
      fireworksContainer.appendChild(firework);
  
      animateFirework(firework);
    }
  }
  
  function animateFirework(firework) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const randomX = Math.floor(Math.random() * screenWidth);
    const randomY = Math.floor(Math.random() * screenHeight);
  
    firework.style.left = `${randomX}px`;
    firework.style.top = `${randomY}px`;
    firework.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    firework.style.backgroundColor = getRandomColor(); // Устанавливаем случайный цвет
  }
  
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  