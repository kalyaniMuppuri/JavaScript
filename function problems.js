//1.
function product(num1,num2){
    console.log(num1*num2)
}
product(5,4)

//2.
function square(num){
    return num*num;
}
let result=square(5);
console.log(result)

//3.
 function greet(name){
    console.log("hello how are you doing "+name+"?")
}
greet("kalyani")

//4.write a function called sum() that takes two numbers and prints their addition 
function sum(a,b){
    console.log(a+b)
}
sum(10,5)

//5.write a function called multiply() that takes two numbers and return their product 

function multiply(a,b){
    return a*b
}
let result=multiply(4,6)
console.log(result)


//6.write a function called cube() that takes two number and returns its cube
function cube(num1,num2){
      let num=num1+num2
    return num*num*num
}
let result=cube(5,3)
console.log(result)


//7.write a function called fullname() that takes first name and last name and prints the full name. 
function fullname(firstname,lastname){
    console.log(firstname,lastname)
}
fullname("kalyani","muppuri") 


//8.write a function called isEven() that takes a number and prints whether it is even or odd
function isEven(num){
    if(num%2==0){
    console.log("even")
}else
{
    console.log("odd")
}
}
isEven(7)


//9.write a function called largest() that takes two numbers and prints the larger number
function largest(num1,num2){
    if(num1>num2){
        console.log(num1)
    }
    else{
    console.log(num2)
}
}
largest(5,6)


//10.write a function called areaOfRectangular() that takes length and breadth and returns the area.
function areaOfRectangular(length,breadth){
    let area=length*breadth
    return area
}
let total=areaOfRectangular(10,8)
 console.log(total)


//11.write a function called reverseMessage() that takes a string and prints in it reverse order.
function reverseMessage(name){
    let reversed=name.split('').reverse().join('')
    console.log(reversed)
}
reverseMessage("kalyani");







   

