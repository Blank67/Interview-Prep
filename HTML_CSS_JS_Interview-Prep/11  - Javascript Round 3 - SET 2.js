/*
1) What were the 10 new features that were introduced in ES6? Explain each one of them in detail? You will be asked questions on each example you give?
Ans: Ten new features that were introduced in ES6 are ->
A) let and const variable types
B) Arrow functions
C) Spread and Rest operator
D) Template literals
E) Multiline strings
F) Array and Object destructuring
G) Modules
H) Default parameters
I) Enhanced object literals
J) Promises

2) Call, Apply, Bind. When to use what ? Can you give an example?
Ans: 
A) The bind() method creates a new function that, when called, has its this keyword set to the provided value. Basically, binding an object to a function. The bind method creates a copy of the function it is being called on.
Eg: const a ={
    fName: "FName 1",
    lName: "LName 1"
}
const b ={
    fName: "FName 2",
    lName: "LName 2"
}
function print () { //if parameter is passed here then those parameters will be passed to fun() not print.bind().
    console.log(this.fName, this.lName);
}
const fun = print.bind(b);
fun();
B) The call() method calls a function with a given this value and arguments provided individually.The main differences between bind() and call() is that the bind() method are -> a) Call accepts additional parameters as well. b) It executes the function right away (Don't need to store a function to a variable). c) It doesn't make a copy of the function.
Eg: const a ={
    fName: "FName 1",
    lName: "LName 1"
}
const b ={
    fName: "FName 2",
    lName: "LName 2"
}
function print (mName1, mName2) {
    console.log(this.fName, mName, mName2, this.lName);
}
print.call(a, "David1", "David2");
C) The apply method works exactly like call. The only diference between them is that apply accept array of parameters whereas call accept individual parameters.
Eg: const a ={
    fName: "FName 1",
    lName: "LName 1"
}
const b ={
    fName: "FName 2",
    lName: "LName 2"
}
function print (mName1, mName2) {
    console.log(this.fName, mName, mName2, this.lName);
}
print.apply(b,["D1", "D2"])

3) What are different ways to store data in browser? Explain each one of them and when should we use what?
Ans: Different ways to store data in browser are ->
A) Local storage has data limit of about 5MB, the data stored in the local storage has no expiration data, it will not be deleted unless we delete it manually.
B) Session storage also has the data limit of 5 mb, the data stored in the session storage will be deleted when the current tab is closed, and will not be accessable when the session is closed

4)What are generator function in javascript ? How are they different from normal function?
Ans: Generators functions are special type of functions in JS that allows us yields and return (return an object) a result and pauses until next iteration (called next time), unlike the normal functions that returns a value and doesnt pause.
Eg: 
HTML: <h1>New Dynamic Id: <span id="dId"></span></h1>
      <button id="gen" onclick="idGenerator()">Generator Id</button>
JS: function* generator() { //This is a generator function
    let i = 1;
    while(true){
        yield i++; // or i++; yeild i;
    }
}
const simpleGenerator = generator();
const idGenerator = () => {
    document.getElementById("dId").innerText = simpleGenerator.next().value;
}


5)Difference between arr.foreach, array.map and array.filter? Take example input array and explain the output which you will get
Ans: arr.forEach is used to execute a function on every element in an array, it doesn't change the original array and it returns undefined.
array.map is used to execute a function on every element in an array, it doesn't change the original array and it returns new array with updated values.
array.filter is used to filter elements in an array using a specific criteria. It checks every element in an array to see if it meets a certain criteria and returns a new array with the elements that return truthy for the criteria.
Eg: const arr = [9,8,7,6,5,4];
const forEachArr = arr.forEach((ele) => {
    console.log("In arr.forEach()",ele*2);
    return ele*2;
})
console.log("Using arr.forEach():",forEachArr);
const mapArr = arr.map((ele) => {
    return ele*2;
})
console.log("Using arr.map():",mapArr);
const filterArr = arr.filter((ele) => {
    return ele % 2 === 0;
})
console.log("Using arr.filter():",filterArr);

6)What is the use of arr.reduce? Explain with an example.
Ans: The arr.reduce() method executes a user supplied "reducer" (callback function) to each element in an array, and passing the return value from calculation to the next element (to the next iteration). It only return a single value after going through all the elements in an array.
Eg: Sum of all digits in an array.
const arr = [9, 8, 7, 6, 5, 4];
const initialSum = 0;
const totalSum = arr.reduce((accumulatedSum, ele) => {
    return accumulatedSum + ele;
}, initialSum);
console.log(totalSum);

*/