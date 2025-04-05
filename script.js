// Confirmación en consola
console.log("Sitio de ACEIG UNSA cargado con éxito.");

// Hover click en imágenes
document.querySelectorAll(".galeria img").forEach((img) => {
  img.addEventListener("click", () => {
    alert("Actividad destacada del capítulo ACEIG UNSA.");
  });
});

