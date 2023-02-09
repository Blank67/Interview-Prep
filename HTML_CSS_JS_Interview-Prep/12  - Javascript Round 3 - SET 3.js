/*
1) what is the difference between == And ===
Ans: == in JavaScript is used for comparing two variables, but it ignores the datatype of variable.
=== is used for comparing two variables, but this operator also checks datatype and compares two values.

2) What is the difference between null and undefined?
Ans: A) Null can be assigned to a variable which indicates that a variable does not point any object. But, undefined can't be assigned to a variable. Undefined means means a variable has been declared but has not yet been assigned a value.
B) Null is of type object but undefined is a type itself.
C) Null indicates absence of value for a variable but undefined indicated absence of variable itself.
D) While performing premitive operation null is converted to 0 whereas undefined is converted to NaN.

3) what will the output (true or false) of the following be?Explain why?
console.log(null === undefined)
console.log(null == undefined)
Ans: null === undefined return false as === operator compares both type and values. null and undefined both are falsy but null is an object and undefined is of type undefined.
null == undefined return true as == operator only compares value and both null and undefined are falsy.

4)What is event bubbling and event capturing (Event Propagation)? what is the difference between them? Can you give a code example to explain how you can use event bubbling ?
Ans: Event propagation is a mechanism that defines how events propagate or travel through the DOM tree to arrive at its target and what happens to it afterward.
When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors it is event bubbling.
But, in event capturing when an event happens on an element it first runs the hadler to its most outer parent and make it's way upto itself.
The main differnce between both of them is the flow in which event handlers are called. Default behaviour is event bubbling (default capture value is false).
Eg: HTML -> <div id="grandparent">Grand-Parent
            <div id="parent">Parent
                <div id="child">Child</div>
            </div>
        </div>
CSS -> div {
    min-width: 100px;
    min-height: 100px;
    padding: 30px;
    border: 1px solid black;
    text-align: center;
}
JS -> //Bubbling
document.querySelector("#grandparent").addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
}, false);

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent Clicked!");
}, false);

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child Clicked!");
}, false);
//Capturing
document.querySelector("#grandparent").addEventListener('click', (e) => {
    console.log("Grandparent Clicked!");
}, true);

document.querySelector("#parent").addEventListener('click', (e) => {
    console.log("Parent Clicked!");
}, true);

document.querySelector("#child").addEventListener('click', (e) => {
    console.log("Child Clicked!");
}, true);

5)What is function currying? Can you create a curried function and explain?
Ans: Currying is the process of transforming a function that takes multiple arguments into a function that takes just a single argument and returns another function if any arguments are still needed.
We can acheive function currying by using bind method and by using closure.
A) Using bind()
const multiply = (a,b) => {
    console.log(a*b);
};
const by3 = multiply.bind(this,3); // Here we are pre-configuring value of a
by3(7);
B) Using closures
const multiply = (a) => {
    return (b) => {
        console.log(a * b);
    }
};
multiply(3)(9);

6) What is an IIFE (Immediately Invoked function expression)? Can you give an example?
Ans: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
Eg: (function print1To5() {
    for(let i=1; i<6; i++){
        console.log(i);
    }
})()

*/