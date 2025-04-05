console.log("Sitio web ACEIG UNSA cargado correctamente.");

// Mensaje al hacer clic en las imágenes
document.querySelectorAll(".galeria img").forEach((img) => {
  img.addEventListener("click", () => {
    alert("¡Esta es una actividad reciente de ACEIG UNSA!");
  });
});

