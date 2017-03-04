/* eslint-disable no-console */
const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const btn = document.getElementById('breakdown');

function makeGreen() {
  this.style.color = '#BADA55';
  this.style.fontSize = '50px';
}

btn.addEventListener('click', makeGreen);

// Regular
console.log('Hello');

// Interpolated
console.log('Hey, %s! How you doin?', 'Zsolti');

// Styled
console.log('%c I am a styled text', 'color: red; font-size: 24px;');

// warning!
console.warn('Shit happens...');

// Error :|
console.error('It is even worse...');

// Info
console.info('Did you know that?');

// Testing
console.assert(true === false, 'This is the assertion message, displayed only if assertion failed');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is the group for ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`It's something like ${dog.age * 7} in dog years`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Zsolti');
console.count('Zsolti');
console.count('Andy');
console.count('Andy');
console.count('Andy');
console.count('Zsolti');
console.count('Zsolti');
console.count('Zsolti');
console.count('Zsolti');
console.count('Andy');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/zsoltime')
.then(data => data.json())
.then((data) => {
  console.timeEnd('fetching data');
  console.log(data);
});

// table
console.table(dogs);
