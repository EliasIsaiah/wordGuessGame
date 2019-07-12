$(document).ready(function () {

    const MAX_GUESSES = 12;

    let game = {
        words: ["mountain", "waterfall", "boulder", "goat", "sheep",
            "glacier", "alpaca", "trail", "tree", "snowfall", "volcano",
            "vista", "hiking", "underbrush", "foliage", "fauna"],
        randomWord: "",
        rWordLength: 0,
        // score: 0,
        guesses: 12,
        wins: 0,
        losses: 0,
        wordGuess: "",
        lettersUsed: [],
        input: "",

        getRandomWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            this.rWordLength = this.randomWord.length;
        },

        updateContent: function (content) {
            $("div.content").html(content);
        },

        initGame: function (object) {

            this.wordGuess = "";
            $("div p.letters").empty();
            $("div.content").empty();
            this.lettersUsed = [];
            this.guesses = 12;
            $("p.guesses").text(this.guesses);
            // this.score = 0;

            this.getRandomWord();

            for (let i = 0; i < object.rWordLength; i++) {
                object.wordGuess += "_";
            }
            
            object.updateContent(object.wordGuess);
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

            if (jQuery.inArray(letter, this.lettersUsed) > -1) {
                return true;
            }
        },

        addLetter: function (letter) {
            if (!this.letterIsUsed(letter)) {
                this.lettersUsed += letter;
                // console.log("letters used: " + this.lettersUsed);
                let newText = this.lettersUsed.toString();
                $("div p.letters").text(newText);
                console.log("array to string: " + this.lettersUsed.toString());
            }
        },

        update: function (index, object) {
            //Add the letter to the list of used letters
            this.addLetter(input);

            if (index < 0) {
                console.log("letter is not contained in the array");
                this.guesses--;
                $("p.guesses").text(this.guesses);
            }
            else {
                object.newWordGuess(input);
                console.log("object.wordGuess: " + object.wordGuess);
                object.updateContent(object.wordGuess);
                
            }
        },

        isGameOver: function() {
            if(this.guesses < 1 ) {
                this.losses++;
                $("p.scoreboardL").text("L: " + this.losses);
                console.log(`this.losses = ${this.losses}`);
                return true;
            } else if(this.wordGuess === this.randomWord) {
                this.wins++;
                $("p.scoreboardW").text("W: " + this.wins);
                
                return true;
            }
        }
    }


    //generate a randowm word from the array by calling the getRandomWord(); function/method
    // game.getRandomWord();



    //set the initial game content html content to nothing
    $("div.content").empty();

    /*This for loop gets the length of the randomly selected word and creates the initial $wordGuess string object 
    with the appropriate number of "_" to indicate how long the word to be guessed is */
    game.initGame(game);

    //log the generated randowm word for debugging/testing purposes
    console.log(game.randomWord);

    //set the html of the game content div to the newly-created wordGuess string


    //function utilizing and event listener to record the player's keypresses
    $(document).keyup(function (event) {

        console.log("game.wordGuess: " + game.wordGuess);

        //get the user input and normalize it
        input = event.key.toLowerCase();

        //index = -1 if the input is not contained in the array, and another value if it is
        let index = jQuery.inArray(input, game.randomWord);
        game.update(index, game);

        if(game.isGameOver()) {
            game.initGame(game);
        }
    });

    //function getRandowmWord() generates a random word when called and assigns it to the appropriate game object variables

    //function newWordGuess creates a new string that contains the guessed letter and updates the content with the new string


});

