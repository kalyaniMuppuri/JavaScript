//1.//
function price(S,C){
    if(S>C){
        console.log("profit")
    }
    else if(C>S){
        console.log("loss")
    }
}
price(150,100)
price(150,200)


//2.//
function person(rating){
    if(rating>=2100){
        console.log("grand master")
    }
    else if(rating>=1990){
        console.log("candidate master")
    }
    else if(rating>=1600){
        console.log("expert")
    }
    else if(rating>=1400){
        console.log("pupil")
    }
    else{
        console.log("newbie")
    }

}
person(2200)
person(1750)
person(1450)
person(1300)

//3.//

function number(A,B,C){
    if(A<B && A<C){
        console.log("smallest number is:"+A)
    }
    else if(B<A && B<C){
        console.log("smallest number is:"+B)
    }
    else{
        console.log("smallest number is:"+C)
    }

}
number(5,10,20)
number(-3,-7,2)
number(15,15,8)


//4.//
function A(value){
    if(value%5==0 && value%11==0){
        console.log("Yes")
    }
    else{
        console.log("No")
    }
}
A(55)
A(110)
A(25)
A(121)


//5.//
let N=5
function checkNumber(nummber){
     if(number%3==0 && number%5==0){
        console.log("FizzBuzz")
    }
    else if(number%3==0){
        console.log("Fizz")
    }
    else if(number%5==0){
        console.log("Buzz")
    }
    else{
        console.log("N")
    }
}
checkNumber(15)
checkNumber(9)
checkNumber(20)

