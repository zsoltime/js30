/* eslint-disable no-console */
const consoleStyle = 'background-color: #44c3e5; color: #777; font-size: 14px;padding: 3px;';
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(person => (
  person.year >= 1500 && person.year < 1600
));
console.log('%c List of inventors for those who were born in the 1500s', consoleStyle);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names = inventors.map(person => ({
  first: person.first,
  last: person.last,
}));
console.log('%c Array of the first and last names', consoleStyle);
console.table(names);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted = inventors.sort((a, b) => a.year - b.year);
console.log('%c Sort the inventors by birthdate', consoleStyle);
console.table(sorted);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const total = inventors.reduce((acc, p) => acc + (p.passed - p.year), 0);
console.log('%c Number of years all the inventors lived:', consoleStyle);
console.log(total);

// 5. Sort the inventors by years lived
const yearsLived = inventors.map(person => ({
  name: `${person.first} ${person.last}`,
  age: person.passed - person.year,
})).sort((a, b) => a.age - b.age);
console.log('%c Sort the inventors by years lived', consoleStyle);
console.table(yearsLived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = category.querySelectorAll('a');
// const de = [...links]
//   .map(link => link.textContent)
//   .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByLastName = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log('%c Sort the people alphabetically by last name', consoleStyle);
console.log(sortByLastName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const instances = data.reduce((all, curr) => {
  if (curr in all) {
    all[curr] += 1;
  } else {
    all[curr] = 1;
  }
  return all;
}, {});

console.log('%c Sum up the instances', consoleStyle);
console.log(instances);
