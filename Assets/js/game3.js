$(document).ready(function () {

    function game() {

        let game = {
            words: ["mountain", "waterfall", "boulder", "goat", "sheep", "glacier", "alpaca", "trail", "tree", "snowfall", "volcano", "vista", "hiking", "underbrush", "foliage", "fauna"],
            randomWord: "",
            rWordLength: 0,
            wordGuess: "",
            input: "",
        
            getRandomWord: function() {
                this.randomWord = this.words[Math.floor(Math.random() * this.words.length)];
                this.rWordLength = this.randomWord.length;
            },
        }

        //generate a randowm word from the array by calling the getRandomWord(); function/method
        getRandomWord();

        //log the generated randowm word for debugging/testing purposes
        console.log(this.randomWord);

        //set the initial game content html content to nothing
        $("div.content").html("");

        /*This for loop gets the length of the randomly selected word and creates the initial $wordGuess string object 
        with the appropriate number of "_" to indicate how long the word to be guessed is */
        for (let i = 0; i < this.rWordLength; i++) {
            this.wordGuess += "_";
            // document.getElementById("gfID").innerHTML += "_ ";
        }

        updateContent(this.wordGuess);

        //set the html of the game content div to the newly-created wordGuess string
        function updateContent(content) {
            $("div.content").html(content);
        }

        //function utilizing and event listener to record the player's keypresses
        $(document).keyup(function (event) {

            //get the user input and normalize it
            this.input = event.key.toLowerCase();

            //index = -1 if the input is not contained in the array, and another value if it is
            let index = jQuery.inArray(this.input, this.randomWord);
            if (index < 0) {
                console.log("letter is not contained in the array");
            } else {
                this.wordGuess = newWordGuess(this.$input);
                updateContent(this.wordGuess);
                // swapLetters(index, this.$input);
            }
        });

        //function getRandowmWord() generates a random word when called and assigns it to the appropriate game object variables

        //function newWordGuess creates a new string that contains the guessed letter and updates the content with the new string
        function newWordGuess(input) {
            let newString = "";
            let array = ["a", "b", "c", "d"];
            // this.$randomWord.forEach(function (value) {
            array.forEach(function (value) {

                if (value === input) {
                    newString += input;
                } else {
                    newString += "_";
                }
            });
            console.log(this.$wordGuess);
            return newString;
        }
    }

    game();
});