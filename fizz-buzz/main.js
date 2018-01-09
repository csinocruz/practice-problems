function fizzBuzz() {

    for(var i=1; i<=100; i++) {
        // checks if the number is divisible by 3 AND 5
        if(i%3 && i%5) {
            console.log('FizzBuzz');
        } else if(i%5) { // divisible only by 5
            console.log('Buzz');
        } else if (i%3) { // divisible only by 3
            console.log('Fizz');
        }
        console.log(i);
    }
}

fizzBuzz();