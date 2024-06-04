document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.feedback-button');

  buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
          const rating = button.getAttribute('data-rating');
          window.location.assign('https://xvzrlx.github.io/testGas/pages/ExtendedFeedback.html');
          button.classList.add('clicked');
      });
  });
});