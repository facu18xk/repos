class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getPages() {
    return this.pages
  }
  getRead() {
    return this.read;
  }

  info() {
    let readStatus = (this.getRead()) ? "you already read" : "not read yet";
    return `The ${this.getTitle()} from ${this.getAuthor()}, ${this.getPages()} pages, ${readStatus}`;
  }
}
const outlive = new Book("Outlive", "Petter Attia", 400, false);


/** Prototypal inheritance */
class Person {
  constructor(name) {
    this.name = name;
  }
}
Person.prototype.sayName = function () {
  console.log(`Hi, I'm ${this.name}`);
};

class Player {
  constructor(name, marker) {
    this.name = name;
    this.marker = marker;
  }
}

//
function Hero(name, level) {
  this.name = name;
  this.level = level
}
Hero.prototype.greet = function () {
  return `Hi, says ${this.name}`;
}
function Warrior(name, level, weapon) {
  Hero.call(this, name, level);
  this.weapon = weapon;
}

function Healer(name, level, spell) {
  Hero.call(this, name, level);
  this.spell = spell;
}

Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
Object.setPrototypeOf(Healer.prototype, Hero.prototype);

Warrior.prototype.attack = function () {
  return `${this.name} attacks with the ${this.weapon}`
}

Healer.prototype.heal = function () {
  return `${this.name} heal with the ${this.spell}`
}
const hero1 = new Warrior("Kubayi", 3, "Usp-s");
const hero2 = new Healer("Kurandero", 1, "Idk");

// let animal = {
//   jumps: null
// };
// let rabbit = {
//   __proto__: animal,
//   jumps: true
// };

// console.log(rabbit.jumps); // true

// delete rabbit.jumps;

// console.log(rabbit.jumps); //null

// delete animal.jumps;

// console.log(rabbit.jumps); // undefined

let head = {
  glasses: 1
};

let table = {
  pen: 3
};
Object.setPrototypeOf(table, head);
let bed = {
  sheet: 1,
  pillow: 2
};
Object.setPrototypeOf(bed, table);
let pockets = {
  money: 2000
};
Object.setPrototypeOf(pockets, table);

let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

rabbit.eat();

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  }
};

let speedy = {
  stomach: [],
  __proto__: hamster
};

let lazy = {
  stomach: [],
  __proto__: hamster
};

const numbers = {
  numberA: 10,
  numberB: 25,
  sum: function () {
    const calculate = () => {
      console.log(this.numberA + this.numberB);
    }
    return calculate();
  }
}
function multiply(number) {
  'use strict';
  return this.number * number;
}
const obj = {
  number: 10
}
