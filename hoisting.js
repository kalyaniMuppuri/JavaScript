//hoisting:- it is default behaviour of JS where all the variable declarations,function declarations and regular functions only moved to the top
//var-->hoisted with value undefined
//regular function-->completely hoisted

//example 1:-it prints undefined because var is hoisted
/*console.log(a)
var a=10;*/
//example 2:-does'nt through error because it is regular function
/*add(10,11)
function add(a,b){
  return a+b;
}*/
//example 3:-through error because it is anonymous function
/*add(20,17)
var add=function(a,b){
  return a+b;        
}*/


//Temporal dead zone:-the gap between variable's declaration and initilization
//example code:-
/*console.log(a)//referenceError

//gap

let a=10;

remember:-
var->no temporal dead zone but the value is undefined because it support the hoisting
let,const->temporal dead zone events 
int let and const declarations first and use later



//difference between var,let and const
//1.var is global scope and both let and const are local scope 
//accessing var any whare
//accessing let and const inside the function its not give the error

//example code is:
function scope(){
var a=10;
console.log(a)
}
scope()

function scope(){
    let a=5  
     console.log(a)     
   }
  scope()   

function scope(){    
    const a=9       
   console.log(a)   
}
scope()

//2.var is re-declared but both let and const are not re-decalred
var a=10       //no output
var a="true"

let b=4
let b="false"  //through error because b is already declared

const c=7
const c="true"  //through error because c is already declared


//3.var and let be re-assigned but const cannot be re-assigned
var d=6  //no output
d=26

let e=8 //no output
e=45

const f=23  //through error because const cannot be re-assigned
f=26


//4.var supports the hoisting 
// let suppot hoisting but they cannot be accessed before initilization because of the TDZ
 const suppot hoisting but they cannot be accessed before initilization because of the TDZ
 
console.log(a)
var a=3;//output is undefined

console.log(b) //through error because it is in TDZ
let b=3;

console.log(c) //through error because it is in TDZ
const c=4;*/
