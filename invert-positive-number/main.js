

function invert_negatives(num) {
    var newNum = null;
    if (isNaN(num)) {
        return 'This is not a number';
    } else {
        return num * (-1);
    }
}

console.log(invert_negatives(-4));