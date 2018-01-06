

function random_range(startNum, endNum) {
    var range = null;
    if (startNum > endNum) {
        range = startNum - endNum;
        return Math.floor(Math.random()*range +endNum);
    } else {
        range = endNum - startNum;
        return Math.floor(Math.random()*range +startNum);
    }
}

console.log(random_range(2,15));

// for the most part, function is working but the first param
// is inclusive in the range while the end number is not