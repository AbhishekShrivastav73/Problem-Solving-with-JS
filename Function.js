// 1) Create a function named greet that takes a name as an argument and prints a greeting message to the console.
{

    function greet(name){
        console.log(`Good Morning, ${name}`);
    }
    greet('abhi');
}

// 2)  Write a function called square that takes a number as a parameter and returns its square.
{
    function square(num){
        return num * num;
    }

    console.log(square(2));

}

// 3) Create a function named isEven that takes an integer as an argument and returns true if it's even and false if it's odd.
{
    function isEven(n){
        if(n%2==0){
            return true;
        }else{
            return false;
        }
    }

    console.log(isEven(5));
}

// 4) Create a function named countDown that takes a positive integer as a parameter and prints a countdown from that number to 1.

{
    function countDown(n){
        for (let index = n; index > 0; index--){
          console.log(index);
        }
    }

    countDown(10)
}

