$(document).ready(function () {
    function game() {

        let words = ['mountain', 'waterfall', 'boulder', 'goat', 'sheep', 'glacier', 'alpaca', 'trail', 'tree', 'snowfall', 'volcano', 'vista', 'hiking', 'underbrush', 'foliage', 'fauna'];

        let $randomWord = getRandomWord();
        console.log($randomWord);

        let $rwordLength = $randomWord.length;

        $('div.content').innerHTML = "";

        let $wordGuess = '';

        for (let i = 0; i < $rwordLength; i++) {
            $wordGuess += "_ ";
            // document.getElementById('gfID').innerHTML += '_ ';
        }
        $('div.content').html($wordGuess);
        console.log($('div.content').html());

        $(document).keyup(function (event) {

            //get the user input
            let $input = event.key;
            console.log($input);
        });

        function getRandomWord() {
            return words[Math.floor(Math.random() * words.length)];
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
                >if the typed letter IS contained in the random word, then do:
                    >swap the blank (underscore) character(s) in the wordGuess string for the guessed letter(s)
                    >check if wordGuess matches randomWord
        */
    }

    game();
});