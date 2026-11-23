
const stepButtons = document.getElementsByClassName("step-button");
const stepTitle = document.querySelector("#step-title");
const stepText = document.querySelector("#step-text");

for (let i = 0; i < stepButtons.length; i++) {
    stepButtons[i].addEventListener("click", function () {

        // Un-highlight every button
        for (let j = 0; j < stepButtons.length; j++) {
            stepButtons[j].classList.remove("selected");
        }

        // Highlight the button that was clicked
        stepButtons[i].classList.add("selected");

        // Show the text saved in the button's data-title and data-text
        stepTitle.textContent = stepButtons[i].getAttribute("data-title");
        stepText.textContent = stepButtons[i].getAttribute("data-text");
    });
}