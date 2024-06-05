document.addEventListener('DOMContentLoaded', () => {
const isCompleted = localStorage.getItem('isCompleted');
const rating = localStorage.getItem('rating');
  
if (isCompleted){
    window.location.href = 'https://xvzrlx.github.io/testGas/pages/srry.html';
    const answers = JSON.parse(localStorage.getItem('answers'));
}

const answerButtons = document.querySelectorAll('.answer-button');
const submitButton = document.querySelector('.submit-button');

let answers = {
  '0': rating
};

answerButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const questionId = button.dataset.questionId;
    const responseId = button.dataset.responseId;
  
    answers[questionId] = responseId;
  
    answerButtons.forEach((otherButton) => {
      if (otherButton.dataset.questionId === questionId) {
        otherButton.disabled = false;
        otherButton.classList.remove('clicked');
      }
    });
  
    button.disabled = true;
    button.classList.add('clicked');
  
    if (Object.keys(answers).length === 7) {
      submitButton.disabled = false;
      submitButton.style.color = "white";
      submitButton.style.background = "#00A1E7";
      submitButton.style.border = "none";
    }
  });
});

submitButton.addEventListener('click', (e) => {
    localStorage.setItem('isCompleted', true);
    localStorage.setItem('answers', JSON.stringify(answers));
    window.location.href = 'https://xvzrlx.github.io/testGas/pages/thanks.html';
  });
});