function findVowels(string) {
    var vowels = '';
    var string = string.toLowerCase();
    for (var i=0; i<string.length; i++) {
        
        if (string[i] === 'a' ||
            string[i] === 'e' ||
            string[i] === 'i' ||
            string[i] === 'o' ||
            string[i] === 'u' ) {
                vowels += string[i];
        }
    }
    return vowels;
}

findVowels("four score and seven years ago");