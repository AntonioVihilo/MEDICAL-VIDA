 function fecharAlerta() {
    const alerta = document.getElementById('alertaEmergente');
    alerta.style.display = 'none';
  }
  AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: false // ← permite repetir a animação sempre
});


document.querySelectorAll(".fotos-row").forEach(row => {
  // Clona todas as imagens e adiciona ao final para criar o loop
  const clone = row.innerHTML;
  row.innerHTML += clone;
});
