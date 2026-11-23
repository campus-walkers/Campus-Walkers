// when you click on a dot, the matching part gets highlighted

const dots = document.querySelectorAll('.dot');
const parts = document.querySelectorAll('.part');

for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', () => {
        for (let j = 0; j < dots.length; j++) {
            dots[j].classList.remove('selected');
            parts[j].classList.remove('selected');
        }
        dots[i].classList.add('selected');
        parts[i].classList.add('selected');
    });
}