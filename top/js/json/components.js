import superHeroes from "./heroes.js"
function title() {
  const header = document.createElement('header');
  header.innerHTML = `
  <h1 class="title">${superHeroes.squadName}</h1>
  <h2 class="subTitle">${superHeroes.homeTown}</h1>
  `
  return header;
}

function card(hero) {
  const container = document.createElement('article');
  let powers = "";
  hero.powers.forEach(power => {
    powers +=
      `
    <li>${power}</li>
    `
  });
  container.innerHTML =
    `
  <h3 class="hero--title">${hero.name}</h3>
  <p>${hero.secretIdentity}</p>
  <p>${hero.age}</p> 
  <ul>
    ${powers}
  </ul>
  `
  return container;
}
function cards() {
  const container = document.createElement('div');
  superHeroes.members.forEach(hero => {
    container.appendChild(card(hero));
  })
  return container;
}
export { title, cards }