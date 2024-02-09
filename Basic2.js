// Array -- Foreach, map, Filter

//Foreach is used to perform operations on every element of the arrays
{
    let arr =[1,2,3,4,5,6,7];
    arr.forEach(function(val){
        console.log(val);
    })
    
}

// Question1 . By use of foreach print hello in front of each elements of array 

{

    let arr = ['john','roman','batista']
    arr.forEach(function(vals){
        console.log(('Hello, '+ vals));
    })

}

// Question2.  Print all element of the array, but leave all those element who is greater than three

{
    let arr = [1,2,3,4,5,3,5,12,1,3,1,4];
    arr.forEach(function(e){
        if(e<=3){
            console.log(e);
        }
    })

    //Filter Returns in Form of new Array
    let newArr = arr.filter(function(e){
        if(e<=3){
            return e
        }
    })
    console.log(newArr);

    let sum = 0;
    arr.forEach(function(val){
        sum = sum + val;
    })
    console.log(sum);

}

//Find the Sum of array numerical element, skip if element is string 

{

    let arr = [1,2,3,'4',5,'abhishek']
    let sum = 0;
    arr.forEach(function(val){
        if(typeof val === "number"){
            sum += val;
        }
    });
    console.log(sum);
}

