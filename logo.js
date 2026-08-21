document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll("img.logo-img, img.footer-logo");

    logos.forEach((img) => {
        img.addEventListener("error", () => {
            const fallback = document.createElement("span");
            fallback.textContent = "POPCRAFT AI";
            fallback.className = "logo-fallback-text";
            fallback.style.fontWeight = "800";
            fallback.style.letterSpacing = "0.5px";
            fallback.style.color = "#ffffff";
            fallback.style.fontFamily = "inherit";
            fallback.style.fontSize = img.classList.contains("footer-logo") ? "18px" : "22px";
            img.replaceWith(fallback);
        }, { once: true });
    });
});