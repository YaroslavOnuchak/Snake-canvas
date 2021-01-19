let canv = document.getElementById("canvas"),
  ctx = canv.getContext("2d"),
  btns = document.getElementById("btns"),
  btnAr = document.querySelectorAll("button");

var w = window,
  d = document,
  e = d.documentElement,
  g = d.body,
  xS = w.innerWidth || e.clientWidth || g.clientWidth,
  yS = w.innerHeight || e.clientHeight || g.clientHeight,
  width = e.clientWidth,
  height;

canv.width = `${width}`;
canv.height = window.innerHeight;

// let div = document.querySelector("div");
// div.style.height = `${yS}px`;
// div.innerHTML = `${width}`;
// console.log("xS", xS);

class Ball {
  // xSpeed = -2;
  // ySpeed = 3;
  xSpeed = getRandomIntInclusive(-2, 22);
  ySpeed = getRandomIntInclusive(3, 33);
  constructor(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.color = getRandomColorHsl();
    this.radius = getRandomIntInclusive(3, 33);
  }
  setColor() {}
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // console.log("object", this.y + " " + this.xSpeed);
  }
  checkVoll() {
    if (this.x < 0 || this.x > xS) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < 0 || this.y > yS) {
      this.ySpeed = -this.ySpeed;
    }
  }
}
class moveBall extends Ball {
  xSpeed = -2;
  ySpeed = 3;
  move() {
    super.move();
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if (this.y < 0) {
      this.y = yS;
    } else if (this.y > yS) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = xS;
    } else if (this.x > xS) {
      this.x = 0;
    }
  }
  setDirection(key) {
    if (keyName[key] === "arr left") {
      this.xSpeed = -5;
      this.ySpeed = 0;
    } else if (keyName[key] === "arr down") {
      this.xSpeed = 0;
      this.ySpeed = 5;
    } else if (keyName[key] === "arr top") {
      this.xSpeed = 0;
      this.ySpeed = -5;
    } else if (keyName[key] === "arr right") {
      this.xSpeed = 5;
      this.ySpeed = 0;
    }
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}
function getRandomColorHsl() {
  return `hsl(${Math.floor(Math.random() * Math.floor(360))}, ${Math.floor(
    Math.random() * Math.floor(100)
  )}%, ${Math.floor(Math.random() * Math.floor(100))}%)`;
}

class Line {
  kof = 551;
  constructor() {}
  draw() {
  
    for (let i = 0; i < xS / blocksize; i++) {
      ctx.beginPath();
      ctx.moveTo(i * 20, 0);
      ctx.quadraticCurveTo(this.kof + xS, yS + this.kof, xS - i * 20, yS + i);
      ctx.stroke();
    }
  }
  move() {
    if (this.kof > -1500) {
      this.kof -= 10;
    } else {
      this.kof = 555;
    }
  }
}
