 // Función para mostrar la ventana emergente de cookies y el fondo oscuro
 function showCookiePopup() {
    document.getElementById("cookie-overlay").style.display = "block";
    document.getElementById("cookie-popup").style.display = "block";
}

// Función para ocultar la ventana emergente de cookies y el fondo oscuro
function hideCookiePopup() {
    document.getElementById("cookie-overlay").style.display = "none";
    document.getElementById("cookie-popup").style.display = "none";
}

// Función para manejar la aceptación de cookies
function acceptCookies() {
    hideCookiePopup();
    // Puedes agregar código aquí para establecer las cookies
}

// Función para manejar el rechazo de cookies
function rejectCookies() {
    hideCookiePopup();
    // Puedes agregar código aquí para gestionar el rechazo de cookies
}

// Mostrar la ventana emergente cuando se carga la página
window.onload = showCookiePopup;

// Asociar eventos a los botones de Aceptar y Rechazar
document.getElementById("accept-cookie").addEventListener("click", acceptCookies);
document.getElementById("reject-cookie").addEventListener("click", rejectCookies);