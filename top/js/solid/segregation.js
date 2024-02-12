class Entity {
  constructor(name) {
    this.name = name;
  }
}

class Character extends Entity {
  constructor(name, health, attackDamage) {
    super(name);
    this.health = health;
    this.attackDamage = attackDamage;
  }
}
class Tower extends Entity {
  constructor(name) {
    super(name);
  }
}
const mover = {
  move(entity) {
    console.log(`${entity.name} moved`);
  }
}

const attacker = {
  attack() {
    console.log(`${this.name} attack`);
  }
}

const hasHealth = {
  takeDamage(amount) {
    this.health = this.health - amount;
  }
}

Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);

