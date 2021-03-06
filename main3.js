ctx.fillStyle = ctx.strokeStyle = "black";

let textE = "Game over",
  textMessag_2 = "press space to ",
  textMessag_3 = "PAUSE",
  textMessag_4 = "Start",
  textMessag_5 = "contine",
  textMessag_6 = "restart",
  blocksize = 10,
  wInBlock = Math.floor(xS / blocksize),
  hInBlock = Math.floor(yS / blocksize),
  score = 0,
  sizeText = "2rem",
  fontFamile = "roboto",
  setFont = `${sizeText} ${fontFamile}`,
  /////////////

  sizeTextE = "1rem",
  fontFamileE = "roboto",
  setTEnd = `${sizeTextE} ${fontFamileE}`,
  direction = {
    37: "left",
    40: "down",
    38: "up",
    39: "right",
    32: "space",
  },
  speed = 100,
  pause = true,
  gameRest = false,
  // start = false,
  radiusAnim = blocksize / 2;
class Apple {
  constructor() {
    this.position = new Block(10, 10);
  }
  draw() {
    this.position.drawCircle();
  }
  move() {
    let randomCol = getRandomIntInclusive(1, wInBlock - 2);
    let randomRow = getRandomIntInclusive(1, hInBlock - 2);

    this.position = new Block(randomCol, randomRow);
  }
}
class Snake {
  constructor(x = 5, y = 5) {
    this.segments = [new Block(x, y), new Block(x - 1, y), new Block(x - 2, y)];
    this.direction = "right";
    this.nextDirection = "right";
  }
  draw() {
    ctx.fillStyle = "green";
    this.segments.forEach((block) => block.drawSquare());
    this.segments[0].col;
    this.segments[0].row;
    ctx.fillStyle = "yellow";
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(this.segments[0].col * 10 + 5, this.segments[0].row * 10);
    ctx.lineTo(this.segments[0].col * 10, this.segments[0].row * 10 - 10);
    ctx.lineTo(this.segments[0].col * 10 + 10, this.segments[0].row * 10 - 10);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.arc(
      this.segments[0].col * 10 + 5,
      this.segments[0].row * 10 + 2.5,
      2.5,
      0,
      Math.PI * 2
    );
    ctx.arc(
      this.segments[0].col * 10 + 5,
      this.segments[0].row * 10 + 7.5,
      2.5,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
  move() {
    let head = this.segments[0];
    let newHead;
    this.direction = this.nextDirection;
    if (this.direction === "right") {
      newHead = new Block(head.col + 1, head.row);
    } else if (this.direction === "down") {
      newHead = new Block(head.col, head.row + 1);
    } else if (this.direction === "left") {
      newHead = new Block(head.col - 1, head.row);
    } else if (this.direction === "up") {
      newHead = new Block(head.col, head.row - 1);
    }
    if (this.checkCollision(newHead)) {
      drawGEnd(textE, setFont, textMessag_2 + textMessag_6, setTEnd);
      setTimeout(ballsF, 1000);
      gameRest = true;
      return;
    }
    this.segments.unshift(newHead);
    if (newHead.equal(apple.position)) {
      score++;
      if (this.segments.length > wInBlock * hInBlock - wInBlock) {
        drawGEnd("maybe YOU win", setFont);
        return;
      }
      apple.move();
      this.segments.forEach((snakeB) => {
        if (snakeB.equal(apple.position)) {
          return;
        } else {
          apple.draw();
        }
      });
    } else {
      this.segments.pop();
    }
  }
  checkCollision(head) {
    let leftCollision = head.col === 0;
    let topCollision = head.row === 0;
    let rightCollision = head.col === wInBlock;
    let downCollision = head.row === hInBlock;
    let wallCollision =
      downCollision || rightCollision || topCollision || leftCollision;
    let selfCollision = false;
    this.segments.forEach((snake) => {
      if (head.equal(snake)) {
        selfCollision = true;
      }
    });
    return selfCollision || wallCollision;
  }
  setDirection(newDirections) {
    if (this.direction === "up" && newDirections === "down") {
      return;
    } else if (this.direction === "down" && newDirections === "up") {
      return;
    } else if (this.direction === "left" && newDirections === "right") {
      return;
    } else if (this.direction === "right" && newDirections === "left") {
      return;
    }
    this.nextDirection = newDirections;
  }
}
class Block {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
  drawSquare() {
    let x = this.col * blocksize,
      y = this.row * blocksize;
    // ctx.fillStyle = getRandomColorHsl();
    ctx.fillRect(x, y, blocksize, blocksize);
  }
  drawCircle() {
    let x = this.col * blocksize + blocksize / 2,
      y = this.row * blocksize + blocksize / 2;
    ctx.fillStyle = getRandomColorHsl();
    ctx.beginPath();
    ctx.arc(x, y, blocksize / 2, 0, Math.PI * 2);
    ctx.fill();
  }
  equal(otherBlock) {
    return this.col === otherBlock.col && this.row === otherBlock.row;
  }
}
///////////////////////////////////
function drawCel() {
  ctx.beginPath();
  ctx.strokeStyle = "gray";
  ctx.lineWidth = 0.1;
  for (let i = 0; i < xS / blocksize; i++) {
    ctx.moveTo(i * 10, 0);
    ctx.lineTo(i * 10, yS);
  }
  for (let j = 0; j < yS / blocksize; j++) {
    ctx.moveTo(0, j * 10);
    ctx.lineTo(xS, j * 10);
  }
  ctx.stroke();
}
function drawBd() {
  ctx.fillStyle = "gray";
  ctx.fillRect(0, 0, xS, blocksize);
  ctx.fillRect(0, yS - blocksize, xS, blocksize); ////
  ctx.fillRect(0, 0, blocksize, yS);
  ctx.fillRect(xS - blocksize, 0, blocksize, yS); ////
}
function drawScore(score, setFon) {
  ctx.textBaseline = "top";
  ctx.fillStyle = "black";
  ctx.textAline = "left";
  ctx.font = setFon;
  ctx.fillText(`Score : ${score}`, blocksize, blocksize);
}
function drawGEnd(text, setFon, text_2, setText_2) {
  let cenText = xS / 2;
  clearInterval(intervalId);
  ctx.textBaseline = "middle";
  ctx.fillStyle = "black";
  ctx.textAline = "center";
  ctx.font = setFon;

  while (ctx.measureText(text).width + cenText + blocksize > xS) {
    cenText--;
  }
  if (ctx.measureText(text).width + cenText < xS) {
    ctx.textAline = "right";
    ctx.fillText(text, cenText, yS / 2);
  }
  if (text_2) {
    ctx.font = setText_2;
    ctx.fillText(text_2, cenText - 40, yS / 2 + 20);
  }
}
///////////////////////////////////////////////
//

let apple = new Apple();
let snake = new Snake();
let intervalId;

drawCel();
drawScore(score, setFont);
snake.draw();
apple.draw();
drawGEnd(textMessag_2 + textMessag_4, setFont);
drawBd();

function game() {
  intervalId = setInterval(() => {
    ctx.clearRect(0, 0, xS, yS);
    drawCel();
    drawScore(score, setFont);
    snake.move();
    snake.draw();
    apple.draw();
    drawBd();
  }, speed);
}

// game();

g.addEventListener("keydown", (event) => {
  let newDirections = direction[event.keyCode];
  if (newDirections !== undefined) {
    if (newDirections !== "space") {
      snake.setDirection(newDirections);
    } else {
      if (!pause && !gameRest) {
        pause = true;
        clearInterval(intervalId);
        drawGEnd(textMessag_3, setTEnd, textMessag_2 + textMessag_5, setTEnd);
      } else if (gameRest) {
        clearInterval(intterBalls);
        pause = false;
        gameRest = false;
        score = 0;
        snake = new Snake(5, 5);
        game();
      } else {
        pause = false;
        game();
      }
    }
  }
});
btnAr.forEach((btn) => {
  btn.addEventListener("click", function () {
    let newDirections = this.id;
    if (newDirections !== undefined) {
      if (newDirections !== "space") {
        snake.setDirection(newDirections);
      } else {
        if (!pause && !gameRest) {
          pause = true;
          clearInterval(intervalId);
          drawGEnd(textMessag_3, setTEnd, textMessag_2 + textMessag_5, setTEnd);
        } else if (gameRest) {
          clearInterval(intterBalls);
          pause = false;
          gameRest = false;
          score = 0;
          snake = new Snake(5, 5);
          game();
        } else {
          pause = false;
          game();
        }
      }
    }
  });
});
// ballsF();
