window.onload = function() {
    
    let words = ['mountain', 'waterfall', 'boulder', 'goat', 'sheep', 'glacier', 'alpaca', 'trail', 'tree', 'snowfall', 'volcano', 'vista', 'hiking', 'underbrush', 'foliage', 'fauna'];
    
    let randomWord = words[Math.floor(Math.random()*words.length)];
    
    console.log( randomWord );

    let rwordLength = randomWord.length;

    for( let i = 0; i < rwordLength; i++ )
    {
        document.getElementsByClassName('content').innerHTML() += "_ ";
    }
}