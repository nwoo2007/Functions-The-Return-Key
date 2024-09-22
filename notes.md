# The return Statement

A method can **return** a value. This is not to be confused with *outputting* a value. 

```
function cubeOf( x) {
 var xCubed;
 xCubed = x * x * x;
 return xCubed;
}
```

The `return` statement:
+ sends a value back to the calling statement.
+ can **only** return one value.

A function that returns a value is called from a statement that makes use of that returned value:

```
function cubeOf( x) {
 var xCubed;
 xCubed = x * x * x;
 return xCubed;
}

var num = 5;
var cube;

cube = cubeOf(num);
console.log(cube);
```

Guidelines for Writing Functions with Return Values

+ Decide what values you need as input to your computation. Make these parameters of your function.
+ Use your parameters to calculate your result and save that result in a single variable.
+ Return that variable on the last line of your function.

---

> Example 1. Create a function that returns the minimum of 2 number parameters.

---

> Example 2. Create a function that returns a random integer between 2 integer parameters.

---

> Example 3: Create a function that returns boolean true if a given word parameter contains at least one vowel, and false otherwise.

---

> Example 4. Create a function that returns the number of digits of a given number parameter.

---

> Example 4. Write an acronym function that takes a string and returns the acronym for that string. E.g. *Away From Keyboard* should return *AFK*


---

> Exploration: 

> Look at the canvas.js application. The rectangle is controlled using the WASD keys. Currently the rectangle can move off the map. 

> Now study the constrain function. Use the constrain function in the application to prevent the rectangle from being able to move off-screen.

> Note: Do NOT make any changes inside the constrain definition.

---

## Documenting Methods

Methods should be carefully commented so that a reader of the program 
understands what task the method is performing and what data, if any, 
will be returned by the method. Method documentation is in the form of 
documentation comments (/** */) that appear just above the method 
declaration. For example, the drawBar() method with documentation:

```
/**
 * Print a bar of asterisks across the screen.
 * pre: length > 0
 * post: Bar drawn of length characters, insertion 
 * point moved to next line.
 */
function drawBar(length) {
 var bar = '';
 for (int i = 0; i < length; i++) {
  bar += '*'
 }
 console.log(bar);
}
```

The assumptions, or initial requirements of a method are stated in the 
documentation in a section called the `precondition`, or just `pre`. Note that 
the pre for drawBar() states that length must be greater than 0, but not that 
length must be an int. Information that the compiler will verify, such as 
data types, should not be stated in method documentation.

The `postcondition` section of the documentation, or `post`, states what must 
be true after the method has been executed. However, the post should not 
state how the method accomplished its task.

A method may not have a precondition, but every method must 
have a postcondition. For example, below is the cubeOf() method with 
documentation:

```
/**
 * Calculates the cube of a number.
 * pre: none
 * post: x cubed returned
 */
function cubeOf( x) {
 var xCubed;
 xCubed = x * x * x;
 return xCubed;
}
```

To summarize, the guidelines for writing pre and post conditions are:
+ The precondition states what must be true at the beginning of a 
method for the method to work properly.
+ The postcondition states what must be true after the method has 
executed if the method has worked properly.
+ Preconditions and postconditions should not state facts that the 
compiler will verify. They should also not refer to variables or 
information outside the method.
+ The postcondition should not state how the method accomplished 
its task

---

> Review. Modify each of the Reviews in this chapter so that the methods are documented properly.

---

# Building Apps using Procedural Abstraction

Procedural abstraction is coding top-down, by assuming you have ready-to-go functions. Then, you program those functions one-by-one.

Image you want to build a RPS game. A single playthrough of the game might look like this:

---
> Welcome to Rock-Paper-Scissors (RPS)
> 
> You will try to beat the computer by choosing rock, paper or scissors. Best out of 3 wins!
>
> Rock beats scissors
> 
> Scissors beats paper
>
> Paper beats rock
>
> Make your choice < Type 0 for rock, 1 for paper, 2 for scissors > : 1
>
> You chose Paper.
> The computer chose Scissors.
> You Lose!
>
> SCORE:
>
> You: 0
> 
> Computer: 1

---

Assuming you had good, working functions, your application might look like this:

```
var playerScore = 0;
var compScore = 0;

showRules();
var playerChoice = getPlayerChoice();
var compChoice = getCompChoice();
var winner = decideWinner(playerChoice, compChoice);
updateScore(winner);
showScore();
```

When using procedural abstraction, you have to decide which functions need parameters and which are going to return values, and which will do both. This is often the hardest part, but you can always change your plan as you encounter issues.

Once you have planned out your application, you've broken a large problem into a bunch of smaller, easier to manage ones.

It is important to make as few global variables as you can, so that your functions are self-contained. 

Let's program each function.

```
function showRules() {

}
```

```
function getPlayerChoice() {

}
```

```
function getCompChoice() {

}
```

```
function decideWinner(pChoice,cChoice) {

}
```

```
function updateScore(theWinner) {

}
```

```
function showScore() {

}
```

We've programmed a single round of the RPG game, but you would be able to expand this to a "best of 3" game by adding functions to your base application.

---
End of Lesson. Complete the attached assignment in Google Classroom.
---