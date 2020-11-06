const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// return a promise

fetch(endpoint)
  .then(blob => blob.json())// at this point doesn't know what kind of data will be returned we have the json function available on this object
  .then(data => cities.push(...data)) // return an array with the datas // ... spread in the array otherwise, it's nesting the array in an array

function findMatches (wordToMatch, citiesArray) {
  return cities.filter(place =>  {
    //here we need to figure out if the cities or state matches what was searched
    const regex = new RegExp(wordToMatch, 'gi') // 'g' means it will look on the entire string 'i'case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayMatches () {
  // console.log(this.value);
  const matchArray = findMatches(this.value, cities); // this.value refer to the what's inputed, line 28 29
  // console.log(matchArray);
  const html = matchArray.map(place => {
    const regex = new RegExp (this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
    <li>
      <span class="name">${cityName} ${stateName} </span>
      <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `
  }).join('');
  suggestions.innerHTML = html
};


const searchInput = document.querySelector('.search ');
const suggestions = document.querySelector('.suggestions ');

searchInput.addEventListener('change', displayMatches); //'change' event only fire when you go out of the input
searchInput.addEventListener('keyup', displayMatches);