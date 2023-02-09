/*
1) Explain the different ways of creating object in javascript? Explain all the 3 ways.
Ans: Three different ways to create objects are -> 
A) Using object literal: Creating an object with {} and adding data in key-value pair. 
    Eg: const a = {name: "Demo"}
B) Using new keyword: We can create an object using new Object().
    Eg: const b = new Object({ name: "Demo"});
C) Using Object.create(): It create a new object using an existing object as prototype.
    Eg: const car = { brand: "none", wheels: 4, horn: 1 }
        const maruti = Object.create(car);

2) What are Object Prototype Methods
Ans: Prototypes are the mechanism by which JavaScript objects inherit features from one another. Prototype methods are the methods inherited from its parent and Object class.

3) What is object chaining in javascript? Can you create functions to explain object chaining better?
Ans: Whenever a new object is created its prototypes are also created, and since prototype is also an object their prototypes were also creted and so on. This is called prototype chaining.

4) What is the main difference between fat arrow function and normal function?
Ans: Unlike regular functions, arrow functions do not have their own this.

5) Can you give an example to explain how "this" works differenetly with fat arrow function and normal function?
Ans: const obj = {
    name: "Test",
    fun1: () => {
        console.log("hello " + this.name); // no 'this' binding here
    },
    fun2() {
        console.log("Welcome to " + this.name); // 'this' binding works here
    }
};
obj.fun1();
obj.fun2();

6) What are the advantages of Axios vs other competitors( like fetch, http, got etc)? Why is axios so widely used?
Ans: A) Axios has url in request object.
B) Axios performs automatic transforms of JSON data.
C) Axios allows cancelling request and request timeout.
D) Axios has wide browser support.

7) What are closures? Explain with an example? (Favourite interview question)
Ans: A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
Eg: function fun1(fName) {
    const greeting = "Hello";
    return function fun2() {
        console.log(`${greeting}, ${fName}.`);
    }
}
const greetUser = fun1("User 1");
greetUser();

*/