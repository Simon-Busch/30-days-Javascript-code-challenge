const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}


// Regular 
console.log('hello world');

// Interpolated
console.log('hello I am a %s string', '🚀' );
// console.log(`Hello ${}`)

// Styled
console.log('%c Hello I am a text', 'font-size:50px')

// warning!
console.warn('ho god damn');

// Error :|
console.error('oops');

// Info
console.info('info are cools');

// Testing
console.assert(1===1, 'that is wrong'); // if false, display on console

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p); // much more information

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`this is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} year old.`);
  console.groupEnd();

  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}.`);
  console.log(`${dog.name} is ${dog.age} year old.`);
  console.groupEnd();
})

// counting
console.count('p');
console.count('p');
console.count('p');
console.count('p');
console.count('p');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })
