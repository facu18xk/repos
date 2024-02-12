function log(text) {
  console.log(text);
}

class Tracker {
  initialCalories = 0;
  constructor(maxCalories) {
    this.maxCalories = maxCalories
  }

  add(calories) {
    this.initialCalories += calories;
    if (this.initialCalories > this.maxCalories) {
      log("Calories exceeded");
    }
  }
}
const tracker1 = new Tracker(2000);
