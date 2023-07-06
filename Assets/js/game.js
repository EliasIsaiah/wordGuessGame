document.addEventListener('DOMContentLoaded', function () {

    const MAX_GUESSES = 12;

    let game = {
        words: ["mountain", "waterfall", "boulder", "goat", "sheep",
            "glacier", "alpaca", "trail", "tree", "snowfall", "volcano",
            "vista", "hiking", "underbrush", "foliage", "fauna"],
        randomWord: "",
        rWordLength: 0,
        guesses: 12,
        wins: 0,
        losses: 0,
        wordGuess: "",
        lettersUsed: [],
        input: "",
        lettersP: undefined,
        guessesP: undefined,
        scoreboardLP: document.getElementById("scoreboardL"),
        scoreboardWP: document.getElementById("scoreboardW"),
        contentDIV: document.getElementsByClassName("content")[0],

        getRandomWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            this.rWordLength = this.randomWord.length;
        },

        updateContent: function (content) {
            this.contentDIV.innerHTML = content;
        },

        initGame: function (object) {

            this.wordGuess = "";
            let lettersElements = document.getElementsByClassName("letters");
            this.lettersP = Array.from(lettersElements).find(element => element.nodeName === "P");

            this.lettersP.innerHTML = "";
            this.contentDIV.innerHTML = "";
            this.lettersUsed = [];
            this.guesses = 12;
            let guessesElements = document.getElementsByClassName("guesses");
            this.guessesP = Array.from(guessesElements).find(element => element.nodeName === "P");
            this.guessesP.textContent = this.guesses;

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
            return this.lettersUsed.findIndex(usedLetter => usedLetter === letter) > -1;
        },

        addLetter: function (letter) {
            if (!this.letterIsUsed(letter)) {
                this.lettersUsed.push(letter);
                let newText = this.lettersUsed.toString();
                this.lettersP.textContent = newText;
            }
        },

        update: function (index, object) {
            //Add the letter to the list of used letters
            this.addLetter(input);

            if (index < 0) {
                this.guesses--;
                this.guessesP.textContent = this.guesses;
            }
            else {
                object.newWordGuess(input);
                object.updateContent(object.wordGuess);

            }
        },

        isGameOver: function () {
            if (this.guesses < 1) {
                this.losses++;
                this.scoreboardLP.textContent = `L: ${this.losses}`;
                return true;
            } else if (this.wordGuess === this.randomWord) {
                this.wins++;
                this.scoreboardWP.textContent = `W: ${this.wins}`;

                return true;
            }
        }
    }

    //set the initial game content html content to nothing
    game.contentDIV.innerHTML = "";

    game.initGame(game);

    //function utilizing and event listener to record the player's keypresses
    document.addEventListener("keyup", (event) => {


        //get the user input and normalize it
        input = event.key.toLowerCase();

        //index = -1 if the input is not contained in the array
        let index = game.randomWord.split("").findIndex(char => char === input);
        game.update(index, game);

        if (game.isGameOver()) {
            game.initGame(game);
        }
    });

});

