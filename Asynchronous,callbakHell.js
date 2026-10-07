//Asynchronous:-asynchronous function is a function where tasks can start now finish later without blocking the main thread 
//it is independent
//it is used in API calls,timers,reading files
//setTImeOut():-it is web API that executes a function or piecce of code once after specified time delay.
// it accepts any callback function either arrow function or normal function.

//example:-
/*console.log("start")
setTimeout(()=>{
    console.log("hi")
},1000)
setTimeout(()=>{
    console.log("hello")
},2000)
setTimeout(()=>{
    console.log("how are you")
},3000)*/


/*console.log("start")
setTimeout(function (){
    console.log("hi")
},1000)
setTimeout(function (){
    console.log("hello")
},2000)
setTimeout(function (){
    console.log("how are you")
},3000)*/

/*function timer(){
    setTimeout(()=>{
       console.log("time up!")
    },1000)

    }
    timer();
    console.log("hello")*/



//callbacks:-a function passed as an argument to the another function
/*function calculator(msg1,msg2,opration){
    opration(msg1,msg2)
}
function add(a,b){
    console.log(a+b)
}
function product(a,b){
    console.log(a*b)
}
calculator(4,5,add)
calculator(4,5,product)*/


//callback hell:-it is a nested of multiple callbacks inside one another,making the code hard to read and maintain
/*setTimeout(()=>{
    console.log("hi")
    setTimeout(()=>{
        console.log("how are you")
        setTimeout(()=>{
            console.log("what are you doing")
        },1000)
    },1000)
},1000)*/
//why it is called callback hell?
//because one callback inside another callback,and that callback is inside another callback.it creates a pyramid shaped code that becomes difficult to read,debug, and maintain
//why it is problem?
//dificult to read
//dificult to debug
//dificult to maintain