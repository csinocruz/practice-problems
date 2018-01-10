function fitting(word, array) {
    var check = word.split('');
    console.log(check);
    var output = [];
    var win = null;
    var letter;

    for(var i=0; i<array.length; i++) {
        var currentWord = array[i];
        //console.log('***' + currentWord + '***');
            win = 0;

        for (var m=0; m<currentWord.length; m++) {
            letter = word[m];

            if(array[i].indexOf(letter) === -1){
                //break;
            } else {
                win++
                if(win === word.length) {
                    output.push(currentWord);
                }
                
            }
        }
    }
    console.log(output);
}