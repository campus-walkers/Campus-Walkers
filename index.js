

// FAQ SECTION: click a question to open or close its answer //

const questions = document.getElementsByClassName("faq-question");

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {

        questions[i].parentElement.classList.toggle("open");
    });
}


// animations

/* scroll reveal */

const revealSelectors = [
  ".ratings .headers",
  ".rating-card",
  "features--description",
  ".features--img",
  ".faq .headers",
  ".faq-item",
];

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll(revealSelectors.join(",")).forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});