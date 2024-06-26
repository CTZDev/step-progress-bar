const stepProgressBar = (steps, btnForward, btnBack) => {
  const $steps = document.querySelectorAll(steps);
  const $btnBack = document.getElementById(btnBack);
  const $btnForward = document.getElementById(btnForward);
  const $imgSteps = ['./assets/check.svg', './assets/not_charge.svg'];
  const $altSteps = ['Step Success', 'Step not charge'];
  let indexStep = 0;
  const LIMIT_STEP = $steps.length;

  document.addEventListener('click', (e) => {
    if (e.target === $btnForward) {
      if (indexStep <= LIMIT_STEP - 2) {
        $steps[indexStep++].classList.add('active');
        $steps[indexStep].classList.remove('step-icon-error');
        $steps[indexStep].classList.add('step-icon-ok');
        const $img = $steps[indexStep].querySelector('img');
        const $txtStep = $steps[indexStep].closest('.step').querySelector('.step-text');
        $img.src = $imgSteps[0];
        $img.alt = $altSteps[0];
        $txtStep.classList.add('active');
        $btnBack.style.backgroundColor = 'slateblue';
        $btnBack.disabled = false;

        if (indexStep === LIMIT_STEP - 1) {
          e.target.disabled = true;
          e.target.style.backgroundColor = 'rgb(184, 184, 184)';
        }
      }
    }

    if (e.target === $btnBack) {
      $steps[indexStep].classList.add('step-icon-error');
      $steps[indexStep].classList.remove('step-icon-ok');
      $steps[indexStep - 1].classList.remove('active');
      const $img = $steps[indexStep].querySelector('img');
      const $txtStep = $steps[indexStep].closest('.step').querySelector('.step-text');
      $img.src = $imgSteps[1];
      $img.alt = $altSteps[1];
      $txtStep.classList.remove('active');
      indexStep--;

      if (indexStep === 0) {
        e.target.disabled = true;
        e.target.style.backgroundColor = 'rgb(184, 184, 184)';
        return;
      }

      $btnForward.style.backgroundColor = 'slateblue';
      $btnForward.disabled = false;
    }
  });
};

document.addEventListener('DOMContentLoaded', (e) => {
  stepProgressBar('.step-icon', 'forward', 'back');
});
