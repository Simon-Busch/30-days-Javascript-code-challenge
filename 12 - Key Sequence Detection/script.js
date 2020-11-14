
const pressedArray = [];
const secretCode = 'simoncool';
const body = document.querySelector('.body');

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressedArray.push(e.key);
  pressedArray.splice(-secretCode.length - 1, pressedArray.length - secretCode.length);
  //identify the length of the scretCode max. Otherwise the array is endless
  if (pressedArray.join('').includes(secretCode)) {
    // console.log('great job !');
    cornify_add();
    document.body.style.backgroundColor = "yellow";
  }
  console.log(pressedArray);
});
