//call stack:-it is a data structure.it follows LAST-IN-FIRST-OUT manner that manages the function execution in javascript
//when function is called,it is pushed on to the stack
//when function is finishes the execution,it is popped from the stack
//for example
function first(){
    console.log("first")
}
function second(){
   first();
    console.log("second")
}
 //first();
second();


// execution context:-it is a collection of objects that are used to execute a piece of javascript code. it has 2 types they are,
//1.global execution context
//2.function execution context

//global exection context:-default exection context created for code that is outside of all functions.
//function execution context:-execution context created for code inside of the function.
// both has 2 phases they are,
//1.memory allocation 2.code execution
//memory allocation:-means memory is allocated to the variables and functions
//code execution:-means code execute line by line

//let see the complex code of both phases
function A(){
    function B(){
        console.log("this is B ")
    }
        console.log("this is A")
         B();
    function C(){
        function D(){
             console.log("this is D")
        }
        console.log("this is C")
        D();
    }
    
    C();
}
A();