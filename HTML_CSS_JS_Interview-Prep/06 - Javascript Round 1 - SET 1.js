/*
Question 1: What is difference between let and const? What is the difference between let and var?
Ans: The difference between let and const is that let variable can be declared first and initialized later, whereas const variable should be declared and initialized at the same time.
The difference between let and var is that, let is block scoped and var is function scoped. Also let and var are hoisted differently let is hoisted but will be in temporal dead zone before initialization so if we try to access let before initialization we get a error however we get undefined in case of var.

Question 2 : what is output of this function
function sample (){
for (let i=0; i<=5;i++){
setTimeout (() => Console.log(i), 1000 );
}
}
Ans: 0,1,2,3,4,5 wil be printed at the same time.

Question 3 : what is output of this
setTimeout(()=>{
console.log("a");
},2000)
console.log("b") ;
Ans: b and after 2 seconds a will be printed.

Question 4: how can you print a first and b later with. You are not allowed to use any extra setTimeouts?
Ans: We can use async await to make setTimeout synchronous. Just wrap everything in an async function and use await at setTime out (return log in Promise).
async function set() {
    const a = await new Promise((res, rej) => {
        setTimeout(() => res('a'), 2000);
    })
    console.log(a);
    console.log("b");
}
set();

*/