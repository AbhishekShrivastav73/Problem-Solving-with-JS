// CONDITIONALS STATEMENTS
//1) Accept two numbers and print the greatest between them
{
    let num1 = parseInt(prompt('Enter First Number:'))
    let num2 = parseInt(prompt('Enter Second Number:'))

    if(num1>num2){
        console.log(`${num1} is greatest`);
    }else{
        console.log(`${num2} is greatest`);
    }
}
//  2) Accept the gender from the user (M or F) and print the respective greeting message
//  Ex - Good Morning Sir (on the basis of gender)

// 3) Extend the previous program and handle the wrong inputs.
//       Print Good Morning sir for input m or M & Good morning Mam for input F or f 
//       else print Wrong Input

// Merged Both questions

{
    let gender = prompt('Enter your Gender :');
    let lowerCase = gender.toLocaleLowerCase();

    if(lowerCase == 'male'){
        console.log(`Good Morning Sir`);
    }else if(lowerCase == 'female'){
        console.log(`Good Morning Ma'aam`);
    }else{
        console.error('Wrong Input')
    }
}

//  4) Accept an integer and check whether it is an even number or odd.

{
    let integer = parseInt(prompt('Enter a Integer To check whether its is Odd or Even:'))
    if(integer%2==0){
        console.log(`The given integer is Even`);
    }else{
        console.log(`The given integer is Odd`);
    }

}

//  5) Accept name and age from the user. Check if the user is a valid voter or not.
// Vaid - Hello Shery, You are a valid voter.
// Invalid - Sorry Shery, you can't cast the vote.

// 6) extend preious program and Print after how many years the user will be eligible

// MergedUp
{
    let userName = prompt(`Enter your name :`)
    let userAge = parseInt(prompt(`Enter your Age :`));

    if(userAge<18){
        console.log(`Sorry ${userName}, you can't cast the Vote`);
        let timeLeft = 18 - userAge;
        console.log(`You Can cast the vote after ${timeLeft} years`);
    }else{
        console.log(`Hello ${userName}, you are a valid Voter.`);
    }

}

//  7) Write a JavaScript program to find the largest of three given integers.

{
    let n1= 82;
    let n2= 12;
    let n3= 78;

    function greatestInt(a,b,c){
        if(a>b && a>c){
            console.log(`The Greatest Integer is ${a}`);
        }else if(b>a && b>c){
            console.log(`The Greatest Integer is ${b}`);
        }else{
            console.log(`The Greatest Integer is ${c}`);
        }
    }

    greatestInt(n1,n2,n3)
}

// 8) ask a user his bijli ki units and if it is more than 100 unit calculate bill on the basis of 10 rs/ unit, if more than 50 units 8 rs/unit and if less 7 rs/unit
{
    let unit = parseInt(prompt('Enter Electricity Units :'))
    let bill = 0;
    if(unit>=100){
        bill = unit * 10;
    }else if(unit>=50 && unit<100){
        bill = unit * 8;
    }else{
        bill = unit * 7;
    }
    console.log(`Your Electricity Bill is : ${bill}`);
}

// 9) ask a user his salary and if it is more than 1 lakh 30% tax if more than 70k 20% tax and if more than 50k 10% tax and less than that no tax and print tax amount and amount left after paying tax
{
    let userSalary = parseInt(prompt("Enter your salary :"));
    let tax = 0;
    if(userSalary>=100000){
        tax = (userSalary * 30)/100;
    }else if(userSalary>=70000 && userSalary <100000){
        tax = (userSalary * 20)/100;
    }else if(userSalary>=50000 && userSalary<70000){
        tax = (userSalary * 10)/100;
    }else{
        tax = 0;
    }

    let amountAfterTax = userSalary - tax;
    console.log(`Tax Liability : ${tax}`);
    console.log(`Amount left after paying Tax : ${amountAfterTax}`);
}

// 10) Ask a user 3 sides of triangle and check
// 	equilateral triangle
// 	isosceles trianle
// 	scalene triangle

{
    let side1 = parseInt(prompt("Enter first side  of triangle :"))
    let side2 = parseInt(prompt("Enter second side  of triangle :"))
    let side3 = parseInt(prompt("Enter third side  of triangle :"))

    if(side1 == side2 && side2 == side3){
        console.log(`This is an Equilateral Triangle`);
    }else if(side1 == side2 || side1 == side3 || side2 == side3){
        console.log(`This is an Isoceles Triangle`);
    }else{
        console.log(`This is a Scalene Traingle`);
    }
}

// 11) Accept a year and check if it a leap year or not (google to find out what's a leap year)

{
    let year = parseInt(prompt(`Enter a year to Check whether it is a Leap Year or Not :`));

    if(year%4==0){
        console.log(`This is a Leap Year`);
    }else{
        console.log(`This is not a Leap Year`);
    }
}


// 11) You are given a variable marks. Your task is to print:
// 	- A+ if marks is greater than 90.
// 	- A if marks is greater than 80 and less than or equal to 90.
// 	- B+ if marks is greater than 70 and less than or equal to 80.
// 	- B if marks is greater than 60 and less than or equal to 70.
// 	- C if marks is greater than 45 and less than or equal to 60.
// 	- D if marks is greater than or equal to 33 and less than or equal to 45.
// 	- F if marks is less than 33.

{
    function getGrade(a){
        if(a>100){
            console.error('Invalid marks')
        }else if(a>90 && a<=100){
            console.log(`Grade : A+`);
        }else if(a>80 && a<=90){
            console.log(`Geade : A`);
        }else if(a>70 && a<=80){
            console.log(`Grade : B+`);
        }else if(a>60 && a<=70){
            console.log(`Grade : B`);
        }else if(a>45 && a<= 60 ){
            console.log(`Grade : C`);
        }else if(a>33 && a<=45){
            console.log(`Grade : D`);
        }else{
            console.log(`Grade : F`);
        }
    }

    getGrade(48)
}