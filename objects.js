//Agenda:-
/*1.objects
2.this keyword
3.nested objects
4.deep copy & shallow copy */

//1.object:-object is a collection related data stored as key:value pairs
//example:-
/*let person={
    name:"kalyani",
    age:19,
    village:"sangam"
}
console.log(person)*/

//properties of objects:-
/* 1.dot notation:-when property name is known
   2.bracket notation:-when property name is stored in variable*/
//example:-
/*let person={
    name:"kalyani",
    age:19,
    village:"sangam"
}
console.log(person.name)//kalyani
console.log(person["age"])//19     */

//modify name:-
/*let person={
    name:"kalyani",
    id:23456,
    age:19,
    village:"sangam"
}
person.id=65879    
person.name="vijitha"
console.log(person)   */  


//we can create an object using object() also
//example:-
/*let car=new Object()
car.name="BMW",
car.brand="Tata",
car.price=1200000
console.log(car)
//add new property
car.color="black"
console.log(car)
//modify price
car.price=1300000
console.log(car)*/

//behaviours of an object:-it represents behaviour only use anynomus function 
//example:-
/*let person={
    name:"kalyani",
    id:23456,
    age:19,
    village:"sangam",
    walk:function(){
       console.log(person.name," is walking")
    },
    dance:function(){
        console.log(person.name,"is dancing")
    }
}
console.log(person)
person.dance()
person.walk()  */

//2.this keyword:-it refers to the current object
//example:-
/*let person={
    name:"kalyani",
    id:23456,
    age:19,
    village:"sangam",
    walk:function(){
       console.log(this.name," is walking")
    },
    dance:function(){
        console.log(this.name,"is dancing")
    }
}
console.log(person)
person.dance()
person.walk() */


//3.nested objects:-an object inside another object
//example:-
//1.
/*let person1={
    name:"kalyani",
    id:23456,
    age:19,
    village:"sangam",
    person2:{
    name:"vijitha",
    id:19875,
    age:20,
    village:"nellore",
    }
}
console.log(person1.name)//access outer object name
console.log(person1.person2.name)//access inner object name
console.log(person1.person2)//access inner object  
console.log(person1)//access outer object*/

//2.
//example:-
/*let user={
    name:"kalyani",
    age:19,
    village:"sangam",
    id:24567,
    college:{
        name:"SVCN",
        place:"Thirupati",
    dept:{
        name:"CSE",
        HOD:"prasad",
    }
}
}
console.log(user)
console.log(user.id)
console.log(user.college)
console.log(user.college.place)
console.log(user.college.dept)
console.log(user.college.dept.name)*/


//4. shallow copy & deep copy
//shallow copy:-copise only top level properties,so nested objects are shared original object.
//1.
// example:-
/*let person1={
    name:"kalyani",
    id:23456,
    age:19,
}
let person2=person1;
person2.name="vijitha"
person2.age=20;
console.log(person2)*/
//2.
//example:-
/*let car1={
    name:"BMW",
    brand:"Tata",
    price:120000,
    color:"black"
}
let car2=car1;
car2.color="red"
console.log(car2)*/

//deep copy:-copies all data including nested objects,change in copy do not effect to the original object 
//1.
/*let bike1={
    name:"scooty",
    brand:"Tata",
    price:15000,
    color:"red"
}
    let bike2={
        brand:bike1.brand,
        price:bike1.price,
        color:bike1.color
    }
    bike2.name="excel";

console.log(bike1.name)
console.log(bike2.name)*/

//2.
/*let person1={
    name:"kalyani",
    age:19,
    address:{
        doNo:234,
        village:"sangam",
        colony:"sainagar",
    }
}
let person2={
    name:person1.name,
    age:person1.age,
    address:{
        dono:person1.address.dono,
        village:person1.address.village,
        colony:person1.address.colony,

    }
}
person2.name="vijitha",
person2.age=20
console.log(JSON.stringify(person1))
console.log(person2)*/


//using structureclone
/*let person1={
    name:"kalyani",
    age:19,
    address:{
        doNo:234,
        village:"sangam",
        colony:"sainagar",
    }
}
let person2=JSON.stringify(structuredClone(person1))
console.log(person2)*/

//object.assign:-copies properties from one object to another.its also know as merge objects
/*let obj1={
    a:10,
}
let obj2={
    b:20
}
    let result={
    ...obj1,
    ...obj2
    }
   //console.log(result)//merge objects
Object.assign({},obj1,obj2)
console.log(result)*/


