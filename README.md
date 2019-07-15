# wordGuessGame

This is a word guessing game with the theme of the Great Outdoors. 

### To play the game: 

1. Load the game into your browser by navigating to [https://eliasisaiah.github.io/wordGuessGame/](https://eliasisaiah.github.io/wordGuessGame/)
2. Press any key on your keyboard to begin guessing letters for the randomly selected word
3. When you successfully gues a word a new word is automatically selected and the "wins" counter is incremented by 1.
4. There is a finite amount of guesses that you are allowed before you lose the current round. After 12 guesses if the word is not guessed, you will lose the round.
5. Your Win/Loss record is recorded in the Win/Loss div located below the word mask, next to the div containing your guesses remaining counter.
5. At the bottom is a record of the letters that you have guessed for the current word.

### Technologies used to create the game:

* The game logic is entirely JavaScript and JQuery
* The responsive game layout is accomplished with Grid CSS, with no part of the html defining any of the page structure.

### Things to implement in the future:

*   Data validation on the input to ensure that what is being entered from the keyboard is a character and not a function key or a number
*   Support for case-sensitive guess words
*   A timer to limit how long the player has to guess the word
*   Support for hyphenated words and sentence strings as guessables
*   Some way for the player to relish in their victory for a bit after successfully guessing a string


