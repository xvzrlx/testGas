document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.feedback-button');

  buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
          const rating = button.getAttribute('data-rating');
          localStorage.setItem('rating', rating);
          window.location.href = 'https://xvzrlx.github.io/testGas/pages/ExtendedFeedback.html';
          button.classList.add('clicked');
      });
  });
});