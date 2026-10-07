1.
//print numbers from 1 to N
//input N=5
//for loop:-
/*let N=5
for(let i=1;i<=N;i++){
    console.log(i)
}*/
//while loop:-
/*let N=5
let i=1
while(i<=N){
    console.log(i)
    i++
}*/
//do-while loop:-
/*let N=5
let i=1
do{
    console.log(i)
    i++
}while(i<=N)*/


2.
//print numbers in reverse from N to 1
//for loop:-
/*let N=1
for(let i=5;i>=N;i--){
    console.log(i)
}*/
//while loop:-
/*let N=1
let i=5
while(i>=N){
    console.log(i)
    i--
}*/
//do-while loop:-
/*let N=1
let i=5
do{
    console.log(i)
    i--
}while(i>=N)*/


3.
//given an array to print the sum of all elements
//[10,20,30,40]
//for loop:-
/*let sum=0
let arr=[10,20,30,40]
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
     
}console.log(sum)*/
   

//while loop:-
/*let arr=[10,20,30,40]
let sum=0
let i=0
while(i<arr.length){
    sum+=arr[i]
    i++
}console.log(sum)*/

//do-while loop:-
/*let arr=[10,20,30,40]
let sum=0
let i=0
do{
    sum+=arr[i]
    i++
}while(i<arr.length)
    console.log(sum)*/


4.
//given string, count the number of vowels (a,e,i,o,u)present in it.
/*let string="javascript"
let count=0
for(let i=0;i<string.length;i++){
    if("aeiou".includes(string[i])){
    count++
    }
} console.log(count)*/

//while loop:-
/*let str="javascript"
let c=0
let i=0
while(i<str.length){
    if("aeiou".includes(str[i])){
    c++
    }
    i++
}
console.log(c)*/
//do-while loop:-

/*let str="javascript"
let c=0
let i=0
do{
   if("aeiou".includes(str[i])){
    c++
    }
    i++ 
}while(i<str.length)
    console.log(c)*/


5.
//print array of fruits using for of loop
//fruits=["Apple","Banana","Mango","Orange"]
/*let fruits=["Apple","Banana","Mango","Orange"]
for(let value of fruits){
    console.log(value)
}*/


6.
//given an object representing a student print each key and its value in the format:
//key:value
//input:
/*{
name:"sindhu",
age:22,
city:"nellore"
}*/
/*let student={
    name:"sindhu",
    age:22,
    city:"nellore"
}
for(let key in student){
    console.log(key,":",student[key])
} */


7.
//given an array of numbers find and print the first even number.stop the loop immediately after finding it.
//[11,15,21,18,24,30]
/*let arr=[11,15,21,18,24,30]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
        break;
    }
}*/


//Challenge Exercises:-
8.
//reverse a string
//for loop:-
/*let str="Frontend"
for(let i=str.length-1;i>=0;i--){
    let rev=str.split("").reverse().join("")
     console.log(rev)
}*/

//without loop
/*let str="Frontend"
let rev=str.split("").reverse().join("")
    console.log(rev) */   

    
9.
//count the positive numbers [-5,10,-2,8,0,15]
/*let arr=[-5,10,-2,8,0,15]
count=0
for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
        count++
    }
}console.log(count)*/


/*let arr=[-5,10,-2,8,0,15]
c=0;
let i=0
while(i<arr.length){
    if(arr[i]>0){
        c++
    }
    i++

}console.log(c)*/

/*let arr=[-5,10,-2,8,0,15]
c=0;
let i=0;
do{
    if(arr[i]>0){
        c++
    }
    i++;
}while(i<arr.length)
console.log(c)*/


10.
//print every alternative numbers
//[10,20,30,40,50,60,70]
/*let arr=[10,20,30,40,50,60,70]
for(let i=0;i<arr.length;i+=2){
    console.log(arr[i])
}*/

//while loop:-
/*let arr=[10,20,30,40,50,60,70]
let i=0
while(i<arr.length){
    console.log(arr[i])
    i+=2
}*/

//do-while loop:-
/*let arr=[10,20,30,40,50,60,70]
let i=0
do {
    console.log(arr[i])
     i+=2
} 
while (i<arr.length)*/


11.
//given a number check if the number is prime or not
//prime:-A prime number is number that is divisible only by 1 and itself
//example code:-
//for loop:-
/*let n=10
let c=0//how many time s to count of given number
for(let i=0;i<=n;i++){
    if(n%i==0){
        c++
    }
}
if(c==2){
        console.log("prime")
}
    else{
        console.log("not prime")
    }*/

//while loop:-        

/*let n=7
let i=0
let c=0
while(i<=n){
    if(n%i==0){
        c++
    }
    i++
}
if(c==2){
        console.log(n+" "+"prime")
}
    else{
        console.log(n+" "+"not prime")
    }*/

//do-while loop:-       
 /*let n=9
  let i=0
  let c=0
  do{
    if(n%i==0){
    c++
  } 
  i++
}while(i<=n)
    if(c==2){
        console.log(n+" "+"prime")
}
    else{
        console.log(n+" "+"not prime")
    }*/

12.
//print the sum of 1 to 100 using loops
//for loop:-
/*let sum=0
for(let x=0;x<=100;x++){
    sum+=x
} 
console.log(sum)*/ 

//while loop:-
/*let i=1
let sum=0
while(i<=100){
    sum+=i
    i++
}
console.log(sum)*/

//do-while loop:-
/*let i=1
let sum=0
do{
    sum+=i
    i++
}
while(i<=100)
console.log(sum)*/
  

13.
//count the even numbers of given array
//for loop:-
/*let nums=[20,24,45,43,26,13]
let c=0
for(let i=0;i<=nums.length;i++){
    if(nums[i]%2==0){
        c++
    }
}
console.log(c)*/

//while loop:-
/*let nums=[20,24,45,43,26,13]
let i=0
let c=0
while(i<nums.length){
    if(nums[i]%2==0){
        c++
    }
    i++
}
console.log(c)*/

//do-while loop:-
/*let nums=[20,24,45,43,26,13]
let i=0
let c=0
do{
    if(nums[i]%2==0){
        c++
    }
    i++
}
while(i<nums.length)
    console.log(c)*/
