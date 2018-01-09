function pigLatin(string) {
    var string = string.toLowerCase();
    var str = string.split(' ');

        for (var i=0; i<str.length; i++) {
            var word = str[i];
            var firstLetter = str[i][0];
                word = word.slice(1,word.length);
                word += firstLetter;
                if(firstLetter === 'a' ||
                   firstLetter === 'e' ||
                   firstLetter === 'i' ||
                   firstLetter === 'o' ||
                   firstLetter === 'u' ) {
                   word += 'way';
                } else {
                    word += 'ay';
                }

            console.log(word);
        }
}

pigLatin('Hello my name is Stu');

//  X first letter goes to the end of the word
//  X if word starts with a vowel, end word with 'way'
//  X then end the word in 'ay'
