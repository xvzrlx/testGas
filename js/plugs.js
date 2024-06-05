document.addEventListener('DOMContentLoaded', () => {
const answers = JSON.parse(localStorage.getItem('answers'));
const rating = localStorage.getItem('rating');
console.log(answers);

const thnksbtn = document.getElementById('submit-btn');
thnksbtn.style.color = "white";
thnksbtn.style.border = "none";

thnksbtn.addEventListener('click', (e) => {
    window.location.href = 'https://rutube.ru/';
})
});