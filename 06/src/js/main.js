const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

fetch(endpoint)
.then(res => res.json())
.then((res) => {
  cities.push(...res);
})
// eslint-disable-next-line no-console
.catch(err => console.error(err.message));

function findMatches(query, listOfCities) {
  if (query.length === 0) { return false; }
  return listOfCities.filter((place) => {
    const regex = new RegExp(query, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function replacer(match) {
  return `<span class="hl">${match}</span>`;
}

function displayMatches() {
  let html;
  const matches = findMatches(this.value, cities);

  if (matches && matches.length > 0) {
    html = matches.map((place) => {
      const regex = new RegExp(this.value, 'gi');
      const cityName = place.city.replace(regex, replacer);
      const stateName = place.state.replace(regex, replacer);

      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">
            ${(+place.population).toLocaleString()}
          </span>
        </li>
      `;
    }).join('');
  } else if (matches.length === 0) {
    html = `<li>No matches for "${this.value}"</li>`;
  } else {
    html = '<li>Filter for a city/state</li>';
  }
  suggestions.innerHTML = html;
}

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
