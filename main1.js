console.log(
  `"innerWidth", ${window.innerWidth}
   e.clientWidth ${e.clientWidth} 
   g.clientWidth ${g.clientWidth}`
);
console.log(
  `"innerHeight", ${window.innerHeight}
   e.clientHeight ${e.clientHeight} 
   g.clientHeight ${g.clientHeight}`
);

for (let i = 0; i < 11; i++) {
  ctx.fillRect(i * 100, i * 100, 100, 100);
  if (i % 2 === 0) {
    ctx.fillStyle = "Red";
  } else {
    ctx.fillStyle = "#000";
  }
}
// /////////////////////////
ctx.lineWidth = 55;
ctx.strokeRect(400, 0, 1000, 100);
ctx.strokeStyle = "green";

ctx.strokeStyle = "darkgreen";
ctx.lineWidth = 10;
ctx.beginPath();
ctx.moveTo(0, 300);
ctx.lineTo(100, 200);
ctx.lineTo(100, 400);
ctx.fill();

ctx.beginPath();
ctx.arc(1000, 400, 20, 0, Math.PI / 2, true);
ctx.stroke();

ctx.beginPath();
ctx.arc(1500, 400, 200, 0, Math.PI * 2, true);
ctx.stroke();
////////////////
for (let i = 0; i < 8; i++) {
  ctx.beginPath();
  let r = Math.floor(Math.random() * Math.floor(255));
  let g = Math.floor(Math.random() * Math.floor(255));
  let b = Math.floor(Math.random() * Math.floor(255));
  ctx.strokeStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.arc(2000, i * (100 + 10 * i), 50 + 10 * i, 0, Math.PI * 2, true);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.fill();
  ctx.stroke();
}
/////////////////////
// let pos = 0;
// setInterval(() => {
//   let x = Math.floor(Math.random() * Math.floor(2255));
//   let y = Math.floor(Math.random() * Math.floor(2255));
//   ctx.clearRect(0, 0, 3000, 3000);
//   ctx.fillRect(x, y, 50, 50);
//   pos++;
//   if (pos > 200) {
//     pos = 0;
//   }
// }, 400);
// /////////////

ctx.clearRect(0, 0, 3333, 3222);

////////////////////////
let r = new Ball(100, 100, 200);
// ctx.fillStyle = "aliceblue";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Включаючи мінімум та максимум
}

let balls = [];
for (let i = 0; i < 111; i++) {
  balls.push(
    new Ball(
      Math.floor(Math.random() * Math.floor(xS)),
      Math.floor(Math.random() * Math.floor(yS)),
      100
    )
  );
}
let intterBalls;
let line = new Line();
function ballsF() {
  intterBalls = setInterval(() => {
    ctx.clearRect(0, 0, xS, yS);
    drawCel();
    balls.forEach((el) => {
      el.draw();
      el.move();
      el.checkVoll();
    });
    ctx.globalCompositeOperation = "xor";
    line.draw();
    line.move();

    drawGEnd(textE, setFont, textMessag_2 + textMessag_6, setTEnd);
  }, 50);
}
