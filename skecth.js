let eregb;
let posX;
let posY;
let movimentoX;
let movimentoY;

function setup() {
  random(0, 255);
  createCanvas(600, 600);
  eregb = color(random(0, 255), random(0, 255), random(0, 255), 20);
  background(random(0, 255), random(0, 255), random(0, 255), 45);
  posX = 300;
  posY = 300;
  movimentoX = [0, 0]
  movimentoY = [random(height), random(height)]
}

function draw() {
  fill(eregb);
  circle(posX, posY, 65);

if(mouseX < posX) {
  posX = posX - 2;
}
if(mouseX > posX) {
  posX = posX + 2;
}
if(mouseY < posY) {
  posY = posY - 2;
}
if(mouseY > posY) {
  posY = posY + 2;
}
}