window.addEventListener('keydown', function (e){
  const audio = document.querySelector(`#${e.key}`);  
  const keyClass = document.querySelector(`.${e.key.toUpperCase()}`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  keyClass.classList.add('playing')
});

function removeTransition(e) {
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition)
});


