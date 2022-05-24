setupEventHandling();

function setupEventHandling() {
    changeBackgroundColorHue();
    changeArrowDirection();
}

function changeBackgroundColorHue() {
    const root = document.querySelector(":root");
    const range = document.querySelector("input");

    range?.addEventListener("change", () => {
        root.style.setProperty("--color-hue", range.value);
    });
}

function changeArrowDirection() {
    const headers = document.querySelectorAll("main section header");

    headers?.forEach(header => {
        header.addEventListener("click", () => {
            header.querySelector("svg").classList.toggle("rotate");
        });
    });
}
