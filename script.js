// Mostrar mensaje en consola cuando se carga el sitio
console.log("Sitio web de ACEIG UNSA cargado correctamente.");

// Efecto suave al hacer hover en las imágenes (ya aplicado con CSS, pero aquí puedes agregar lógica futura)
const imagenes = document.querySelectorAll(".galeria img");

imagenes.forEach(img => {
  img.addEventListener("click", () => {
    alert("¡Esta es una de nuestras actividades destacadas!");
  });
});

// Scroll suave para anclas (si luego agregas menú de navegación)
document.querySelectorAll('a[href^="#"]').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
