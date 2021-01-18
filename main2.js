d.addEventListener("keydown", (event) => {
  // do something
  // console.log("e.keyCode=> ", event.keyCode + " _  event.key =>" + event.key);
});
let keyName = {
  37: "arr left",
  40: "arr down",
  38: "arr top",
  39: "arr right",
  32: "space",
  13: "enter",
};

let sq = new moveBall(500, 500, 2);

// d.addEventListener("keydown", (event) => {
//   if (
//     event.keyCode === 37 ||
//     event.keyCode === 38 ||
//     event.keyCode === 39 ||
//     event.keyCode === 40 ||
//     event.keyCode === 32
//   ) {
//     // sq.setDirection(event.keyCode);
//     // sq.move();
//     // sq.draw();
//   }
// });

// setInterval(() => {
//   ctx.clearRect(0, 0, xS, yS);

//   sq.draw();
//   sq.move();
// }, 30);
