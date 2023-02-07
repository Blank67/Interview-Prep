/*
1)When do we use async await ?
Ans: We use async await to call asynchronous functions (like promise, network calls) synchronously as JS is synchronous in nature. We use this to avoid promise hell.

2)What is the reason behind writing await inside async function only?
Ans: async and await are both meta keywords that allow asynchronous code to be written in a way that looks synchronous. An async function tells the compiler ahead of time that the function will be returning a Promise and will not have a value resolved right away.
To tell the compiler to wait for that promise we use await. Basically, await only works inside the async functions sync async functions deals with promises and await only works for promises.

3)What will the output of this be?
async fun fun1(){
console.log('a');
console.log('b');
await setTimeout(() => console.log('c'), 1000)
await setTimeout(() => console.log('d'), 0)
console.log('e');
}
fun1()
Explain the reason behind the answer?
Ans: a,b,e,d,c. Await only works for promises, since setTimeout doesn't return a promise it does not wait for it.

4) can you solve thee above problem, so that we get proper outputs ? Hint await should works properly.
Ans: async function fun1() {
    console.log('a');
    console.log('b');
    const msg1 = await new Promise((res, rej) => {
        setTimeout(() => res('c'), 1000)
    })
    const msg2 = await new Promise((res, rej) => {
        setTimeout(() => res('d'), 0)
    })
    console.log(msg1);
    console.log(msg2);
    console.log('e');
}
fun1()

5) What are callback? What is Callback hell? Can you give an example of callback hell?
Ans: A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
Eg: function fun1(){
    console.log("Fun1 called.");
}
function fun2 (x){
    console.log("Fun2 called.");
    x();
}
fun2(fun1);
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell.
Eg:  fun1((fun2) => {
    fun2((fun3) => {
        fun3((fun4) => {
            ...and so on
        })
    })
  })

6) How are promises more superior than callbacks? How do promises solve the issue of callback hell?
Ans: Promise can handle multiple asynchronous operations easily and provide better error handling than callbacks and events. In other words also, we may say that, promises are the ideal choice for handling multiple callbacks at the same time, thus avoiding the undesired callback hell situation. 
Instead of returning a function we use .then() for further processing thus resolving callback hell.

*/