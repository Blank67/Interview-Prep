// A) We have given an array of students id's. Every student have different id but twins have same id . Task is to find whether twins are present in given array or not.
// Return true if twin is present otherwise false.
// Solve it in 0(n) time complexity.
// Example 1:-
// Input:[1,2,3,1]
// Output : True
// Explanation: number 1 is present twice in array so twin is present 
// Example 2:-
// Input:[1,2,3,4]
// Output : False
// Explanation : No two elements are present twice in array so twin is not present
// Constraints:
// 1 <= nums.length <= 10^6
// -10^9 <= nums[i] <= 10^9
const isTwins = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return true;
            }
        }
    }
    return false;
}
// console.log(isTwins([1, 2, 3, 1]));

// B) An Array of Elements sorted in descending Order is given and an integer Target.
// If target exists, then return its index. Otherwise, return -1
// Example 1:-
// Input:-
// Arr - [9,5,3, 2,1]
// Target - 5
// Output:-
// 1
// Explanation:- 
// Target 5 is present at index 1.
// Example 2:-
// Input:-
// Arr- [10,8,6,4,2,1]
// Target - 6
// Output:-
// 2
// Explanation:- 
// Target 6 is present at index 2.
// Example 3:-
// Input:-
// Arr- [10,8,6,4,2,1]
// Target - 11
// Output:-
// -1
// Explanation:- 
// Target 11 is not present therefore we have to return -1.
// Constraints:
// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in descending order.
const findIndex = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return (i);
        }
    }
    return -1;
}
// console.log(findIndex([10, 8, 6, 4, 2, 1], 1));

// C) Given an array Containing Strings sort on the basis of number of character 'a' present. Return the sorted array
// Note if number of a is same then length will be given preference.
// Example 1: 
// Input:-
// arr - ["vaibhav", "almanac" , "is" ,"fat", "button","aabaca"]
// Output:-
// ["aabaca", "almanac", "vaibhav", "fat", "button", "is"]
// Explanation:- 
// "aabaca" contains character 'a' 4 times.
// "almanac" contains character 'a' 3 times.
// "vaibhav" contains character 'a' 2 times.
// "fat" contains character "a" 1 times.
// "button" and "is" does not contain character 'a' but length of "button" is more. 
// Constraints:
// 1 <= nums.length <= 1 * 10^4
// -5 * 10^4 <= nums[i] <= 5 * 10^4
const sortBya = (arr) => {
    // const result = [];
    // const obj = {};
    // arr.forEach(element => {
    //     let count = 0;
    //     for (let i = 0; i < element.length; i++) {
    //         if (element.toLowerCase().charAt(i) === 'a') {
    //             count++;
    //         }
    //     }
    //     obj[element] = count;
    // });
    // arr.sort((a, b) => {

    //     const c1 = a.match(/a/gi) || [];
    //     const c2 = b.match(/a/gi) || [];
    //     // console.log(c1);
    //     // console.log(c1.length);
    //     // console.log(c2);
    //     // console.log(c2.length);
    //     // debugger;
    //     return c1.length - c2.length;
    // })
    // console.log(arr);
    // return arr;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let temp = "";
            const c1 = arr[i].match(/a/gi) || [];
            const c2 = arr[j].match(/a/gi) || [];
            if (c1 === 0 || c2 === 0) {
                continue;
            }
            if (c1 > c2) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
    }
}
sortBya(["vaibhav", "almanac", "is", "fat", "button", "aabaca"]);