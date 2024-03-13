let confetti = [];
let partyTime = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 100; i++) {
    confetti[i] = new Confetti();
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseClicked(){
  partyTime = true; 
  for (let c of confetti) {
    c.burst(mouseX, mouseY);
  }
}

function draw() {
  background(255);
  if (partyTime) {
    for (let c of confetti) {
      c.show();
      c.update();
    }
  }
}


class Confetti {
  constructor() {
    this.x = -1000;
    this.y = -1000;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  burst(mx, my) {
    this.x = mx;
    this.y = my;
    this.xspeed = random(-5, 5);
    this.yspeed = random(-5, 5);
  }

  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;

    this.yspeed = this.yspeed + 0.1;
  }

  show() {
    noStroke();
    let r; let b; let g;
    let change = random(1,4)
    if(change <= 1){
      g = 66
      b = 245
      r = random(66,246)
    }
    else if(change <= 2){
      g = random(66,246)
      r = 66
      b = 245
    }
    else{
      b = random(66,246)
      r = 66
      g = 245
    }
  let t = random(10,225)
  fill(r,g,b,t)
    rectMode(CENTER);
    rect(this.x, this.y, 10, 10);

    //circle(this.x, this.y, random(3,10))
  }

}

