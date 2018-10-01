# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wireframes | H | 3hrs | 3hrs |
| Project Worksheet | M | 1hrs| 1.5hrs |
| HTML & CSS | H | 3hrs| 7hrs |
| Game Init | H | 9hrs|  3.5hrs  |
| Play Game | H | 7hrs|  3.5hrs  |
| Check Winner | H | 11hrs| 2hrs  |
| Landing Page | H | 6hrs|  3.5hrs |
| Game Reset| L | 7hrs|  5hrs  |
| Mobile Responsive| L | 10hrs| 9hrs  |
| Total | H | 57hrs| 38hrs |


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
| target.event.id | This will select specific id of an event listener (target specific id of item clicked) | 
| element.classList.add | This will add a class to a specific element. The class can have styling in CSS that will be added to the tag | 
| element.classList.remove | This will remove a class of a specific element. The class/styling in CSS will be removed from the tag | 
| let element = window.matchMedia('(min-width: 600px)') with a function (screen) if (screen.matches) | This variable and function combination allows you to specify certain JavaScript for different screen sizes | 


## Code Snippet

The code snippet below is used to play the game. I used an event.target.id function to locate the specific square the user has clicked on. The boats are hard coded into specific IDs, so when a user clicks on that specific square the class for the boat is added to the square (the boat is then shown as the background image). If the square clicked does not contain a boat, a class is added to the square with a snowflake background.

```
function playGameMobile(event) {
  let square = event.target.id

    if (document.getElementById(event.target.id) === C1) {
        document.getElementById(event.target.id).classList.add('boat1Part1')
        checkWinningSquaresMobile.push('C1')
    } else if (document.getElementById(event.target.id) === C2) {
        document.getElementById(event.target.id).classList.add('boat1Part2')
        checkWinningSquaresMobile.push('C2')
    } else if (document.getElementById(event.target.id) === A4) {
        document.getElementById(event.target.id).classList.add('boat2Part1')
        checkWinningSquaresMobile.push('A4')
    } else if (document.getElementById(event.target.id) === B4) {
        document.getElementById(event.target.id).classList.add('boat2Part2')
        checkWinningSquaresMobile.push('B4')
    } else if (document.getElementById(event.target.id) === E2) {
        document.getElementById(event.target.id).classList.add('boat3Part1')
        checkWinningSquaresMobile.push('E2')
    } else if (document.getElementById(event.target.id) === E3) {
        document.getElementById(event.target.id).classList.add('boat3Part2')
        checkWinningSquaresMobile.push('E3')
    } else {
        document.getElementById(event.target.id).classList.add('snowflake')
    }
      
  checkWinnerMobile();
}
```

## Change Log
 I initially thought using the local storage was required for the project. Instead of two load pages (one with an introduction and one with instructions), I was going to make three pages- one greeting the user and storing their username. After creating the first two load pages, I determined it would create a negative user experince to have so many pages before playing the game.

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
