//Build a function, find_middle_letters, that finds the middle of 
// a string.  If the string is an odd number of characters, it returns 
// 1 letter.  If it is an even number of characters, it returns 2 
// characters.  It takes a string as a parameter

let word = 'pineapple'

function find_middle_letters(word) {
    var length = word.length;
    if(length%2 !== 0) {
        var middle_index = Math.floor(length/2);
        console.log(word[middle_index]);
    } else {
        console.log('The word is even!');
    }
};

find_middle_letters(word);