//Loops:-loops are used to run the code multiple times until the condition satisfied. types:-
//1.for loop
//2.while loop
//3.do-while loop
//4.for in
//5.for of

//for loop:- A for loop runs the code a specific number of times
//syntax:-
/*for(initilization;condition;increment/decrement){
    //code
}*/

//problems:-
/*1.
//print numbers from 1 to 10 using for loop
for(let i=1;i<=10;i++){
    console.log(i)
}

2.
//print numbers in reverse order from 1o to 1 using for loop
for(let i=10;i>=1;i--){
    console.log(i)
}

3.
//print numbers from 1 to 10 in even numbers using for loop
for(let i=2;i<=10;i+=2){
    console.log(i)
}

4.
//print numbers from 1 to 10 in odd numbers using for loop
for(let i=1;i<=10;i+=2){
    console.log(i)
}

5.
//given array print the all numbers double using for loop
let nums=[1,2,3,4,5]
for(let i=0;i<nums.length;i++){
    nums[i]=nums[i]*2
    console.log(nums)
}

6.
//given array print only odd numbers using for loop
let nums=[2,4,7,10,9]
for(let i=0;i<nums.length;i++){
    if(nums[i]%2!==0){
        console.log(nums[i])
    }
}


//while loop:-a while loop runs the code again and again until the condition becomes false
//syntax:-
/*while(condition){
  //code
  increment/decrement
}*/

//problems:-

/*1.
//print numbers from 1 to 10 using while loop
let i=1
while(i<=10){
    console.log(i)
    i++
}

2.
//print numbers in reverse order from 10 to 1 using while loop
let i=10
while(i>=1){
    console.log(i)
    i--
}

3.
//print numbers from 1 to 10 in even numbers using while loop
let i=2
while(i<=10){
    console.log(i)
    i+=2
}

4.
//print numbers from 1 to 10 in odd numbers using while loop
let i=1
while(i<=10){
    console.log(i)
    i+=2
}

5.
//given array print all the numbers double using while loop
let nums=[1,2,3,4,5]
let i=0
while(i<nums.length){
    console.log(nums[i]*2)
    i++
}

6.
// given array print only odd numbers using while loop
let numbers=[2,4,7,10,9]
let i=0
while(i<numbers.length){
    if(numbers[i]%2!==0){
        console.log(numbers[i])
    }
    i++
}*/

//do-while loop:-it is same as while loop, but this loop execute the code atleast once
//syntax:-
/*d0{
  //code
  increment/decrement
}
  while(condition)*/

//problems:-
/*1.
//  print from 1 to 5 numbers using do while loop
let i=1
do{
    console.log(i)
    i++
} while(i<=5)

2.
//  print numbers in reverse order from 5 to 1 numbers using do while loop
let i=5
do{
    console.log(i)
    i--
} while(i>=1)

3.
//print even numbers from 1 to 10 using d0-while loop
let i=0
do{
    
    console.log(i)
    i+=2
    }
while(i<=10)

4.
//print odd numbers from 1 to 10 using d0-while loop
let j=1
do{
    console.log(j)
    j+=2
    }
while(j<=10)

5.
//given array print all the numbers double using d0-while loop 
let nums=[1,2,3,4,5]
let i=0
do{
    nums[i]=nums[i]*2
    console.log(nums)
    i++
}while(i<nums.length)

// given array print only odd numbers using do-while loop
let numbers=[2,4,7,10,9]
let j=0
do{
    if(numbers[j]%2!==0){
        console.log(numbers[j])
    }
    j++
}
while(j<numbers.length) 


//for in:-for in is used to iterate over the properties of an object
//syntax:-
/*for(let key in object){
   //code
}*/
//example code:-
/*let person={
    name:"kalyani",
    village:"sangam",
    age:19
}
for(let key in person){
    console.log(key)
}

let person1={
    name:"kalyani",
    village:"sangam",
    age:19
}
for(let key in person1){
    console.log(key,":",person1[key])
}

//for of:-for of is used to iterate over the values of an array or string 
let numbers=[10,20,30,40,50]
for(let value of numbers){
    console.log(value)
}                             
*/
