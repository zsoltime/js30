/* eslint-disable no-console */
const consoleStyle = 'background-color: #0aaaa0; color: #fff; font-size: 13px; padding: 2px;';
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

console.log('\n');
console.log('%c The people array', consoleStyle);
console.table(people);

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const atLeastOneIsAdult = people.some(person => (new Date().getFullYear() - person.year) >= 19);
console.log('\n');
console.log('%c Check if at least one person is adult using Array.some()', consoleStyle);
console.log({ atLeastOneIsAdult });

// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(person => (new Date().getFullYear() - person.year) >= 19);
console.log('\n');
console.log('%c Check if everyone is adult using Array.every()', consoleStyle);
console.log({ allAdults });

console.log('\n');
console.log('%c The comments array', consoleStyle)
console.table(comments);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment = comments.find(x => x.id === 823423);
console.log('\n');
console.log('%c Find the comment with ID of 823423 using Array.find()', consoleStyle);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(x => x.id === 823423);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1),
];
console.log('\n');
console.log('%c Find the index of the comment w/ ID 823423 using Array.findIndex()', consoleStyle);
console.log(index);
console.log('\n');
console.log('%c Delete the comment w/ ID 823423', consoleStyle);
console.table(newComments);
