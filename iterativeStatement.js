// ITERATIVE STATEMENTS

// 1) Accept an integer and Print hello world n times
{
    let integer = parseInt(prompt("Number of time you want to print, Hello! World"));

    for(let i = 1; i<=integer;i++){
        console.log(`Hello! World`)
    }
}

// 2) Print natural number up to n. 
{
    function printNaturalNo(a){
        console.log(`Natural Number Upto ${a}`);
        for(let i = 1;i<=a;i++){
            console.log(i);
        }
    }

    printNaturalNo(22);
}
// 3) Reverse for loop. Print n to 1.
{
    function rev(a){
        console.log(`Reversed Loop`);
        for(let i =a;i>=1;i--){
            console.log(i);
        }
    }

    rev(10)
}

// 4) Take a number as input and print its table
    //    5 * 1 = 5
    //    5 * 2 = 10 ... up to 10 terms
    {
        // we can also take input from the users by the prompt method
        let number = 5;
        for(let i=1;i<=10;i++){
            console.log(`${number} * ${i} = `,number * i);
        }
    }

// 5) Sum up to n terms.
{
    function sum(e){
        let total=0;
        for(let i = 1;i<=e;i++){
            total = total + i;
        }
        console.log('The Sum is',total);
    }

    sum(20)
}

// 6) Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Sheryians" instead of the number and for multiples of five print "coding". For numbers multiples of both three and five print "Sheryians coding school".
{
    for(let a=1; a<=100;a++){
        if(a%3==0){
            console.log('Sheryians');
        }else if(a%3==0 && a%5==0){
            console.log(`Coding`);
        }else if(a%5==0){
            console.log(`Sheryians Coding School`);
        }else{
            console.log(a);
        }
    }
}

// 6) Factorial of a number
{
    let num = 12;
    let fact = 1;
    if(num==1){
        fact=1
    }else{
        for(let i =1;i<=num;i++){
            fact = fact*i
        }
    }

    console.log(`Factorial of ${num} is`, fact);
}

// 8) Print the sum of all even & odd numbers in a range seperately.
{
    let range = 100;
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for(let i=1;i<=range;i++){
        if(i%2==0){
            sumOfEven += i;
        }else{
            sumOfOdd += i;
        }

    }
    console.log(`Sum of Odd Numbers in the Range is ${sumOfOdd}`);
    console.log(`Sum of Even Numbers in the Range is ${sumOfEven}`);
}

// 9) Print all the numbers which are either divisible by 3 or 5 in a range 

{
    let range = 50;
    for(let i=0;i<=range;i++){
        if(i%3==0 || i%5==0){
            console.log(i);
        }
    }
}

// 10) Print all the factors of a number.
{
    let num = 50;
    console.log(`Factors of ${num}`);
    for(let i = 1;i<=num;i++){
        if(num%i==0){
            console.log(i);
        }
    }
}
// 11) Print the sum of all factors of a number, 50 - 1 + 2 + 5 + 10 + 25 = 43
{
    let num = 50;
    let sum = 0;
    console.log(`Sum of Factors of ${num}`);
    for(let i = 1;i<=num;i++){
        if(num%i==0){
           sum+=i;
        }
    }
    console.log(sum);
}

// 12)  Accept a number and check if it a perfect number or not.
    //   A number whose sum of factors(excluding number itself)  = Number 
    //   Ex -  6 = 1, 2, 3 = 6
{
    let num = 496;
    let sum = 0;
    // console.log(`Sum of Factors of ${num}`);
    for(let i = 1;i<num;i++){
        if(num%i==0){
           sum+=i;
        }
    }
    if(num==sum){
        console.log(`${num} is a Perfect Square`);
    }else{
        console.log(`${num} is not a Perfect Square`);
    }
    
}
// 13) ask a user an string and a number and addon the string n number of times (if number is 3 and string is "hey" print "heyheyhey")
{
    let userStr = prompt('Enter String')
    let nth = parseInt(prompt('Number of times want to add string'));
    let str = userStr;
    for(let i = 1;i<nth;++i){
        str +=userStr;
    }
    console.log(str);
}

// 14) Seprate each digit of a number and print it on the new line

{
    let num = 123456789;
    let str=  num.toString()
    console.log(typeof str);

    let ar = str.split('')
    ar.forEach(function(elem){
        console.log(elem);
    })
}
// 15) Check if the number is Prime or not.
{
    let num = 13;

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