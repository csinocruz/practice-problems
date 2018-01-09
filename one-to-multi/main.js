function groupArray(array) {
    var strings  = [];
    var numbers  = [];
    var booleans = [];
    for(var i=0; i<array.length; i++) {
        switch(typeof array[i]) {
            case "string":
                strings.push(array[i]);
                break;
            case "number":
                numbers.push(array[i]);
                break;
            case "boolean":
                booleans.push(array[i]);
                break;
            default:
                return 'N/A';
        }
    }
    return [strings, numbers, booleans];
}

groupArray(['hello', 34, true, false, 'goodbye', 56, 12, '25', true]);
