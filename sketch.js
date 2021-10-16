// my stuffs
let restaurant = [
  { name: "McDonald's", food: "10 piece nuggets" },
  { name: "In&Out", food: "double double" },
  { name: "Wendy's", food: "a large sprite" },
  { name: "Chic-fil-A", food: "vanilla ice cream" },
  { name: "Burger King", food: "a milkshake" },
];
let randomIndex;
let backgroundColor;
let animate = false;
function setup() {
  createCanvas(1000, 1000);
  background(color(random(255, 205), random(205, 255), random(205, 205)));
  backgroundColor = color(random(255, 205), random(205, 255), random(205, 205));
  textSize(30);
  fill(0);
  text("click to begin", 100, 100);
}
// animate the ellipses
function draw() {
  if (animate == true) {
    noStroke();
    fill(random(255, 205), random(205, 255), random(205, 205))
    ellipse(random(width), random(height), random(10, 200));
  }
}

function randomizer() {
  animate = false;
  if (restaurant[0]) {
    //   get random object from stuffs
    background(backgroundColor);
    randomIndex = int(random(restaurant.length));
      fill(0);

    text(
      ` ${restaurant[randomIndex].food} at
      ${restaurant[randomIndex].name}`,
      width / 2,
      height / 2
    );
    //   and then take that object out of the array
    restaurant.splice(randomIndex, 1);
  } else {
    //   draw the background again so it does not overlay the previous object
    background(backgroundColor);
    // when we show all obejcts, nothing else to show
      fill(0);

    text("Sorry, I don't have anything left :(", width / 4, height / 2);
  }
}
function mousePressed() {
  animate = true;
  setTimeout(randomizer, 1500);
}
