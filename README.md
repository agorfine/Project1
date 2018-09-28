# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes | H | 3hrs| 0hrs | 3hrs |
| Project Worksheet | M | 1hrs| 0hrs | 1.5hrs |
| HTML & CSS | H | 3hrs| 0hrs | 2hrs |
| Game Init/Play Game | H | 3hrs|  0hrs  |  3.5hrs  |
| Check Winner | H | 3hrs|  0hrs  |  2hrs  |
| Landing Page - One Row Only | H | 4hrs|  0hrs |  3.5hrs |
| Game Reset| L | 3hrs|  0hrs  |  1.5hrs  |
| Total | H | 37hrs| 0hrs | 19hrs |


## Project Description

This game is one player Battleship. The goal of the game is to click the right squares to reveal/sink all three battleships. Of the three battleships, two ships will be three squares long, and one ship will be two squares long (total of 8 "winning squares"). The game layout is a grid of 15 squares divided equally into 5 rows and columns. To start, the battleships will be hard coded into "winning squares". If the user selects a non winning square, a snowflake will populate in the square, and will no longer be clickable. If the user selects a winning square, the portion of the battleship selected will populate in the square and will no longer be clickable. Once all 8 winning squares are selected, the game will end and prompt the user to play again. 

## Wireframes

- [Battleship-Wireframe1-Board-Layout](https://res.cloudinary.com/drsaojfyp/image/upload/v1537903470/nPktTjqXQDuDaihcSWgNhQ.jpg) 
- [Battlship-WireFrame2-Board-Layout](https://res.cloudinary.com/drsaojfyp/image/upload/v1537903470/bio4flGDQyu5yybJ2D2kMQ.jpg)
- [Battleship-Wireframe2-Supporting-Logic](https://res.cloudinary.com/drsaojfyp/image/upload/v1537903470/iT9SW4ciSdOw7_NtpN2aIg.jpg)

## Priority Matrix

- [Battleship-Priority-Matrix](https://res.cloudinary.com/drsaojfyp/image/upload/v1537903471/fullsizeoutput_2b84.jpg)
- [Battleship-Priority-Matrix-Supporting-Logic](https://res.cloudinary.com/drsaojfyp/image/upload/v1537903471/M9P9db0wRo2nlZwyxj6tgg.jpg)

#### MVP 
- Game Init
- Play Game
- Check Winner
- Reset Game

#### PostMVP 
- Randomize Winning Squares (randomize boat placement)
- Make playable on mobile device
- Create second game board and use AI for second player

## Functional Components

Based on the initial logic defined in the previous  phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

### Landing Page
- Create alert to ask username
- Once they enter their name and submit (store name in empty variable)
- Transition to second Landing Page (Use DOM)
- Greet username (using previously defiened variable)
- Give instructions to play the game
- Include play game button (event listener)-> this will transition to the Game Initialization page
- Use DOM to transition between screens 

### Game Initialization
- There will be two components to the Game Initialization
- The user will see a blank board (15 squares, 5 equal columns and rows created with HTML and CSS flex box)
- Behind the user interface, the battleships will be placed on "winning squares". There will be 3 ships total (two 3 square long ships and one two square long - 8 winning squares total). Ships can only be placed vertically or horizontally
- Initially, the ships will be hard coded into the board with an ID and the display will be none 


### Playing The Game 
- User must click on the squares 
- Will target where the user clicks by using a event.target.id function (recreate function used in TTT game)
- Will have each square's background color change when the mouse is hovered over the square to visualize the selection (mouse hover event listener, DOM to change color)
- Once the user clicks on a square must run the check winner function- IF the square selected is a winning square, show portion of ship, ELSE show a snowflake
- Each square will be unclickable once selected (create image div big enough that it is covering the event.target.id)
- To make the game more user friendly, I will use a mouse over event listener to change the color of the square that the user is hovering over. This way they can easily see which square they want to click.

### Winning The Game
- Continue to select squares until all 3 boats (8 winning squares) are selected (continuously loop through event.target.id function)
- Must compare the user's selected square to the winning squares after each user selection (NEST check winner function in the event.target.id function to check after each selection- IF the square selected is a winning square, show portion of ship, ELSE show a snowflake)

### Resetting The Game
- Once all 8 of the winning squares are selected a pop up will transition over the game (use DOM to transition pop up over UI initial board)
- This pop up will alert the user they won the game and ask if they want to play again
- If the player selects 'yes' to playing again, the board will clear and be filled with an empty string (event listener on the play again button including a function of empty string to clear the board)

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

Component | Priority | Estimated Time | Actual Time
--- | :---: |  :---: | :---: | :---: |
Wireframes | H | 3hrs | 5hrs |
Project Worksheet | M | 1.5hrs| 1.5hrs |
HTML & CSS | H | 2hrs| 0hrs |
Game Init | H | 7hrs| 0hrs |
Play Game | H | 7hrs|  0hrs  |
Check Winner | H | 11hrs|  2hrs  |
Landing Page | L | 6hrs|  0hrs  |
Game Reset| L | 7hrs|  1hr  |
Total | H | 44hrs| 0hrs | 

## Helper Functions

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 


## Code Snippet

The code snippet below is used to check for a winner and is called after every move.   It loops over an array of arrays that contain positions assigned to corresponding cells as id's. Such as row 1 is: [[1.1, 1.2, 1.3]].  The cells have been assigned that cooresponding number 

```
function checkWin() {
  let winner = false
  for (let i = 0; i < endgames.length; i++) {
    let n = '';
    for (let e = 0; e < 3; e++) {
      n += document.getElementById(endgames[i][e]).innerText;
    };
    if (n.length === 3) {
      if (n[0] === n[1] && n[0] === n[2]) {
        winner = true;
        setTimeout(function() {
          reset(n[0] + ' wins!');
        }, 10);
      };
    };
  };
  if (moveCount === 9 && !winner) {
    setTimeout(function() {
      reset('It\'s a tie!');
    }, 20);
  };
};
```

**Note**: In [HTML5 ID's can be numbers](https://benfrain.com/when-and-where-you-can-use-numbers-in-id-and-class-names/)

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
