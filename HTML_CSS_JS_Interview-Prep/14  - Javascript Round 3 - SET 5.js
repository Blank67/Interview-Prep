/*
1) How to iterate inside an object and print all the values inside it without the keys? Give a code example?
Ans: We can Object.values() method as it return an array of all the values in the object, after that we use can use any loop to iterate through that array and print all the values.
const animals = { bird: 8, zebra: 3, lion: 1, tiger: 2 }
const printAllValuesOfObject = (obj) => {
    const objValues = Object.values(obj);
    objValues.forEach(element => {
        console.log(element);
    });
}
printAllValuesOfObject(animals);

2) What is NaN property in JavaScript?
Ans: NaN is hort for "Not a Number". It means if a element is a NaN it is not a legal number.
Eg: '1' is a number but "Hello" is not a number.

3) Explain pass by value and pass by reference? Give code example of how you would pass by reference in javascript?
Ans: In pass by value a copy of actual parameter's value is created in memory (new memory is allocated). It means if user change value of one paramenter there is no affect on the other parameter.
Eg: let a = 0;
let b = a;
b=1;
console.log(a); // 0
console.log(b); // 1
But, in pass by reference instead of the actual parameter's value its address is stored (no new memory is allocated). It means if user changes value of one paramenter, the other parameter also changes as the both are pointing to the same address in memory.
Eg: let a = {demo: 0};
let b = a;
b.demo=1;
console.log(a); // 1
console.log(b); // 1

4) Explain “this” keyword?
Ans: In javascript "this" refers to an object. Which object is referred depends upon how "this" is invoked. Alone "this" refers to the global object.
In an object method "this" refers to the object itself. In an event, "this" refers to the element that received the event. We can use methods like call(), apply(), bind() to manipulate "this" reference.

5) What is memoization in javascript? Can you give a code example implementing the same?
Ans: Memoization is an optimization technique that makes applications more efficient and hence faster. It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.
It is based to closures and high-order functions.
Eg: //Without memoization
const sum = (n) => {
    let total = 0;
    for(let i=0; i<=n; i++){
        total+=i;
    }
    return total;
}
console.time();
console.log(sum(10));
console.timeEnd();
//With memoization
const sum = (n) => {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
const memoize = (func) => {
    let cache = {}
    return function (...args) {
        let n = args[0];
        if (n in cache){
            console.log("Output from cache.");
            return cache[n];
        }else{
            console.log("New input received");
            const newOutput = func(n);
            cache[n] = newOutput;
            return newOutput;
        }
    }
}
const efficientFunction = memoize(sum);
console.time();
console.log(efficientFunction(5));
console.timeEnd();
console.time();
console.log(efficientFunction(5));
console.timeEnd();

6) What is the data type of variables in JavaScript?
Ans: There are two types of variable in JS - Primitive data type and reference data type.
A) Primitive data type: String, Number, Boolean, Undefined, Null, Symbol.
B) Reference data type: Objects, Functions, Collections, Arrays, Dates.

7) What are escape characters? Why are they used? Give code example.
Ans: Escape characters are symbols that enables you to output characters you wouldn't normally be able to, usually because the browser will interpret it differently to what you intended.
Some escape characters are: \b, \f, \r, \t, \v, \', \", \.
For example if we want to print a string that have both single quotation mark and double quotation mark we normally won't be able to print that, as a string starts with either a ' or " and since our text contain both ' and " the compiler interprets it differently.
Without escape charater: console.log("Kunal's friend said "Use escape characters for these type strings"");. This won't print as intended.
With escape characte: console.log("Kunal\'s friend said \"Use escape characters for these type strings\"");

8) What is break and continue statements? How are they different?
Ans: The break statement is used to jump out of the loop. It breaks the loop and continue executing the code after the loop.
The continue statement is used to jump over one iteration in the loop. It breaks one iteration and continue executing the next iteration.

9) What is the typeof an array in javascript?
Ans: The typeOf() an array in javascript is of type Object.

10) What are anonymous functions in js? Give an example?
Ans: An anonymous function is a function without a name. So, they are not accessible after initial creation. Therefore, you often need to assign it to a variable.
Eg: const anonymousFunction = function(){
    console.log("This is an anonymous function.");
}
anonymousFunction();

11) What's the difference between event.preventDefault() and event.stopPropagation() methods in JavaScript?
Ans: The event.preventDefault() is used to prevent default behaviour of the browser.
The event.stopPropagation() is used to stop propagation of an event from occuring in the bubbling and capturing phase. 

12) What are higher order function ? Explain with code example. Watch this video to understand better. (Favourite Interview Question)
Ans: A function that takes another function as an argument or return another function they are called higher order function.
function highOrderFunction(func,a,b){
    func(a,b);
}
function add(a,b){
    console.log(a+b);
}
highOrderFunction(add,5,8);

*/