# Homework - {Hangman Game}



Requirements

1. Press any key to start the game
2. Display the number of wins the user has
3. Display the number of Guesses remaining a user has
4. After user wins or loses game should automatically

Technologies Used

* Javascript fot game rules
* HTML to display the game 

Code Explanation

* I created all my variables for the program which included the wordList array that held all the words in the game.

* The other variables were used to measure the number of guesses a user had, the number of letters they guessed correct, and the number of wins and losses.

* The next step in coding this game was creating a startgame function that chose a word from my word list at random to begin the game with.

* I next used the document.onkeyup event listener to take a users guesses they typed in and compared that with whatever the letters were in the chosen word.

* My checkletters functions passed through my documen.onkeyup event listener to compare what the user typed. I then used a for loop and if/else statements to determine the course of action when somebody guessed a letter correctly or incorrectly.

* My last function was a roundcomplete function that alerted the user whether they won or lost and started a new game under both  scenarios.