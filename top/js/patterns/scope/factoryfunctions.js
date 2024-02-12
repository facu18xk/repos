

//normal constructor 
function User(name) {
  this.name = name;
  this.discord = "@" + name;
}
//Factory function

// function createUser(name) {
//   const discord = "@" + name;
//   return { name, discord };
// }
// const user1 = new User("Facu");
// const user2 = createUser("hi");


//Private keys 
function createUser(name) {
  const discord = "@" + name;
  let reputation = 0;
  const giveReputation = () => reputation++;
  const getReputation = () => reputation;
  return { name, discord, giveReputation, getReputation }
}
function createPlayer(name, lvl) {
  const user = createUser(name);
  const increaseLvl = () => lvl++;
  return Object.assign({}, user, { increaseLvl });
}
const player1 = createPlayer("La zeta", 12);
//Module pattern
const calculator = (function () {
  const add = (a, b) => a + b;
  const sub = (a, b) => a - b;
  const mult = (a, b) => a * b;
  const div = (a, b) => a / b;
  return { add, sub, mult, div }
})();

//Closures 
function outer() {
  const outerVar = "Hey I'm a outer var";
  return function inner() {
    const innerVar = "Hey I'm a inner var";
    console.log(innerVar);
    console.log(outerVar);
  }
}

function createGreeting(greeting = "") {
  const myGreet = greeting.toUpperCase();

  return function (name) {
    return `${myGreet} ${name}`
  };
}



function createGame(gameName) {
  let score = 0;

  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`
  }
}
const ufcGame = createGame("ufc");
ufcGame();
ufcGame();
let result = ufcGame();
const stupidGame = createGame("Football");
stupidGame();
result = stupidGame();
console.log(result);