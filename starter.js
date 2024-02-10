// 1) Make a variable user and initialize a value "Ram" and print it on console
{
    let user;
    user = 'Ram'
    console.log(user);
}

// 2) Make two variables and print their sum, mul, div, sub
{
    let var1 = 12;
    let var2 = 4;

    console.log(`Sum of ${var1} and ${var2} =`, var1 + var2);
    console.log(`Product of ${var1} and ${var2} =`, var1 * var2);
    console.log(`Quotient of ${var1} and ${var2} =`, var1 / var2);
    console.log(`Difference of ${var1} and ${var2} =`, var1 - var2);
}

// 3) Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7. 
{
    let side1 = 5;
    let side2 = 6;
    let side3 = 7;

    let semiperimeter = (side1 + side2 + side3)/2;
    let area = Math.sqrt(semiperimeter*(semiperimeter - side1)*(semiperimeter-side2)*(semiperimeter-side3))
    console.log(area);

    // Same By Use of Function

    function heronsFormula(a,b,c){
        let s = (a+b+c)/2;
        let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
        console.log(area);
    }
    heronsFormula(side1,side2,side3)
}

// 4) Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then print triple their sum.
{
    let num1 = 12;
    let num2 = 12;

    function sumOfNum(a,b){
        let sum = 0;
        if(a==b){
            let total = a+b;
            sum = total * 3;
        }else{
            sum = a + b
        }
        console.log(sum);
    }

    sumOfNum(num1,num2)
}

// 5) Accept a number from a user and print it on console
{
    let userInput = prompt('Enter a Number :')
    console.log('Users Input is  ',userInput);
}

// 6) Ask a user his/her name and say hello (eg. "Hello Sarthak")
{
    let userName = prompt('Enter your name :');
    alert(`Hello, ${userName}`);
}

// 7) Accept two integers from user and print the sum
//    Ex - The sum of 45 & 12 = 57
{
    let num1 = parseInt(prompt('Enter first Integer'));
    let num2 = parseInt(prompt('Enter second Integer'));
    console.log(`The sum of ${num1} and ${num2} = `, num1 + num2);

}

//8) Accept the User's name, age and print in following manner
// Ex - Hello Shery, you are 12 years old.

{
    let userName = prompt("Enter your name");
    let userAge = parseInt(prompt("Enter your Age"));

    console.log(`Hello ${userName}, you are ${userAge} years old.`);

}