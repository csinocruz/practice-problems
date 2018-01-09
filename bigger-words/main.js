function biggerWords(string, array) {
    var strLength = string.length;
    var largerWords = [];
    for(var i=0; i<array.length; i++) {
        if(array[i].length > strLength) {
            largerWords.push(array[i]);
        }
    }
    console.log(largerWords);
}

biggerWords('whales', ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']);