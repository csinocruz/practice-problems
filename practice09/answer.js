function fitting(word, array) {
    var letters = word.split('');
    var counter = null;
    var output = [];

    for(var i=0; i<array.length; i++) {
        var currentWord = array[i];
        counter = 0;
        
        for(var m=0; m<word.length; m++) {
            var letter = word[m];

            if(currentWord.indexOf(letter) > -1) {
                counter++
                if(counter === word.length) {
                    output.push(currentWord);
                    
                }
            } 
        }
    }
    console.log(output);
}

fitting('cat', [
                'cat',
                'caterpillar',
                'whale',
                'accurate',
                'smile',
                'cactus',
                'caaaaaaaaaaaat'
               ]);

fitting('ire', [

                'poet',
                'near',
                'fire',
                'desire',
                'weird'
               ]);