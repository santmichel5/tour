const categorias = {
  talleres: [
    { nombre: "Panadería", archivo: "imagenes/panaderia.jpg" },
    { nombre: "Estética", archivo: "imagenes/estetica.jpg" },
    { nombre: "Mecánica", archivo: "imagenes/mecanica.jpg" },
    { nombre: "Electricidad", archivo: "imagenes/electricidad.jpg" },
    { nombre: "Corte y Confección", archivo: "imagenes/confeccion.jpg" },
    { nombre: "Repostería", archivo: "imagenes/reposteria.jpg" },
    { nombre: "Cocina", archivo: "imagenes/cocina.jpg" },
    { nombre: "Serigrafía", archivo: "imagenes/serigrafia.jpg" }
  ],
  edificios: [
    { nombre: "Dirección", archivo: "imagenes/direccion.jpg" },
    { nombre: "Laboratorios", archivo: "imagenes/laboratorios.jpg" }
  ],
  zonas: [
    { nombre: "Áreas Verdes", archivo: "imagenes/areas_verdes.jpg" },
    { nombre: "Comedores", archivo: "imagenes/comedores.jpg" },
    { nombre: "Pérgola", archivo: "imagenes/pergola.jpg" },
    { nombre: "Canchas", archivo: "imagenes/canchas.jpg" },
    { nombre: "Bosque", archivo: "imagenes/bosque.jpg" },
    { nombre: "Granja", archivo: "imagenes/granja.jpg" }
  ]
};

function mostrarPuntos(categoria) {
  const container = document.getElementById("puntosContainer");
  container.innerHTML = ""; // borra lo anterior

  categorias[categoria].forEach(lugar => {
    const punto = document.createElement("button"); // se crea el botón
    punto.textContent = "• " + lugar.nombre; // se le pone el nombre del lugar
    punto.style.display = "block"; // para que quede uno debajo del otro
    punto.style.margin = "0.5rem auto"; // espacio entre botones
    punto.onclick = () => mostrarImagen360(lugar.archivo); // cuando se hace clic, se muestra la imagen
    container.appendChild(punto); // se agrega el botón a la página
  });
}

// Esta función muestra la imagen 360 en el visor
function mostrarImagen360(ruta) {
  const imagen = document.getElementById("imagen360"); // busca la etiqueta img
  imagen.src = ruta; // le cambia la imagen
  imagen.style.display = "block"; // la muestra (por si estaba oculta)
}

// Esta función se usa cuando el usuario deja un comentario
function enviarComentario() {
  const estrellas = document.querySelector('input[name="rating"]:checked'); // cuántas estrellas eligió
  const comentario = document.querySelector('textarea').value; // el texto que escribió

  // Si no escribió comentario o no eligió estrellas, le pide que lo haga
  if (!estrellas || !comentario.trim()) {
    alert("Por favor selecciona una calificación y escribe un comentario.");
    return;
  }

  // Muestra un mensaje de agradecimiento
  alert(`Gracias por tu comentario!\nCalificación: ${estrellas.value} estrellas\nComentario: ${comentario}`);
}
