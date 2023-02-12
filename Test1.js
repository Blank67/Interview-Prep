// A) A Bad Number is defined by a number which is divisible by sum of its digit.
// Example1 :- 12 -> Sum of digit (1+2) = 3. 12 is divisible by 3 therefore its a bad number
// Example2 :- 45 -> Sum of digit (4+5) = 9. 45 is divisible by 9 therefore its a bad number
// 11 is not a Bad (1+1 ) =2 Since 11 is not divisible by 2.
// Question :-
// Write a program to store first n Bad Numbers in an array . After storing return the array.﻿
// Note :- 0-9 are not Bad Numbers so you can start counting from 10.
// Input:-
// n=5
// Output:- Return the output in the form of an array.
// 10
// 12
// 18
// 20
// 21
const isBad = (n) => {
    let number = n;
    let sum = 0;
    while (number > 0) {
        const lastDigit = number % 10;
        sum += lastDigit;
        number = Math.floor(number / 10);
    }
    if (n % sum === 0) {
        return true;
    } else {
        return false;
    }
}
const returnBadNumberArray = (n) => {
    const arr = [];
    let i = 10;
    while (arr.length !== n) {
        if (isBad(i)) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
// console.log(returnBadNumberArray(5));

// B) Print -> 
// **********
// ****  ****
// ***    ***
// **      **
// *        *
const printPattern = (row) => {
    let str = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < row - i; j++) {
            str += "*";
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            str += " ";
        }
        for (let l = 0; l < row - i; l++) {
            str += "*";
        }
        str += "\n";
    }
    console.log(str);
}
// printPattern(5);

// C) Write a program to add two Matrices ( 2d Array). Return the resultant Array.
// Note:- Both the 2d Array will be of the same size.
// Input 1:
// MT1 =
// [[1,2,5],
// [3,5,5]]
// MT2 =
// [[1,5,7],
// [2,1,3]]
// Output:
// [[2,7,12],
// [5,6,8]]
// Input 2:
// MT1 =
// [[1,1,1],
// [2,2,2]]
// MT2 =
// [[3,3,3],
// [4,4,4]]
// Output: 
// [[4,4,4],
// [6,6,6]]
// Input 3:
// MT1 =
// [[1,1,1],
// [2,2,2]
// [3,3,3]]
// MT2 =
// [[3,3,3],
// [4,4,4]
// [5,5,5]]
// Output: 
// [[4,4,4],
// [6,6,6]
// [8,8,8]]
const sumOfMatrix = (a, b) => {
    const result = []
    for (let i = 0; i < a.length; i++) {
        let sumArray = [];
        for (let j = 0; j < a[i].length; j++) {
            sumArray.push(a[i][j] + b[i][j])
        }
        result.push(sumArray);
        sumArray = [];
    }
    return result;
}
sumOfMatrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]], [[3, 3, 3], [4, 4, 4], [5, 5, 5]]);

// D) Given a String task is to reverse all the order of words.
// Return the string with the words order changed.
// Examples:-
// Input: s = "Eat Sleep Code Repeat"
// Output: s = "Repeat Code Sleep Eat"
// Input s= "I love to code in Sharpener"
// Output: s="Sharpener in code to love I"
// Note :- Do Not add any extra spaces
const reverseOrder = (str) => {
    const words = str.split(" ");
    let result = '';
    console.log(words.length);
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i] + " ";
    }
    console.log(result);
}
// reverseOrder("Eat Sleep Code Repeat")