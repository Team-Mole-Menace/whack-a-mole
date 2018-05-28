# WHACK-A-MOLE

// initial commit 

## Contributors
* Karen Painter
* Carmen Ramos
* Erik Withak

## Purpose
* Moles have invaded the garden; it is your duty to exterminate as many moles as you can in 30 seconds.

## How to play
* The game starts when you enter your name and choose your options
* Click on the blue moles as they pop up.  Each successful hit gains you one point.
* Don't click on a red mole!  You'll lose a point.
* Your score and the leader board will be displayed once the time runs out

## How to run
* Clone the whole repository
* Run index.html with Live-Server or by starting it in your browser
* Leader board information stored to localStorage

### Special thanks
* Bottles (Banjo-Kazooie)
* Moleman (Thundercats)
* Diglett (Pokemon)
* Morocco Mole (The Atom Ant/Secret Squirrel Show)
* Guacamole (for enhancing the chip-eating experience)


# File structure

## index.html
Initial page, collects user preferences, displays game rules
### index.js
event listener, input validation, writes preferences to local storage, page redirection to game.html

## game.html
game board, displays current score and timer
### game.js 
calls GameApp and appends app to root
### GameApp.js 
renders the game, ends game when Countdown reports that time is up, keeps score, writes final score to history array and local storage
### Moles.js 
generates moles
### Mole.js 
controls the appearance and timing of individual mole
### Countdown.js 
runs timer and alerts when countdown expires

## leaderboard.html 
Final page, shows final score and top 10, and mole rain special effect (has separate folder with it's own app.js and main.css)
### leaderboard.js 
calls and appends Leaderboard App, contains event listener for Play Again
### LeaderboardApp.js 
appends leaderboard and user’s final score to dom
### CurrentScore.js 
renders final score and accuracy
### ReportTable.js 
renders leaderboard table from local storage
### ReportRow.js 
renders an individual row in table

## history.js
contains Game class, fills array of top 10 games from local storage



