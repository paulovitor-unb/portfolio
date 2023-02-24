setupEventHandling();

function setupEventHandling() {
    changeActiveButton();
    changeBackgroundColorHue();
    changeArrowDirection();
}

function changeActiveButton() {
    const buttons = document.querySelectorAll("nav button");

    buttons?.forEach(button => {
        button.addEventListener("click", function () {
            if (button.classList.contains("active")) {
                return;
            }

            button.parentElement
                .querySelector("button.active")
                .classList.remove("active");

            button.classList.add("active");
        });
    });
}

function changeBackgroundColorHue() {
    const root = document.querySelector(":root");
    const range = document.querySelector("input");

    range?.addEventListener("change", function () {
        root.style.setProperty("--color-hue", range.value);
    });
}

function changeArrowDirection() {
    const headers = document.querySelectorAll("main section header");

    headers?.forEach(header => {
        header.addEventListener("click", function () {
            header.querySelector("svg").classList.toggle("rotate");
        });
    });
}
