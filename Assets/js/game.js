
$(document).ready(function () {

    function game() {

        let game = {
            words: ["mountain", "waterfall", "boulder", "goat", "sheep", "glacier", "alpaca", "trail", "tree", "snowfall", "volcano", "vista", "hiking", "underbrush", "foliage", "fauna"],
            $randomWord: "",
            $rWordLength: 0,
            $wordGuess: "",
            $input: "",
        }

        getRandomWord();
        console.log(game.$randomWord);
        // console.log(game.$rWordLength);
        // let $rWordLength = $randomWord.length;


        $("div.content").innerHTML = "";

        // let game.$wordGuess = ";

        for (let i = 0; i < game.$rWordLength; i++) {
            game.$wordGuess += "_";
            // document.getElementById("gfID").innerHTML += "_ ";
        }
        // console.log(game.$wordGuess);

        $("div.content").html(game.$wordGuess);
        // console.log($("div.content").html());

        $(document).keyup(function (event) {

            //get the user input
            game.$input = event.key.toLowerCase();

            console.log(game.$input);

            let index = jQuery.inArray(game.$input, game.$randomWord);
            swapLetter(index, game.$input);
            // recursiveSwap($input);
        });


        // function recursiveSwap($input) {
        //     let index = jQuery.inArray($input, game.$randomWord);
        //     if (index > -1) {
        //         console.log("index");
        //         swapLetter(index, $input);
        //         // recursiveSwap($input);
        //     }
        //     else {
        //         console.log("not in array");
        //         return;
        //     }
        // }

        function getRandomWord() {
            game.$randomWord = game.words[Math.floor(Math.random() * game.words.length)];
            game.$rWordLength = game.$randomWord.length;
        }

        function swapLetter(index, input) {
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
                return;
            }
            // console.log(index);
            // console.log(game.$wordGuess.charAt(index));
            // game.$wordGuess.charAt(index) = input.charAt(0);
            // console.log(game.$wordGuess.charAt(index));
        }
        //pseudo-code for word guessing game
        /*
            listen for keyboard event
            on keyboard event start the game
                >initialize the randomly chosen word to guess
                >generate the blank slots where the guessed letters will go
            as the user inputs letters to the keyboard check:
                >is the inputted character contained in the random word?
                    >remember to check each character of the random word as letters are used multiple times (i.e. vowels)
                    >this looks like a job for recursion. see RECURSION
                >if the typed letter IS contained in the random word, then do:
                    >swap the blank (underscore) character(s) in the wordGuess string for the guessed letter(s)
                    >check if wordGuess matches randomWord

                RECURSION:
                    
                }
        */
    }

    game();
});