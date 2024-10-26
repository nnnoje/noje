document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.querySelector(".nav-phone__toggle");
    const menu = document.querySelector(".nav-phone__menu");
    const closeBtn = document.querySelector(".nav-phone__close");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show-menu");
    });

    closeBtn.addEventListener("click", () => {
        menu.classList.remove("show-menu");
    });
});
