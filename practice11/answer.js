function evenOdds(array) {
    var evens = [];
    var odds = [];
    var output = [evens, odds];
    
    for(var i=0; i<array.length; i++) {
        var current = array[i];

        if(current%2 === 0) {
            if(evens.indexOf(current) === -1) {
                evens.push(current);
            }
        } else if (current%2 > -1) {
            if(odds.indexOf(current) === -1) {
                odds.push(current);
            }   
        }
    }
    console.log(output);
}

evenOdds([2,5,1,6,8,2,20,'cat',13,3]);