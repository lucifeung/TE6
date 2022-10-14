

for (i=1; i<=100; i++) {
    if ( !(i%5) && !(i%3) ) {
        console.log('FizzBuzz');  //numbers that are divisible by both 3 and 5
    } else if ( !(i%5)) {
        console.log('Buzz');  //numbers divisible by 5
    } else if ( !(i%3) ) {
        console.log('Fizz');  //numbers divisible by 3
    } else {
        console.log(i);
    }
}
