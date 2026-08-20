document.addEventListener("DOMContentLoaded", () => {
    const logoImg = document.querySelector(".brand-logo img");

    if (logoImg) {
        logoImg.addEventListener("error", () => {
            console.warn("Logo failed to load from primary path.");
        });
    }
});