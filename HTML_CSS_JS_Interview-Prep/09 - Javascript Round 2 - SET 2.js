/*
1) Difference between let, var and const
Ans: LET - We can change the value of let.
        - We can declare and initialize the variable in different places
     CONST - We cannot change the value of let.
         - We cannot declare and initialize the variable in different places
     LET and CONST are block scoped and VAR is function scoped.

2) Hosting, callbacks, ES6 features
Ans: Hoisting allows you to use functions and variables before they're declared.
A callback is a function passed as an argument to another function, which then cann be called by the parent or outer function.
Some of the ES6 deatures are:
A) Introduction of let and const variable types
B) Arrow functions
C) Spread and Rest operators
D) Array destructuring
E) Tempalte literal
F) Default parameters
G) Multi line strings
H) Modules
I) Promises
J) Enhance object literals

3) Difference between array.map and array.filter
Ans: Array.map return a new array after transforming each element of array individually. For example if we want to multiply each number in array by 2.
Whereas Array.filter returns a subset array by removing elements that don't meet a specific condition.

4) How to find the length of an object
Ans: We can simply use the Object.keys() method along with the length property to get the length of a JavaScript object.
Object.keys() will return array of all the keys in an object and we can use method chaining to that array. So, we will be using Object.keys(obj).length

5) What are promises? 3 states of promises.
Ans: A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. Promises are used to handle asunc tasks.
Promise has three states, namely:
A) Pending - undefined
B) Resolve - a result value
C) Reject - an error value

6) Why do we use promises over callbacks and why use await and async?
Ans: Promises are better than callback as they help us to avoid callback hell. As promises are asynchronous in nature and JS is synchronous so, to make promises synchronous we use Async-Await.
Eg- Plan a trip to manali.
     Before Callback ->
     function buyCar(){
         setTimeout(() => {
             console.log('Bought a car!');
         },1000);
     }
     function planTrip(){
         setTimeout(() => {
             console.log('Planned a trip!');
         },3000);
     }
     function reachDestination(){
         setTimeout(() => {
             console.log('Reached Manali!');
         },2000);
     }
     buyCar();
     planTrip();
     reachDestination();
    After Callback also show callBack hell->
     function buyCar(c1,c2){
         setTimeout(() => {
             console.log('Bought a car!');
             c1(c2);
         },1000);
     }
     function planTrip(c2){
         setTimeout(() => {
             console.log('Planned a trip!');
             c2();
         },3000);
     }
     function reachDestination(){
         setTimeout(() => {
             console.log('Reached Manali!');
         },2000);
     }
     buyCar(planTrip,reachDestination);
    After Promise also show Promise Hell->
     function buyCar(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Bought a car!');
             },1000);
         });
     }
     function planTrip(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Planned a trip!');
             },3000);
         });
     }
     function reachDestination(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Reached Manali!');
             },2000);
         });
     }
     buyCar().then((res1) => {
         console.log(res1);
         planTrip().then((res2) => {
             console.log(res2);
             reachDestination().then((res3) => {
                 console.log(res3);
             });
         })
     });
    Async Await
     function buyCar(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Bought a car!');
             },1000);
         });
     }
     function planTrip(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Planned a trip!');
             },3000);
         });
     }
     function reachDestination(){
         return new Promise((res,rej) => {
             setTimeout(() => {
                 res('Reached Manali!');
             },2000);
         });
     }
     async function call(){
         const msg1 = await buyCar();
         console.log(msg1);
         const msg2 = await planTrip();
         console.log(msg2);
         const msg3 = await reachDestination();
         console.log(msg3);
     }
     call();
*/