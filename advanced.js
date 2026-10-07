//Agenda:-
//1.higher order function
//2.what are call backs
//3.what are clousers
//4.what are call,apply and mind
//5.template literals
//6.default parameters
//7.what are the Es6 features

//1.higher order function:-a function which takes another function as a argument
//examples of higher order function
//1.map()
//2.filter()
//3.reduce()
//4.find()
//array functions are the higher order functions because it accept callback function as an argument
//why do we use it?
//1.cleaner code
//2.shorter code
//3.to perform operations on arrays
//4.to avoid the repeating code

//examples:-
//1.
/*function greet(fn){
    fn();
}
    function sayHello(){
        console.log("hello")
    }
    function sayGoodMorning(){
        console.log("good morning")
    }

greet(sayHello)
greet(sayGoodMorning)*/
//in the above example greet is a higher order function

//2.
/*function calculator(val1,val2,operation){
    operation(val1,val2)
}
function add(a,b){
console.log(a+b)
}
function product(a,b){
    console.log(a*b)
}
calculator(4,5,add)
calculator(4,5,product)*/
//in the above example calculator is a higher order function
//add and product functiona are callback functions


//2.callback functions:-it is a function that is passing as an argument to the another function
/*function add(a,b){
console.log(a+b)
}
function product(a,b){
    console.log(a*b)
}
function calculator(val1,val2,operation){
    operation(val1,val2)
}
calculator(4,5,add)
calculator(4,5,product)*/


//3.clousers():-clouser is a function that can be access variables from outer function even after the outer function has finished executing
/*function outer(){
    let x=10;

function inner(){//clouser
    console.log(x)
}
return inner
}
let newFun=outer()
newFun()*/

/*function outer(){
    let x=10;

function inner(){
    let y=20
    console.log(x)
    console.log(y)
}
return inner;
}
let result=outer();
result();*/

//4.
//1.call():-it is used to re-refer the this keyword in one object to another object
//1.
/*let person={
    name:"kalyani",
    age:19,
    greet:function(){
        console.log(this.name,this.age)
    }
}
let person2={
    name:"reshma",
    age:21
}
person.greet.call(person2)*/

2.
/*let person={
    name:"kalyani",
    age:20,
    greet:function(msg1,msg2){
         console.log("hi,i am ",this.name,msg1,msg2)
    }
}
let person2={
    name:"vijitha"

}
person.greet.call(person2,"how are you","what are the plans")*/

//2.apply():-it is same as call() but the difference the arguments passed as array 
/*let person={
    name:"kalyani",
    age:20,
    greet:function(msg1,msg2){
         console.log("hi,i am ",this.name,msg1,msg2)
    }
}
let person2={
    name:"vijitha"

}
person.greet.apply(person2,["how are you","what are the plans"])*/


//3.bind:-it is same as call() the only difference is it returns a new function with a specific this value,without executing it immediatetly
/*let person={
    name:"kalyani",
    age:20,
    greet:function(msg1,msg2){
         console.log("hi,i am ",this.name,msg1,msg2)
    }
}
let person2={
    name:"vijitha"

}
let newFun=person.greet.bind(person2,"how are you","what are the plans")
newFun();*/




//this can be used outside of the object by using call(),apply(),and bind()
/*let person={
    name:"kalyani",
    age:20,
}
function sayHello(msg1,msg2){
     console.log("hi,i am ",this.name,msg1,msg2)
    }
let person2={
    name:"vijitha"

}
sayHello.apply(person,["how are you","what are the plans"])
sayHello.call(person2,"how are you","what are the plans")*/






//5.template literals:-these are the strings written using brackets and expression using ${}
//using backticks not using single/double quotations
//1.
/*let name="kalyani";
let age=19;
console.log(`i am ${name},and i am ${age} years old`)*/


//2.
/*function person(name){
    console.log(`hi, i am ${name},how are you?`)
}
 person("kalyani")*/


//6.default parameters:-it is a function parameters that take a predefined value
//1.
/*function person(name="kalyani"){
    console.log(`hi, i am ${name},how are you?`)
}
 person()*/



//7.what are the Es6 features
//stands for ECMASCRIPT 6
//let,const
//arrow functtions,anonymous functions
//template literals
//default parameters
//object destructurind,array destructuring
//spread operator,rest operator
//forEach,map,filter,reduce,find