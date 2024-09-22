/*
  Program Examples from Lesson 2: Functions that Return a Value
*/

// // Example 1. Create a function that returns the minimum of 2 number parameters.
// console.log(minOfTwo(3, 9)); // RETURN 3
// console.log(minOfTwo(10, 1)); // RETURN 1

// function minOfTwo(num1, num2) {
//   let minimum;

//   if (num1 < num2) {
//     minimum = num1;
//   } else {
//     minimum = num2;
//   }

//   return minimum;
// }

// // Example 2. Create a function that returns a random integer between 2 integer parameters.
// randomInt(0, 10); // RETURN a num 0 to 10 (exclusively)
// // ex.  subString(2, 4)  ,   the 4 isn't included
// randomInt(20, 25); // RETURN a number from 20-24 (excl)

// alert(`A random value from -5 to 0 is ${randomInt(-5, 0)}`);

// function randomInt(start, end) {
//   let rand = Math.random(); // 0.000 - 0.999
//   rand = rand * (end - start); // sets the range
//   rand = rand + start;
//   rand = Math.floor(rand);

//   // return, don't console.log when asked to return
//   return rand;
// }

// // Example 3: Create a function that returns boolean true if a given word parameter contains at least one vowel, and false otherwise.
// hasVowel("cat"); // return true
// hasVowel("xyz"); // return false

// // function is used as a conditional for an if-statement
// if (hasVowel("dog")) {
//   alert("dog has a vowel");
// } else {
//   alert("dog does not have a vowel");
// }

// function hasVowel(word) {
//   for (let i = 0; i < word.length; i++) {
//     // can chain dot methods
//     let currentLetter = word.charAt(i).toLowerCase();

//     if (
//       currentLetter == "a" ||
//       currentLetter == "e" ||
//       currentLetter == "i" ||
//       currentLetter == "o" ||
//       currentLetter == "u"
//     ) {
//       return true;
//       // return false would just check the first letter; have to wait through the whole loop, each letter individually
//     }
//   }
// }

// Example 4. Write an acronym function that takes a string and returns the acronym for that string. E.g. Away From Keyboard should return AFK
// acronym("Away from keyboard"); // return AFK
// acronym("If I recall correctly"); // return IIRC

// Takes a string representing a phrase and returns the acronym of that phrase
// Pre: phrase begins with a non-space character
// Post: returns the acronym (other than that doesn't move curosr, change variables, etc)

function acronym(phrase) {
  let output = phrase.charAt(0);

  for (let i = 0; i < phrase.length; i++) {
    let currentLetter = phrase.charAt(i);

    if (currentLetter == " ") {
      output += phrase.charAt(i + 1); // adds the next character after the space to out output
    }
  } // end of loop

  return output.toUpperCase();
}

// Ex5.   Add documentation to the previous example.

// PRACT. Building Apps Using Procedural Abstraction
// pre: none;
// post: none;
function showRules() {
  let message =
    "Welcome to Rock-Paper-Scissors (RPS)!\n\nYou will try to beat the computer by choosing rock, paper, or scissors. Best out of 3 wins!\n\nRock beats scissors\nScissors beats paper\nPaper beats rock";
  alert(message);
}

// Ask player for their choice of rock, paper, or scissors
// Pre: none;
// Post: Player chooses 0, 1, or 2 for rock paper or scissors. This numer is then returned
function getPlayerChoice() {
  let choice = +prompt(
    "Make your choice <Type 0 for rock, 1 for paper, 2 for scissors> : 1"
  );
  return choice;
}

// Simulates AI for the RPS game & radomly selects a choice for the computer
// Pre: none
// Post: return 0 (rock), 1 (paper), or 2 (scissors)
// Math.floor(Math.random()*(max-min) +min)
function getCompChoice() {
  // Teacher's way
  let rand = Math.random(); // 0.000 - 0.999
  if (rand < 0.333) {
    return 0; // comp chooses rock
  } else if (rand < 0.666) {
    return 1;
  } else {
    return 2; //comp chooses scissors
  }

  // My way
  // let comp = Math.floor(Math.random() * (3 - 0) + 0);
  // // console.log(comp);
  // return comp;
}

// diff names for parameters and arguments prevents confusion
// They are differnet entities & scope

// Take the player & computer choices & decide the winner
// Pre: Arguments must be 0, 1, or 2
// Post: Return "player" or "computer" or "tie" as the winner. Alerts the result of the round.
function decideWinner(pChoice, cChoice) {
  var pItem = "";
  var cItem = "";
  if (pChoice == 0) {
    pItem += "rock";
  } else if (pChoice == 1) {
    pItem += "paper";
  } else if (pChoice == 2) {
    pItem += "scissors";
  }
  if (cChoice == 0) {
    cItem += "rock";
  } else if (cChoice == 1) {
    cItem += "paper";
  } else if (cChoice == 2) {
    cItem += "scissors";
  }

  alert(`Player chose ${pItem}\nComputer chose ${cItem}`);
  if (pChoice == cChoice) {
    alert("It's a tie!");
    return "tie";
    // JS will always perform && operation first before it chekc ||
    // bracketing is not necesary
  } else if (
    (pChoice == 0 && cChoice == 2) ||
    (pChoice == 1 && cChoice == 0) ||
    (pChoice == 2 && cChoice == 1)
  ) {
    alert("Player wins!");
    return "player";
  } else {
    alert("Computer wins!");
    return "computer";
  }
}

// Updates the score
// Pre: only "player" or "computer" will affect the score . Global variables playerScore & compScore must exist.
// heavily reliant on variables that exist outside of itself
// no a module; cannot be placed into other programs b/c there's no guarantee for the needed variables
// Post: Global variables playerScore and compScore are adjusted
function updateScore(theWinner) {
  // single commands can remove {}
  if (theWinner == "player") playerScore++;
  if (theWinner == "computer") compScore++;
}

// Displays the player computer scores
// Pre: none
// Post: none or alert window displays scores
// Now abstract because it relies on values in arguments passed on to the parameters
function showScore(pScore, cScore) {
  alert(`Scores:\nPlayer: ${pScore}\nComputer: ${cScore}`);
}

function whoWon(pScore, cScore) {
  if (pScore > cScore) {
    alert("Player won the game!");
  } else {
    alert("Computer won the game!");
  }
}

// // Application
// var playerScore = 0;
// var compScore = 0;

// showRules();
// for (let rounds = 0; rounds < 3; rounds++) {
//   var playerChoice = getPlayerChoice();
//   var compChoice = getCompChoice();
//   // console.log(`player: ${playerChoice}\nCoputer: ${compChoice}`);
//   var winner = decideWinner(playerChoice, compChoice);
//   updateScore(winner);
//   showScore(playerScore, compScore);
// }
// whoWon(playerScore, compScore);

// return acts similar to the break command
// when JS sees return, it immediately halts the function & returns to the main applicatiom
function thing() {
  console.log("hello");
  return "this";
  console.log("goodbye"); // this line is never reached
}

// EXPECTATIONS
// console.log(decideWinner(0, 0)); // rock and rock
// console.log(decideWinner(1, 0)); // paper and rock
// console.log(decideWinner(2, 0)); // scissors and rock

// Follow Up Excerises
// 1. When announcing result of the round, show "rock" instead of 0, etc.
// 2. Turn the game into a 'best of 3' game. Whoever wins 2 games first wins the game.

// WORKSHEET
// // Q3.
// function triArea(base, height) {
//   var area = (base * height) / 2;
//   area = area.toFixed(2);
//   return area;
// }

// console.log(
//   "The area of a triangle with base 3 and height 5 is " +
//     triArea(3, 5) +
//     " square units."
// );
// console.log(
//   "The area of a triangle with base 1.5 and height 10.4 is " +
//     triArea(1.5, 10.4) +
//     " square units."
// );

// // Q4.
// // function
// function correctLength() {
//   let userInput = prompt(
//     "Enter a password. Your password must be at least 8 characters long."
//   );
//   if (userInput.length < 8) {
//     return false;
//   } else {
//     return true;
//   }
// }

// // application
// if (correctLength()) {
//   alert("Password accepted.");
// } else {
//   alert("Sorry, your password is too short. Please try again.");
// }

// Q5.
function getDiceAscii(diceNum) {
  let output = "";
  switch (diceNum) {
    case 1:
      return "*";
    case 2:
      return "* \n   * ";
    case 3:
      return "* \n   * \n     *";
    case 4:
      return "* * \n * *";
    case 5:
      return "*   *\n  * *\n   *  \n  * *  \n *   *";
  }
}

// console.log(`Rolling a 5: \n ${getDiceAscii(5)}`);

// TEACHER HELP
// let line1 = "*   *\n * * \n  *  "
// let line2 = ""
// let line3 = ""
// let line4 = " * * "
// let line5 = "*   *";

// if (x == 1) {
//   console.log("one")
// } else if (x == 2) {
//   console.log("two") {}
// } else {
//   console.log("end");
// }

// let x = 1;
// switch(x) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   default:
//     console.log("end")
// }

// // Switch Statement Example
// // Mon - 7am
// // Tue - Thurs - 4am
// // Fri = 9am
// // Sat - Sun - 8am
// //

// let day = "Sunday";

// switch (day) {
//   case "Monday":
//     console.log("7am");
//     // prevent from rest of code being called once the match is made
//     break;
//   // same blocks can be mentioned once
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("4am");
//     break;
//   case "Friday":
//     console.log("9am");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("8am");
//     break;
//   // if the variable doesn't match any of the cases.
//   default:
//     console.log("7am - Watch Telusko videos");
//   // no need for break here because it's the end
// }

// // this will get printed b/c it's outside the switch block
// console.log("Bye");

// Q6.
// Application
// var coinChoice = getCoinChoice();
// var coinQuantity = getCoinQuantity(coinChoice);
// let output = `The value of your ${coinChoice} coins is $${coinQuantity}`;
// alert(output);

// Functions
function getCoinChoice() {
  let coinType = prompt(
    "Your choices are toonies, loonies, quarters, dimes, and nickles. Choose."
  );
  return coinType;
}

function getCoinQuantity(coinType) {
  var value = 0;
  var numCoins = +prompt("How many coins?");
  if (coinType == "toonies") {
    value = numCoins * 2;
    value = value.toFixed(2);
    return value;
  } else if (coinType == "loonies") {
    value = numCoins * 1;
    value = value.toFixed(2);
    return value;
  } else if (coinType == "quarters") {
    value = numCoins * 0.25;
    value = value.toFixed(2);
    return value;
  } else if (coinType == "dimes") {
    value = numCoins * 0.1;
    value = value.toFixed(2);
    return value;
  } else if (coinType == "nickles") {
    value = numCoins * 0.05;
    value = value.toFixed(2);
    return value;
  } else {
    alert("Please choose one of the options.");
  }
}

// Q7.
// APPLICATION
  // intro 
var score = 1000;
displayRules();
showScore(score);
  // loop starts
while (true) {
  if (score <= 0) {
    break; 
  }
  var bet = getBet(score);
  var predict = getPrediction();
  var randNum = displayAndGetRandom();
  var wonGame = checkForWin(predict, randNum);
  adjustScore(wonGame);
  showScore(score);
}

// FUNCTIONS
// displayRules
function displayRules() {
  alert(
    "High Low Game \nRULES \nNumbers 1 through 6 are low \nNumbers 8 through 13 are high \nNumbers 7 is neither high or low"
  );
}

// showScore
function showScore(points) {
  alert(`You have ${points} points.`);
}

// getBet
function getBet(originalPoints) {
  var newPoints;
  while (true) {
    // ensure that the bet is less than the current score 
    if (newPoints <= originalPoints && newPoints > 0) {
      return newPoints; 
    }
    newPoints = +prompt("What is your bet?")
  }
}

// getPrediction
function getPrediction() {
  var highLow; 
  while (true) {
    if (highLow == 1 || highLow == 0) {
      if (highLow == 1) {
        return highLow;
      } else {
        return highLow;
      }
    } 
    highLow = +prompt("Predict <1=High, 0=Low>:"); 
  }
}

// displayAndGetRandom 
// Math.random() * (max - min) + min; 
// note to self: min is included, max isn't
function displayAndGetRandom() {
  var rand = Math.floor(Math.random() * (14 - 1) + 1); 
  return rand; 
}

// checkForWin
function checkForWin(predict, randNum) {
  // if generated number is low 
  if (randNum <= 6) {
    // player wins 
    if (predict = 0) {
      alert(`Number is ${randNum} \nYou win.`)
      return true
    // player loses 
    } else { 
      alert(`Number is ${randNum} \nYou loss.`)
      return false; 
    }
  // if generated number is neither low or high 
  } else if (randNum = 7) {
    alert(`Number is ${randNum} \nYou loss.`)
    return false; 
  // if generated number is high 
  } else if (randNum >= 8) {
    // player wins 
    if (predict = 1) {
      alert(`Number is ${randNum} \nYou win.`)
      return true; 
    // player loses 
    } else {
      alert(`Number is ${randNum} \nYou loss.`)
      return false; 
    }
  }
}

// wonGame
function adjustScore(wonGame) {
  // if checkForWin() is returned true 
  if (wonGame) {
    score += bet; 
    return score; 
  // if checkForWin() is returned false 
  } else {
    score -= bet;
    return score; 
  }
}