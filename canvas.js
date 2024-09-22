// Return Exploration
// This app contains a controllable square using the WASD keys. The position of the square's top-left corner is at (xLoc,yLoc). Currently the square can leave the map. Use the constrain function to stop this from happening. You must not make any changes to the constrain function itself.

let wDown = false;
let aDown = false;
let sDown = false;
let dDown = false;
let xLoc = 200;
let yLoc = 200;

// detects a key being pressed or released
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  // event.code detects which key
  if (event.code == "KeyD") dDown = true;
  if (event.code == "KeyW") wDown = true;
  if (event.code == "KeyA") aDown = true;
  if (event.code == "KeyS") sDown = true;
}

function keyupHandler(event) {
  if (event.code == "KeyD") dDown = false;
  if (event.code == "KeyW") wDown = false;
  if (event.code == "KeyA") aDown = false;
  if (event.code == "KeyS") sDown = false;
}

requestAnimationFrame(draw);

function draw() {
  // redraws the white background, clears out old frame
  fill("white");
  rect(0, 0, cnv.width, cnv.height, "fill");

  // draw the blue rectangle
  fill("blue");
  rect(xLoc, yLoc, 10, 10, "fill");

  // Add your changes here
  //----------------------
  // applies to the top-left corner
  yLoc = constrain(yLoc, 0, 390);
  xLoc = constrain(xLoc, 0, 390);
  //----------------------

  if (wDown) {
    yLoc -= 10;
  }

  if (aDown) {
    xLoc -= 10;
  }

  if (sDown) {
    yLoc += 10;
  }

  if (dDown) {
    xLoc += 10;
  }

  requestAnimationFrame(draw);
}

// Don't make any changes here
function constrain(input, low, high) {
  var output;
  if (input < low) {
    output = low;
  } else if (input > high) {
    output = high;
  } else {
    output = input;
  }
  return output;
}

// testPercent = -10;
// testPercent = constrain(testPercent, 0 , 100);
// // "fixes" testPercent to be a proper value

// constrain(50, 0, 100)   // checks the 50 to see if it's between 0 and 10; returns 50
// constrain(-10, 0, 100)  // b/c it's below the lowest amount, we bump it up to the lowest amount; return 0
// contrains(120, 0, 100)  // bump it down to highest amount; return 100
// // // don't ned to know details of the function, just know how it works
