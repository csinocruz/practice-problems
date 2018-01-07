function everyOther(string) {
    var newString = '';
    var string = string.toLowerCase();
    for(var i=0; i<string.length; i++){
        if(i%2===0) {
            newString += string[i];
        } else if (i%2===1) {
            var cap = string[i].toUpperCase();
            newString += cap;
        }
    }
    return newString;
}

everyOther("Aznbabygirl");