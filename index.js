// write a function that returns the sum of all numbers in an array
function sum(array) {  
    let sum = 0; // initialize sum  

    // Iterate through all elements  
    // and add them to sum  
    for (let i = 0; i < array.length; i++)  
        sum += array[i];  

    return sum;  
}  
 
let array = [2, 3, 4, 5];
console.log("Sum of given array is " + sum(array));
