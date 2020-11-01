function playSound (event) {
    // console.log(event);
    // Return the object of the key pressed 
    // console.log(event.keyCode); 
    // Return the object itself
  
    // [] is a css selector to select audio's attribute
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    // console.log(audio);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    if (!audio) return; // means, if audio is NULL, function stops
    audio.currentTime = 0;
    // it rewinds the audio to 0 every time we press
    audio.play();
    // if you call audio.play(); on a element which is already playing, it won't want play directly
    key.classList.add('playing');
    // key.classList.remove('playing');
};

function removeTransition(event) {
  // console.log(event); // check in console everything that is happening
  if (event.propertyName !== 'transform') return;
  // console.log(event.propertyName); // return the word TRANSFORM // CSS Property
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); // returns an Node List
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// once the transition ( switching class, scaling up ...)

window.addEventListener('keydown', playSound);