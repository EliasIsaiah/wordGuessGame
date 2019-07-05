window.onload = function game() {
    
    let words = ['mountain', 'waterfall', 'boulder', 'goat', 'sheep', 'glacier', 'alpaca', 'trail', 'tree', 'snowfall', 'volcano', 'vista', 'hiking', 'underbrush', 'foliage', 'fauna'];
    
    let randomWord = words[Math.floor(Math.random()*words.length)];
    
    console.log( randomWord );

    let rwordLength = randomWord.length;

    document.querySelector('div.content').innerHTML = '';

    let wordGuess = '';
    
    for( let i = 0; i < rwordLength; i++ )
    {
        wordGuess += '_ ';
        // document.getElementById('gfID').innerHTML += '_ ';
        
    }
    document.querySelector('div.content').innerHTML = wordGuess;
    console.log(document.querySelector('div.content').innerHTML);
};