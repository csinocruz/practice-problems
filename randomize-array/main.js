function randomize_list(array) { 
    var length = array.length;
    var randomIndex = null;
    var sortedList = [];
    
    for (var i=(length-1); i>=0; i--) {
            randomIndex = Math.floor(Math.random()*length); 
        var element = array.splice(randomIndex, 1)
            length--;
            sortedList.push(element);
    }

    console.log(sortedList);
}

randomize_list([5,3,2,5,1]);s