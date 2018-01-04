// Build a function, find_middle_letters, that finds the middle of 
// a string.  If the string is an odd number of characters, it returns 
// 1 letter.  If it is an even number of characters, it returns 2 
// characters.  It takes a string as a parameter

// peach - odd
// almond - even

function find_middle_letters(word) {
    var length = word.length;
    if(length%2 !== 0) {
        var middle_index = Math.floor(length/2);
        console.log(word[middle_index]);
    } else {
        var letter1 = (length/2) -1;
        var letter2 = length/2;
        console.log(word[letter1], word[letter2]);
    }
};

find_middle_letters(word);