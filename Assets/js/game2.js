$(document).ready(function () {

    function game() {

        let game = {
            words: ["mountain", "waterfall", "boulder", "goat", "sheep", "glacier", "alpaca", "trail", "tree", "snowfall", "volcano", "vista", "hiking", "underbrush", "foliage", "fauna"],
            $randomWord: "",
            $rWordLength: 0,
            $wordGuess: "",
            $input: "",
        }

        //generate a randowm word from the array by calling the getRandomWord(); function/method
        getRandomWord();

        //log the generated randowm word for debugging/testing purposes
        console.log(game.$randomWord);

        //set the initial game content html content to nothing
        $("div.content").html("");

        /*This for loop gets the length of the randomly selected word and creates the initial $wordGuess string object 
        with the appropriate number of "_" to indicate how long the word to be guessed is */
        for (let i = 0; i < game.$rWordLength; i++) {
            game.$wordGuess += "_";
            // document.getElementById("gfID").innerHTML += "_ ";
        }

        updateContent(game.$wordGuess);

        //set the html of the game content div to the newly-created wordGuess string
        function updateContent(content) {
            $("div.content").html(content);
        }

        //function utilizing and event listener to record the player's keypresses
        $(document).keyup(function (event) {

            //get the user input and normalize it
            game.$input = event.key.toLowerCase();

            //index = -1 if the input is not contained in the array, and another value if it is
            let index = jQuery.inArray(game.$input, game.$randomWord);
            if (index < 0) {
                console.log("letter is not contained in the array");
            } else {
                game.$wordGuess = newWordGuess(game.$input);
                updateContent(game.$wordGuess);
                // swapLetters(index, game.$input);
            }
        });

        //function getRandowmWord() generates a random word when called and assigns it to the appropriate game object variables
        function getRandomWord() {
            game.$randomWord = game.words[Math.floor(Math.random() * game.words.length)];
            game.$rWordLength = game.$randomWord.length;
        }

        //function newWordGuess creates a new string that contains the guessed letter and updates the content with the new string
        function newWordGuess(input) {
            let newString = "";
            $game.randomWord.forEach(function (value) {
                if (value === input) {
                    newString += input;
                } else {
                    newString += "_";
                }
            })
            console.log(game.$wordGuess);
            return newString;
        }

/*         /* This function is intended to accept a character and index input and using that information swap out
        the underscore character at that index for the inputted character */
/*         function swapLetter(index, input) {
            if (index > -1) {
                let firstHalf = game.$wordGuess.substring(0, index)

                let secondHalf = game.$wordGuess.substring(index++, game.$rWordLength--);

                console.log(index);
                console.log(secondHalf);

                game.$wordGuess = firstHalf + input + secondHalf;

                $("div.content").html(game.$wordGuess);

                index = jQuery.inArray(game.$input, game.$randomWord);

                // swapLetter(index, input);
            }
            else {
                console.log("letter is not in the word");
            }
        } */
    }

    game();
});