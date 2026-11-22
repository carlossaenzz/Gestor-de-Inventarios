//* Logica de inicio y cierre de sesión
// Obtiene el formulario de login por su ID
const loginForm = document.getElementById('loginForm');

// Ejecuta el código solo si el formulario de login existe en la página
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {

        // Evita que el formulario se envíe y recargue la página
        event.preventDefault();

        // Obtiene los datos ingresados por el usuario en los campos de usuario y contraseña
        const username = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        // Obtiene los usuarios registrados desde localStorage usando la función definida en storage.js
        const usuarios = obtenerUsuarios();

        // Busca un usuario que coincida con el nombre de usuario y contraseña ingresados
        const usuarioEncontrado = usuarios.find(function (usuario) {
            return usuario.username.toLowerCase() === username.toLowerCase() && usuario.password === password
        });

        // Evitamos iniciar sesión si los datos son incorrectos
        if (!usuarioEncontrado) {
            // Si no se encuentra un usuario que coincida, mostramos un mensaje de error
            console.error("Usuario o contraseña incorrectos.");
            return;
        }

        // Crea los datos de la sesión del usuario autenticado
        const sesion = {
            usuarioId: usuarioEncontrado.id,
            username: usuarioEncontrado.username,
            fechaInicio: new Date().toISOString()
        };

        // Guarda la sesión del usuario logueado en localStorage usando la función definida en storage.js
        guardarSesion(sesion);

        // Si se encuentra un usuario que coincida, mostramos un mensaje de éxito y redirigimos a la página principal
        console.log("Inicio de sesión exitoso. Bienvenido, " + usuarioEncontrado.nombre + "!");

        // Redirige al dashboard después de inicar sesión
        window.location.href = "dashboard.html";

    });
}


//* Cierre de sesión
// Obtiene el boton para cerrar sesión
const logoutButton = document.getElementById("logoutButton");

// Si el boton existe en la pagina ejecuta esta lógica
// Ejecuta la funcion cuando el usuario haga click en el botón
if (logoutButton) {
    logoutButton.addEventListener("click", function () {

        // Elimina la sesión activa almacenada mediante la función definida en storage.js
        eliminarSesion();

        // Redirige al usuario al inicio de sesión
        window.location.href = "login.html";
    });
}

