// Swap the values of two variables without using a third variable.

// Solved using Functions 
{
    let var1 = 12;
    let var2 = 13;
    
    function swap(a,b){
        var1 = b;
        var2 = a;
        
        console.log(`Value of Var1 : ${var1}  and value of Var2 : ${var2}`);
    }
    swap(var1 , var2)
}
// CHAT GPT METHOD----destructuring assignment
{

    let a = 10;
    let b = 111;
    
    [a,b]=[b,a]
    // Agge vle me value assign horhi hai piche vle k respect me 
    // jisse pata chalta hai ki a me b ki value aur b me a ki value gai 
    console.log(a,b);
}

// Write a function that takes an integer as an argument and returns "Even" for even numbers and "Odd" for odd numbers.

{
    function everOrOdd(int){
        if(int%2==0){
            return 'The given argument is Even'; // If remainder is 0, it's an even number
        }else{
            return 'The given argument is Odd';  // If remainder is not 0, it's an odd number
        }
    }

    let ans = everOrOdd(31);
    console.log(ans);
}

// Write a function to calculate the factorial of a given number.

{
    let number = 4;

    let factorial = (val)=>{
        let factorials = 1;
        for(let i = 1; i<=val; i++){
            factorials *=i;
        }
        console.log('Factorial of ' ,val,' is ',factorials);
    }

    factorial(number)
}

// CHAT-GPT ---- Recurssion method with in depth explanation of it--
{
    // Function to calculate the factorial of a given number
function calculateFactorial(number) {
    // Base case: factorial of 0 is 1
    if (number === 0 || number === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return number * calculateFactorial(number - 1);
    }
  }
  
  // Example usage:
  let result1 = calculateFactorial(5);
  console.log("Factorial of 5:", result1); // Output: 120
  
  let result2 = calculateFactorial(3);
  console.log("Factorial of 3:", result2); // Output: 6
  
} 
//Explanation--------
// {
//     Bilkul, recursion ka concept samajhne ke liye, humein yeh samajhna zaroori hai ki recursion mein function apne aap ko call karta hai, lekin har bar ek chhota input lekar. Yahan, hum dekhte hain kaise `calculateFactorial` function apne aap ko call karta hai:

// ```javascript
// // Recursive case: n! = n * (n-1)!
// return number * calculateFactorial(number - 1);
// ```

// Yeh line batati hai ki agar hume \(n\) ka factorial calculate karna hai, toh hum \(n\) ko uske ek chhote number (\(n-1\)) ke factorial se multiply karenge.

// Let's break it down with an example, maan lijiye \(n = 5\):

// 1. **Step 1:** Hum `calculateFactorial(5)` ko call karte hain.
// 2. **Step 2:** Function check karta hai ki \(n\) agar 0 ya 1 hai toh direct 1 return karta hai. Yahan \(n\) 5 hai, toh base case nahi apply hota.
// 3. **Step 3:** Ab yeh line execute hoti hai: `return 5 * calculateFactorial(4);`
// 4. **Step 4:** Ab, `calculateFactorial(4)` ko call karte hain. Yahan \(n\) 4 hai.
// 5. **Step 5:** Yeh line execute hoti hai: `return 4 * calculateFactorial(3);`
// 6. **Step 6:** Fir, `calculateFactorial(3)` ko call karte hain. Yahan \(n\) 3 hai.
// 7. **Step 7:** Yeh line execute hoti hai: `return 3 * calculateFactorial(2);`
// 8. **Step 8:** Fir, `calculateFactorial(2)` ko call karte hain. Yahan \(n\) 2 hai.
// 9. **Step 9:** Yeh line execute hoti hai: `return 2 * calculateFactorial(1);`
// 10. **Step 10:** Ab, `calculateFactorial(1)` ko call karte hain. Yahan \(n\) 1 hai.
// 11. **Step 11:** Yeh line execute hoti hai: `return 1;` (kya aapne notice kiya, yahan base case lag gaya hai, kyun ki \(n\) 1 hai).
// 12. **Step 12:** Ab, sab ke sab return values ko multiply karte hain: \(5 \times 4 \times 3 \times 2 \times 1 = 120\).

// Is tarah se, recursion ke through hum 5 ka factorial calculate karte hain, jisme har level pe function apne aap ko chhota input dekar call karta hai, jab tak base case tak pahunch jata hai.
// }

// Write a function that takes an array of numbers and returns the sum of all the elements.

{
    let arr = [1,2,3,4,5,6,7,8,9];

    let sumOfNum = function(val){
        let sum=0;
        val.forEach(function(elem){
            sum+=elem;
        });
        return sum;
    }

    console.log(sumOfNum(arr))
}

// Write a function to check if a given word is a palindrome.

{
    let num = 121;
    
    function checkPalindrome(val){
        let stringify = String(val);
        let rev = stringify.split('').reverse().join('');
            if(stringify == rev){
                return 'The Number is a Palindrome Number';
            }else{
                return 'The Number is not a Palindrome Number'
            }
    }
    console.log(checkPalindrome(num));
}

// Explanation of Join, Reverse and split Method 
{
    //REverse Method----------------

    // Reverse Method kisi bhi array ko reverse krne k liye use hota hai.
    // So, to clarify, in JavaScript, reverse() is a method that operates on arrays, and it is used to reverse the order of elements within the array.
    let n = [1,2,3,4];
    console.log(n.reverse());

    // Split Method ----------------- 

    // split() ek JavaScript method hai jo ek string ko tukdon mein batakar unhe ek array mein convert karta hai. Iska use karke hum kisi bhi string ko specific character ya substring ke basis par alag-alag pieces mein tod sakte hain.

    let str = 'abhishek';
    console.log(str.split(''))// agr space nahi dnge to har letter ko alg alg kr dega


    // Join Method ------------- 

    
    // join() method JavaScript mein istemal hota hai taki hum array ke elements ko ek string mein jod sakein. Yeh ek optional parameter bhi leta hai, jo separator hota hai jise hum elements ke beech mein rakhna chahte hain. Yeh method original array ko modify nahi karta; balki, ek naya string return karta hai jo array ke elements ko ek saath represent karta ha

    console.log(n.join(''));
}

// Write a program that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".

{
    for(let i = 1; i<=100; i++){
        if(i%3==0 && i%5==0){
            console.log('FizzBuzz');
        }else if(i%5==0){
            console.log('Buzz');
        }else if(i%3==0){
            console.log('Fizz');
        } else{
            console.log(i);
        }
    }
}

// Write a function that takes an array of numbers and returns the largest number.
{
    let arr = [12,45,101,35,10,78,45,94];
    
    let largestNum = (arrays)=>{
        let largest = arrays[0];

        for(let i =1; i<arrays.length; i++){
            if(arrays[i]>largest){
                largest = arrays[i]
            }

        }
        return largest;
    }
    
   
     let ans = largestNum(arr)
    console.log(ans);
}

//Write a function to reverse a given string.

{

    let str = 'Hello World!!';

    let reverseStr = function(strings){
        let rev = strings.split('').reverse().join('');
        return rev;
    }

    let reversed =  reverseStr(str)
    console.log(reversed);
}

// Write a function that takes a string and returns the count of vowels in it.
{
    let str = "aeiou";

    (function(strs){
        let vowels = ['a','e','i','o','u','A','E','I','O','U'];
        let vowelCount = 0;

        for(let char of strs){
            if(vowels.includes(char)){//isme check kiya ki kya strings ke character array me aarhe hai ki nahi
                vowelCount++;//true hogi condition to increment operator chal jaega
            }
        }
        console.log(vowelCount);
    })(str)
}

// Write a function that determines whether a given number is a prime number.
{

    let num = 10;

    function checkPrime(a){
        
        for(let i = 2; i<a;i++){
            if(a==1){
                return "This is a Prime Number"
            }else if(a%i==0){
                return 'This is Not a Prime Number'
              
            }else{
                return 'this is a Prime Number'
            }
        }
    }

    let prime = checkPrime(num)
    console.log(prime);

}

// Write a function that checks if a given year is a leap year.
{
    let year = 2025;

    function checkLeapYear(yrs){
        if(yrs % 4== 0){
            console.log(`${yrs} is a Leap Year`);
        }else{
            console.log(`${yrs} is  not a Leap Year`);
        }
    }

    checkLeapYear(year)
    
}

// Write a function that takes an array and removes duplicate elements. 

{

    let arr = [1,2,13,3,4,1,2];

    function removeDupli(arry){
        let sets = new Set(arr); // St
        const uniqueArray = Array.from(sets)
        console.log(uniqueArray);
    }

    removeDupli(arr)
}

// Write a function that takes a sentence and capitalizes the first letter of each word.
{
    function capitalizeFirstLetter(sentence) {
        // Split the sentence into an array of words
        const words = sentence.split(' ');
      
        // Iterate through each word in the array
        for (let i = 0; i < words.length; i++) {
          // Capitalize the first letter of each word
          words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
      
        // Join the capitalized words back into a sentence
        const capitalizedSentence = words.join(' ');
      
        return capitalizedSentence;
      }
      
      const sentence = "this is a sample sentence";
      const result = capitalizeFirstLetter(sentence);
      console.log(result); // Output: "This Is A Sample Sentence"
      

}

// Write a function that calculates the sum of squares of numbers from 1 to a given number.

{
    let num =25;
    function sumOfSquare(int){
        let sum = 0;
        for(let i=1;i<=int;i++){
            let square = i**2;
            // console.log(square);

            sum += square; 
        }
        console.log(sum);
    }

    sumOfSquare(num);
}
