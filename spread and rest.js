//Spread operator:-it is used to expands the elements of an array or object properties
//it is used in:
//copy array
//merge array
//copy objects
//merge objects

//advantages:-
//easy copying
//easy merging
//cleaner syntax

//syntax:- ...value

//spread with arrays:-
//example:-
/*let arr1=[1,2,3,4]
console.log(...arr1)*/

//copying arrays
/*let arr1=[1,2,3,4]
let arr2=[...arr1]
arr2.push(5)
console.log(arr1)
console.log(arr2)*/
/* output:
(4) [1, 2, 3, 4]
(5) [1, 2, 3, 4, 5]*/

//merge arrays
/*let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
let arr3=[...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)*/

//adding elements
/*let nums=[2,3]
let result=[1,...nums,4,5]
console.log(result)*/

//spread with an object
/*let person={
    name:"kalyani",
    age:19
}
let person1={
    ...person,
    course:"CSE"
}
console.log(person1)*/
/*output:-
{name: 'kalyani', age: 19, course: 'CSE'} */

//merge objects
/*let person={
    name:"kalyani",
    age:19
}
let person1={
    course:"CSE"
}
let person2={
    ...person,
    ...person1
}
console.log(person2)*/


//passing array as function arguments
/*let nums=[2,3]
function add(a,b){
    console.log(a+b)
}
add(...nums)*/




//Rest operator:-it is used to collect the multiple values into a single value
//it is opposite of the spread operator
//syntax:- ...variable

//Rest in function parameter
/*function add(...nums){
    total=0;
    for(let num of nums){
        total+=num
    }
    console.log(total)
}
add(3,4,5)*/



//Rest with destructuring
/*let nums=[1,2,3,4,5,6]
let[a,b,...renaming]=nums;
console.log(a)
console.log(b)
console.log(renaming)*/


//Rest with objects
/*let person={
    name:"kalyani",
    age:19,
    branch:"CSE"
}
let{name,...others}=person;
console.log(name)
console.log(others)*/


//Rules:-
//must be the last element is destructuring
//only one rest element
/*correct:
function test(a,b,...rest)
incorrect:
function test(...rest,a,b)*/




//Spread vs Rest
//Spread:-
/*let arr=[1,2,3]
console.log(...arr)

//Rest:-
function show(...nums){
    console.log(nums)
}
show(1,2,3)*/




//Real Word example:-
/*let person={
    name:"kalyani",
    age:19,
    course:"CSE"
}
let{name,...details}=person;//rest destructuring
let updatedPreson={
    ...details,
    city:"nellore"
}
console.log(name)
console.log(updatedPreson)*/