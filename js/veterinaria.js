// Lista global para almacenar las mascotas registradas
var mascotas = [];

function mostrarDatos() {
    var nombre = document.getElementById("nombre").value;
    var especie = document.getElementById("especie").value;
    var raza = document.getElementById("raza").value;
    var padecimiento = document.getElementById("padecimiento").value;
    var propietario = document.getElementById("propietario").value;
    var telefono = document.getElementById("telefono").value;
    var imagen = document.getElementById("imagen").files[0];

    // Agregar la nueva mascota a la lista global
    mascotas.push({
        nombre: nombre,
        especie: especie,
        raza: raza,
        padecimiento: padecimiento,
        propietario: propietario,
        telefono: telefono,
        imagen: imagen
    });

    // Mostrar todas las mascotas registradas en la lista
    mostrarListaMascotas();
}

function mostrarListaMascotas() {
    var listaMascotasElement = document.getElementById("listaMascotas");
    // Limpiar la lista antes de volver a mostrarla
    listaMascotasElement.innerHTML = "";

    // Iterar sobre la lista de mascotas y agregar cada una a la lista en el HTML
    mascotas.forEach(function(mascota, index) {
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `
            <strong>Nombre: ${mascota.nombre}</strong> (${mascota.especie}) - ${mascota.raza}<br>
            <small>Padecimiento: ${mascota.padecimiento}</small><br>
            <small>Propietario: ${mascota.propietario} - Teléfono: ${mascota.telefono}</small><br>
            <img src="${URL.createObjectURL(mascota.imagen)}" alt="Foto de la mascota" style="max-width: 100px;">
        `;
        listaMascotasElement.appendChild(listItem);
    });

    // Mostrar el contenedor de datos de mascotas
    document.getElementById("datosMascota").style.display = "block";
}
