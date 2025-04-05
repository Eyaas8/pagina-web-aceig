console.log("Sitio web ACEIG UNSA cargado correctamente.");

// Alerta al hacer clic en imágenes de actividades
document.querySelectorAll(".galeria img").forEach((img) => {
  img.addEventListener("click", () => {
    alert("¡Esta es una actividad reciente de ACEIG UNSA!");
  });
});






