// Question 3:
// Write a JavaScript function that takes an array of numbers as input and returns the sum of all the numbers in the array.
{
let arr = [1,2,3,4,5]


let total = 0;
function sum(arrays){
    for(let i = 0; i < arrays.length; i++){
        total += arrays[i];
    }
    console.log(total);

}
sum(arr)}

// Question 4:
// Write a JavaScript function called reverseString that takes a string as input and returns the reversed version of that string. For example, if the input is "hello", the output should be "olleh".
{
let str = 'hello';

function reverseString(strs){
    let reversed ='';
    for(let i = strs.length - 1; i >= 0; i--){
        reversed += strs[i];
    }
    console.log(reversed);
}

reverseString(str);

// function reverseString(str) {
//     // Convert the string to an array of characters, reverse it, and then join it back into a string
//     return str.split("").reverse().join("");
// }

// // Example usage:
// const inputString = "hello";
// console.log(reverseString(inputString)); // Output: "olleh"


}


// Question 5:
// Write a JavaScript function called isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same backward as forward), and false otherwise. Ignore non-alphanumeric characters and case sensitivity. For example, "A man, a plan, a canal, Panama" should return true.


{
    let data = 'abhishek';

    function isPalindrome(a){
        let lowered = a.toLowerCase();
        let reversedStr = a.split('').reverse().join('').toLowerCase();

        if(lowered === reversedStr){
            return true;
        }
        else{
            return false;
        }
    }

    console.log(isPalindrome(data));
}

// Question 6:
// Write a JavaScript function called countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) present in that string. Ignore case sensitivity. For example, if the input is "Hello", the output should be 2, because there are two vowels (e and o) in the string.
{
    let strs2 = 'hello';

    function countVowels(b){
        let count = 0;
        for(let i=0; i<b.length; i++){
            if(b[i] === 'a' || b[i] === 'e' || b[i] === 'i' || b[i] === 'o' || b[i] === 'u'){
                count++;
            }
        }
        console.log(count);
    }

    countVowels(strs2);
}



// Question 7:
// Write a JavaScript function called capitalizeFirstLetter that takes a string as input and returns the same string with the first letter capitalized. For example, if the input is "javascript", the output should be "Javascript".

{
    let txt = 'javascript';

    function capitalizeFirstLetter(a){
        console.log( a.charAt(0).toUpperCase() + a.slice(1));
    }
    capitalizeFirstLetter(txt)
}
// Question 8:
// Write a JavaScript function called findMax that takes an array of numbers as input and returns the largest number in the array. If the array is empty, the function should return null.


{
    function findMax(numbers) {
        // Check if the array is empty
        if (numbers.length === 0) {
            return null; // Return null if array is empty
        } else {
            // Use the Math.max() function to find the largest number in the array
            return Math.max(...numbers);
        }
    }
    
    // Example usage:
    const numbers = [5, 3, 9, 2, 10];
    console.log(findMax(numbers)); // Output: 10
    
}

{
    let dupli = [1,2,3,45,1,23,2,3];
    function removeDuplicates(a){
        let newArr = new Set(a)
        let unique = Array.from(newArr)
        console.log(newArr);
        console.log(unique);
    }

    removeDuplicates(dupli);
}