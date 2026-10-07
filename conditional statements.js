//conditional statements:-it is used to execute different blocks of code based on condition either it is true or false

//there are 3 types
//1.if    2.else if   3.else

//if statement:-this statement tests the condition then executes the block of code when condition is true
//example code is
let person={
name:"kalyani",
age:20
}

function checkEligibility(person){
    if(person.age>18){
        console.log(person.name+" "+"eligible for vote")
    }

}
checkEligibility(person)


//else statements:-it is also tests the condition then executes the block of when condtion is true otherwise else block is executed 
//example code:-
let person1={
name:"kalyani",
age:20
}
let person2={
name:"radha",
age:17
}
function checkEligibility(person){
    if(person.age>18){
        console.log(person.name+" "+"eligible for vote")
    }
    else{
        console.log(person.name+" "+"not eligible for vote")
    }

}
checkEligibility(person1)
checkEligibility(person2)

//else if statement:-in this statement execute one condition from multiple statements
//example code:-
/function checkMarks(marks){
    if(marks>90){
        console.log("A grade")
    }
    else if(marks>80){
        console.log("B grade")
    }
    else if(marks>70){
        console.log("C grade")
    }
    else{
        console.log("fail")
    }
}
checkMarks(85)

//problem statement:-given number
//positive even--->number>0 and number%2==0
//positive odd--->number>0 and number%2!==0
//negitive even--->number<0 and number%2==0
//negitive odd--->number<0 and number%2!==0
//else zero
function checkNumber(num){
    if(num>0 && num%2==0){
        console.log("positive even")
    }
    else if(num>0 && num%2!==0){
        console.log("positive odd")
    }
    else if(num<0 && num%2==0){
        console.log("negitive even")
    }
 
    else if(num<0 && num%2!==0){
        console.log("negitive odd ")
    }
else{
    console.log("zero")
}
}
checkNumber(2)
checkNumber(5)
checkNumber(-8)
checkNumber(-9)
checkNumber(0)


