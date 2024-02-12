//Setters and getters 
// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;
//   Object.defineProperty(this, "age", {
//     get() {
//       let currentYear = new Date().getFullYear();
//       return currentYear - this.birthday.getFullYear();
//     }
//   });
// };
//Classes 

// class User {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   sayHi() {
//     console.log(`Hi, I'm ${this.name}`);
//   }

// }
// const bob = new User("Bob", "Hendrix");

// class Button {
//   constructor(value) {
//     this.value = value;
//   }
//   click = () =>
//     console.log(this.value);
// }
// const button = new Button("Vaca");

// console.log(button.prototype););

class Clock {
  timer = null;
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 9) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 9) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 9) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(this.render, 1000)
  }
}


let clock = new Clock({ template: 'h:m:s' });
clock.start();

