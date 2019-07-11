$(document).ready(function () {


    let game = {
        words: ["mountain", "waterfall", "boulder", "goat", "sheep",
            "glacier", "alpaca", "trail", "tree", "snowfall", "volcano",
            "vista", "hiking", "underbrush", "foliage", "fauna"],
        randomWord: "",
        rWordLength: 0,
        wordGuess: "",
        input: "",

        getRandomWord: function () {
            this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
            this.rWordLength = this.randomWord.length;
        },

        updateContent: function (content) {
            $("div.content").html(content);
        },

    }
    
    function newWordGuess (input) {

        let wordArr = game.randomWord.split();
        let guessArr = game.wordGuess.split();
        console.log(wordArr);
        console.log(guessArr);

        for (let i = 0; i < game.rWordLength; i++) {
            if (wordArr[i] === input) {
                guessArr[i] = input;
                console.log("character replaced");
            }
        };
        
        game.wordGuess = guessArr.join();
        console.log(game.wordGuess);
    }
    
    //generate a randowm word from the array by calling the getRandomWord(); function/method
    game.getRandomWord();

    //log the generated randowm word for debugging/testing purposes
    console.log(game.randomWord);

    //set the initial game content html content to nothing
    $("div.content").html("");

    /*This for loop gets the length of the randomly selected word and creates the initial $wordGuess string object 
    with the appropriate number of "_" to indicate how long the word to be guessed is */
    for (let i = 0; i < game.rWordLength; i++) {
        game.wordGuess += "_";
        // document.getElementById("gfID").innerHTML += "_ ";
    }

    game.updateContent(game.wordGuess);

    //set the html of the game content div to the newly-created wordGuess string


    //function utilizing and event listener to record the player's keypresses
    $(document).keyup(function (event) {

        //get the user input and normalize it
        game.input = event.key.toLowerCase();

        //index = -1 if the input is not contained in the array, and another value if it is
        let index = jQuery.inArray(game.input, game.randomWord);
        if (index < 0) {
            console.log("letter is not contained in the array");
        } else {
            game.wordGuess = newWordGuess(game.input);
            game.updateContent(game.wordGuess);
            // swapLetters(index, game.$input);
        }
    });

    //function getRandowmWord() generates a random word when called and assigns it to the appropriate game object variables

    //function newWordGuess creates a new string that contains the guessed letter and updates the content with the new string


});