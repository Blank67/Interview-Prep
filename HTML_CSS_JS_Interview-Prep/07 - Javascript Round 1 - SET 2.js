/*
Question 6 : what is process.nextTick ?
Ans: A method of the native Node process module, process. nextTick is similar to the familiar setTimeout method in which it delays execution of its callback function until some point in the future.
process.nextTick ( ) schedule a callback function to be executed in next iteration of event loop. For eg:
function add(from, a, b) {
    debugger
    console.log(from, a + b);
}
process.nextTick(() => { add("Process Tick", 11, 12) }) //Code 1
setTimeout(() => { add("SetTimeout", 17, 92) },1000); //Code 2
add("Direct Function", 44, 78); //Code 3
Here, whole code runs and process.nextTick() is put in process.nextTick queue and setTimeout() are put in macrotask queue. And, when all lines of code run an event loop completes its 1 iteration, after that task from process.nextTick queue ran first then micro queue (promises) and lastly macrotask queue.
So, output will be in this order: Code 3 then Code 1 then Code 2.

Question 7: how can you check if a variable is an array?
Ans: We can use following methods to find whether "b" is an array or not->
console.log(Array.isArray(b));
console.log(b instanceof Array);
console.log(b.constructor === Array);

*/