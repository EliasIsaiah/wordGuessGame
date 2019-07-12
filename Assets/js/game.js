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

            for (let i = 0; i < game.rWordLength; i++) {
                if (wordArr[i] === input) {
                    guessArr[i] = input;
                }
            };

            game.wordGuess = guessArr.join("");
        },

        letterIsUsed: function (letter) {

            if (jQuery.inArray(letter, this.lettersUsed) > -1) {
                return true;
            }
        },

        addLetter: function (letter) {
            if (!this.letterIsUsed(letter)) {
                this.lettersUsed += letter;
                let newText = this.lettersUsed.toString();
                $("div p.letters").text(newText);
            }
        },

        update: function (index, object) {
            //Add the letter to the list of used letters
            this.addLetter(input);

            if (index < 0) {
                this.guesses--;
                $("p.guesses").text(this.guesses);
            }
            else {
                object.newWordGuess(input);
                object.updateContent(object.wordGuess);
                
            }
        },

        isGameOver: function() {
            if(this.guesses < 1 ) {
                this.losses++;
                $("p.scoreboardL").text("L: " + this.losses);
                return true;
            } else if(this.wordGuess === this.randomWord) {
                this.wins++;
                $("p.scoreboardW").text("W: " + this.wins);
                
                return true;
            }
        }
    }

    //set the initial game content html content to nothing
    $("div.content").empty();

    game.initGame(game);

    //function utilizing and event listener to record the player's keypresses
    $(document).keyup(function (event) {


        //get the user input and normalize it
        input = event.key.toLowerCase();

        //index = -1 if the input is not contained in the array
        let index = jQuery.inArray(input, game.randomWord);
        game.update(index, game);

        if(game.isGameOver()) {
            game.initGame(game);
        }
    });

});

