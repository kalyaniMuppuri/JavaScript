//level 1:-
//1.
//create a student object access all values
/*let student={
    name:"sindu",
    age:25,
    course:"javascript"
}
console.log(student.name)
console.log(student.age)
console.log(student.course)*/

//2.
//create a student object access all values using dot notation and bracket notation
/*let car={
    brand:"Toyota",
    model:"camry",
    year:2023
}
console.log(car.brand)
console.log(car.model)
console.log(car.year)
console.log(car["brand"])
console.log(car["model"])
console.log(car["year"])*/

//3.
//add the new propety of an given object 
/*let employee={
    name:"john",
    age:30
}
employee.department="IT"//adding property
console.log(employee)*/

//4.
//ubdate the property of given array
/*let product={
    name:"laptop",
    price:50000
} 
product.price=55000;
console.log(product)*/

//5.
//delete property of given object
/*let user={
    name:"Alex",
    age:28,
    city:"Delhi"
}
delete user.city
console.log(user)*/

//level 2:-
//6.
//in given object using greet() and this keyword 
/*let person={
    name:"sindhu",
    greet(){
        console.log("hello",this.name)
    }
}
person.greet()*/

//8.calculator object using add(),sub(),mul()
//
/*let a=10
let b=5
let calculator={
 add(a,b){
    console.log(a+b)
 },
 Sub(a,b){
    console.log(a-b)
 },
 Mul(a,b){
    console.log(a*b)
}
}
calculator.add(a,b)
calculator.Sub(a,b)
calculator.Mul(a,b)*/

//8.
//create an employee object use showDtails()and this
/*let employee={
    name:"john",
    salary:50000,
    showDetails(){
        console.log("name",":",this.name)
        console.log("salary",":",this.salary)
    }
}
employee.showDetails()*/

//9.
//identify output
/*let person={
    name:"john",
    greet(){
        console.log(this.name)
    }
}
person.greet()
//output:john*/

//10.
//arrow function and this  using given object
/*let person={
    name:"john",
    greet:()=>{
        console.log(this.name)
    }
}
person.greet()
//output:-undefined because arrow functions do not create their own this*/

//level 3:-
//11.
//access the nested property
/*let employee={
    name:"john",
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
console.log(employee.address.city)
console.log(employee.address.state)*/

//12.
//deeply nested object
/*let user={
    profile:{
        contact:{
            email:"abc@gmail.com"
        }
    }
}
console.log(user.profile.contact.email)*/

//13.
//add the nested property in given object location is added
/*let company={
    name:"ABC",
location:{
        city:"chennai"
    }
}
console.log(JSON.stringify(company))*/

//14.
//ubdate nested property i.e,city
/*let student={
    address:{
        city:"mumbai"
    }
}
student.address.city="pune"
console.log(student.address.city)*/

//15.
//multiple nested levels print phone number
/*let customer={
    details:{
        contact:{
            phone:"999999999"
        }
    }
}
console.log(customer.details.contact.phone)*/

//level 4:-
//object utility methods
//1.object.keys()
//2.object.values()
//3.object.entries()

//16.
//
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
console.log(Object.keys(person))*/

//17.
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
console.log(Object.values(person))*/

//18.
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
console.log(JSON.stringify(Object.entries(person)))*/

//19.
//check the property exsistence
/*let person={
    name:"john"
}
console.log("name" in person)
console.log("age" in person)*/

//20.
//count the properties of given object
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
console.log(Object.entries(person).length)*/

//21.
//print keys using for in i.e,loops
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
for(let key in person){
    console.log(key)
}*/

//22.
//print keys-value pairs using for in in an object
/*let person={
    name:"john",
    age:30,
    city:"delhi"
}
for(let key in person){
    console.log(key,person[key])
}*/

//23.
//destructuring of given object
/*let person={
    name:"john",
    age:30,
}
let{name,age}=person;
console.log("name",":",name)
console.log("age",":",age)*/

//24.
//rename destructuring
/*let person={
    name:"kalyani",
}
let{name:userName}=person;
console.log(userName)*/


//25.
//nested destructuring
/*let employee={
    address:{
        city:"hyderabad"
    }
}
let{
    address:{city}}=employee;
console.log(city)*/


//level 6:-
//26.
//copy object using spread method
//spread:-it is used to to spread/extend the elements of an attay or object
/*let person={
    name:"john",
    age:30
}
person1={...person}
console.log(person1)*/

//27.
//copy object using spread method and adding property
/*let person={
    name:"john",
    age:30
}
person1={...person}
person1.city="delhi"
console.log(person)
console.log(person1)*/

//28.
// given object override a property using spread oprator
/*let user={
    name:"john",
    age:30
}
let age={
   ...user,
    age:35
}
console.log(age)*/

//29.
//merge objects using spread method
/*let obj1={
    name:"john",
}
let obj2={
    age:30,
}
let result={
    ...obj1,
    ...obj2
}
console.log(result)*/


//30.
//pridict the output
/*let obj1={
    a:1,
}
let obj2={
    a:2,
    ...obj1
}
console.log(obj2.a)//output:1 */


//level 7:-
//31.
//shollow copy issue
/*let user={
    name:"john",
    address:{
        city:"hyderabad"
    }
}
let copy={...user}
copy.address.city="chennai"
console.log(user.address.city)*/ //output chennai

//32.
//deep copy using structuredclone
/*let obj1={
    name:"john",
    age:30
}
let obj2={
    name:obj1.name,
    age:obj1.age

}
obj2.name="rahul";
console.log(structuredClone(obj2))*/

//33.
//campare objects
/*let obj1={
    name:"john",
}
let obj2={
    name:"john"
}

console.log(obj1===obj2)//output is false because different reference */


//34.
//same reference
/*let obj1={
    name:"john",
}
let obj2=obj1

console.log(obj1===obj2)//output is true because reference/address same*/


//35.
//identify the copy type
/*let copy1={...obj}//shollow copy
let copy2=structuredClone(object)//deed copy */


//level 8:-
//interview coding questions
//36.
//sum of object values
/*let add={
    a:10,
    b:20,
    c:30
}
let sum=add.a+add.b+add.c;
console.log(sum)*/

//37.
//find the largest value
/*let marks={
    math:85,
    science:92,
    english:78
}
console.log(Math.max(...Object.values(marks)))*/


//38.
//convert object to array
/*let person={
    name:"john",
    age:30
}
console.log(JSON.stringify(Object.entries(person)))*/


//39.
//count the all nested properties
/*let user={
    name:"john",
    address:{
        city:"hyderabad",
        state:"telangana"
    }
}
let count=4
console.log(count)*/

//40.
//flatten object of an given object
//flatten objects:- mean all nested objects combine a single object
/*let obj={
    user:{
        name:"john"
    }
}
let result={
    "user.name":obj.user.name
}
console.log(result)//output is "user.name":"john"*/



//advanced topics:-
//41.
//using freeze()method
//it returns output no change of the original object
 


//42.
//deep equality check


//43.
//find the property path exist or not
/*let user={
    profile:{
        contact:{
            email:"abc@gmail.com"
        }
    }
}
console.log(!!user.profile.contact.email)//!! maeans that email are exist are not */


//44.
//remove the property from nested object
/*let obj={
    user:{
        name:"john",
       age:30,
    }
}
delete obj.user.age
console.log(JSON.stringify(obj))*/