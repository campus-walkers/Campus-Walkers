

// FAQ SECTION: click a question to open or close its answer //

const questions = document.getElementsByClassName("faq-question");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {

        questions[i].parentElement.classList.toggle("open");
    });
}
