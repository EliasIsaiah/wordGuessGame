document.addEventListener('DOMContentLoaded', function() {
    
    let words = ['mountain', 'waterfall', 'boulder', 'goat', 'sheep', 'glacier', 'alpaca', 'trail', 'tree', 'snowfall', 'volcano', 'vista', 'hiking', 'underbrush', 'foliage', 'fauna'];
    
    let randomWord = words[Math.floor(Math.random()*words.length)];
    
    console.log( randomWord );

    let rwordLength = randomWord.length;
    
    document.getElementsByClassName('div.content').innerHTML = '<p>'

    for( let i = 0; i < rwordLength; i++ )
    {
        document.getElementsByClassName('div.content').innerHTML += '_ ';
        
    }
    document.getElementsByClassName('div.content').innerHTML += '</p>';
    console.log(document.getElementsByClassName('div.content').innerHTML);
});