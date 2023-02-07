/*
Question 1: What is output of this (refer this if you dont know about setimmediate - https://www.educative.io/edpresso/what-is-setimmediate-in-nodejs)
setImmediate (()=>{
console.log("first")
})
setTimeout (()=>{
console.log("second")
})
console.log("third");
Ans: third, second, first

Question 2 : Difference between SetImmidiate and Process.nexttick
Ans: process.nextTick() fires immediately on the same phase and setImmediate() fires on the following iteration or 'tick' of the event loop.
process.nextTick() has higher priority over setImmediate(). If process.nextTick() is called in a given phase, all the callbacks passed to process.nextTick() will be resolved before the event loop continues. This will block the event loop and create I/O Starvation if process.nextTick() is called recursively. Unlike process.nextTick(), recursive calls to setImmediate() won't block the event loop, because every recursive call is executed only on the next event loop iteration.

Question 3: What is difference between promise and call back
Ans: A callback function is passed as an argument to another function whereas Promise is something that is achieved or completed in the future.

Question 4 : What is output ?
let a=new Promise((resolve,reject)=>{
reject ({ msg: 'Something went wrong' ))
})
a.then(ressolve=>{console.log{ressolve}}).catch(err=>{console.log(err.msg) })
Ans: Something went wrong

Question 5 : what is output ?
await delay(6000)
setTimeout (()=>{
console.log("first")
},10000)
console.log("second");
Ans: 

Question 6: What is function definition ?
Ans: A function in JavaScript is similar to a procedure — a set of statements that performs a task or calculates a value

*/