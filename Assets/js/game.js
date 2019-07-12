$(document).ready(function () {

    let game = {
        words: ["mountain", "waterfall", "boulder", "goat", "sheep",
            "glacier", "alpaca", "trail", "tree", "snowfall", "volcano",
            "vista", "hiking", "underbrush", "foliage", "fauna"],
        randomWord: "",
        rWordLength: 0,
        wordGuess: "",
        lettersUsed: [],
        // input: "",

        getRandomWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            this.rWordLength = this.randomWord.length;
        },

        updateContent: function (content) {
            $("div.content").html(content);
        },

        initGame: function (game) {

            this.getRandomWord();
            
            for (let i = 0; i < game.rWordLength; i++) {
                game.wordGuess += "_";
            }
            game.updateContent(game.wordGuess);
        },

        newWordGuess: function (input) {

            let wordArr = game.randomWord.split("");
            let guessArr = game.wordGuess.split("");
            console.log("wordArr: " + wordArr);
            console.log("guessArr: " + guessArr);
            console.log("input: " + input);

            for (let i = 0; i < game.rWordLength; i++) {
                console.log("wordArr[ " + i + " ] = " + wordArr[i]);
                console.log("wordArr[i] === input = " + wordArr[i] === input);
                if (wordArr[i] === input) {
                    guessArr[i] = input;
                    console.log("character replaced");
                }
            };

            game.wordGuess = guessArr.join("");
            console.log("game.wordGuess: " + game.wordGuess);
        },

        letterIsUsed: function (letter) {

            if (jQuery.inArray(letter, this.lettersUsed) > -1 ) {
                return true;
            }
        },

        addLetter: function (letter) {
            if(!this.letterIsUsed(letter)) {
                this.lettersUsed += letter;
                // console.log("letters used: " + this.lettersUsed);
                let newText = this.lettersUsed.toString();
                $("div p.letters").text(newText);
                console.log("array to string: " + this.lettersUsed.toString() );
            }
        },

        update: function (index, game) {
            //Add the letter to the list of used letters
            this.addLetter(input);

            if (index < 0) {
                console.log("letter is not contained in the array");
            }
            else {
                game.newWordGuess(input);
                console.log("game.wordGuess: " + game.wordGuess);
                game.updateContent(game.wordGuess);
            }
        }
    }


    //generate a randowm word from the array by calling the getRandomWord(); function/method
    game.getRandomWord();

    //log the generated randowm word for debugging/testing purposes
    console.log(game.randomWord);

    //set the initial game content html content to nothing
    $("div.content").html("");

    /*This for loop gets the length of the randomly selected word and creates the initial $wordGuess string object 
    with the appropriate number of "_" to indicate how long the word to be guessed is */
    initGame(game);

    //set the html of the game content div to the newly-created wordGuess string


    //function utilizing and event listener to record the player's keypresses
    $(document).keyup(function (event) {

        console.log("game.wordGuess: " + game.wordGuess);

        //get the user input and normalize it
        input = event.key.toLowerCase();

        //index = -1 if the input is not contained in the array, and another value if it is
        let index = jQuery.inArray(input, game.randomWord);
        game.update(index, game);
    });

    //function getRandowmWord() generates a random word when called and assigns it to the appropriate game object variables

    //function newWordGuess creates a new string that contains the guessed letter and updates the content with the new string


});

