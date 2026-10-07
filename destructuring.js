//destructuring:-it is a JS feature
//it is used to unpack values from arrays or objects in separate variables
//unpack means to extract the values from array/object
//withot destructuring accessing values individually
//with desructuring accessing values in a single statement

//advantages:-
//1.cleaner syntax
//2.less code
//3.easy extraction of values
//useful for the React

//for example:-
//without destructuring
/*let student={
    name:"kalyani",
    age:19,
    branch:"CSE"
}
console.log(student.name)
console.log(student.age)
console.log(student.branch)*/

//with destructuring:-
/*let student={
    name:"kalyani",
    age:19,
    branch:"CSE"
}
let{name,age,branch}=student;
console.log(name)
console.log(age)
console.log(branch)*/


//Array destructuring:-it is a process of unpack the values from an array
//syntax:-
//let[variable1,variable2]=array;

//example:-
/*let colors=["red","yellow","green"]
let[first,second,third]=colors
console.log(first)
console.log(second)
console.log(third)*/


//ignoring values:-skip the element using commas
/*let numbers=[1,2,4,5,6,7]
let[a,,c]=numbers;
console.log(a)
console.log(c)*/


//swapping:-variables decleration ends with semicolon
/*let x=10;
let y=20;
[x,y]=[y,x]
console.log(x)
console.log(y)*/


//default values:-
/*let number=[5];
let[a,b=6]=number;
console.log(a)
console.log(b)*/


//nested destructuring:-
/*let data=[1,[2,3],4]
let[a,[b,c],d]=data
console.log(a)
console.log(b)
console.log(c)
console.log(d)*/



//object destructuring:-it is a process of unpack the properties from an object
//syntax:-
//let{property}=object;

//example:-
/*let person={
    name:"kalyani",
    age:19,
    branch:"CSE",
    village:"sangam"
}
let{name,age,branch,village}=person;
console.log(name)
console.log(age)
console.log(branch)
console.log(village)*/


//renaming variables:using (:)
/*let person={
    name:"kalyani",
    age:19,
    branch:"CSE",
    village:"sangam"
}
let{name:newName,age:newAge,branch:course,village:city}=person;
console.log(newName)
console.log(newAge)
console.log(course)
console.log(city)*/


//default values:-using (=)
/*let person={
    name:"kalyani",
    branch:"CSE"
}
let{name,age=18,branch,village="sangam"}=person;
console.log(name)
console.log(age)
console.log(branch)
console.log(village)*/


//nested object destructuring:-
/*let person={
    name:"kalyani",
    branch:"CSE",
    address:{
        city:"nellore",
        pincode:34456
}
}
let{address:{city,pincode}}=person;
console.log(city)
console.log(pincode)*/