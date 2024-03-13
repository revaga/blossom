
let cnv;
let d;
function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseOver(changeGray);
  d = 10;

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  let ry = random(0, windowHeight)
  let rx = random(0, windowWidth)
  let d = random(5,40)
  ellipse(rx, ry, d, d);

}

function changeGray() {
  d = d + 10;
  if (d > 100) {
    d = 0;
  }
}