document.addEventListener('DOMContentLoaded', () => {
const answers = JSON.parse(localStorage.getItem('answers'));
console.log(answers);

const thnksbtn = document.getElementById('submit-btn');

thnksbtn.addEventListener('click', (e) => {
    window.location.href = 'https://rutube.ru/';
})
});