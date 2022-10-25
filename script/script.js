'use strict';

function createCounter() {
    let count = 0;
    let myFunction = function() {
        count++;
       return count;
    };
    return myFunction;
}

let increment = createCounter();
let c1 = increment();
let c2 = increment();
let c3 = increment();

console.log(c1, c2, c3);
console.log(increment);
