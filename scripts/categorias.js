// Obtener elementos del DOM
document.addEventListener("DOMContentLoaded", () => {
  const accesoriosBtn = document.getElementById('accesorios');
  if (accesoriosBtn) {
    accesoriosBtn.addEventListener("click", () => {
      const accesoriosContainer = document.querySelector('.accesorios');
      if (accesoriosContainer) {
        accesoriosContainer.classList.remove('inactive');
      }
    });
  }
});










