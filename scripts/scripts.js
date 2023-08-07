let menu = document.getElementById("menu-links")

function mostrarMenu() {
    if (window.getComputedStyle(menu).display == 'none') {
        // Mostre o menu
        // alert("ola exemplo de um pop up")
        menu.style.display = "flex";
        menu_barras.setattribute("aria-expanded", "true")
        menu_barras.setattribute("aria-label", "fechar menu")
    } else {
        menu.style.display = "none";
    }
}menu_barras.setattribute("aria-expanded", "false")
        menu_barras.setattribute("aria-label", "fechar menu")