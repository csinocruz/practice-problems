var c = 'combo';

function comboMath(num1, num2, num3, num4, num5) {
    if(!isNaN(num1) && 
       !isNaN(num2) && 
       !isNaN(num3) && 
       !isNaN(num4) && 
       !isNaN(num5) ) {
        var result = num1 * num2;
        result += num3;
        result /= num4;
        result -= num5;
        return result;
    } else {
        return 'Please input numbers only';
    }
};

console.log(comboMath(3,2,6,3,5));