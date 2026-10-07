//Map:-In JavaScript Map is an object that can store collections of key-value pairs
//that keys can be of any data type
//map methods
//Method	       Description
/*new Map()  	   Creates a new Map object
set()	           adds key:value pair in a map
get()              Returns  the value of a specified key
clear()  	       Removes all the key:value pairs from the Map
delete()           Removes the specified key and its value from the map 
has()              Returns true if a key exists in a Map otherwise returns false
size()	           Returns the number of key:value pairs in a Map 
values()           Returns the values in an object
keys()             Returns the keys in an object            */


//1.
//new Map() Method

//Example
// Create a Map
//let fruits = new Map();

//2.
//Map.set():-key:value
//Example

/*let fruits= new Map()
fruits.set("apples", 500)
fruits.set("bananas", 300)
fruits.set("oranges", 200)
fruits.set("grapes",150)
console.log(fruits)*/

 
//3.
//Map.get(): it takes value
//Example
/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.get("apples"))//returns 500 */


//4.
//Map.size
/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.size)//returns 3 */


//5.
//Map.delete()
/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.delete("bananas"))//returns true
console.log(fruits.delete("grapes"))//returns false because it is not in array*/

//6.
//Map.clear()
//Example

/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.clear())//it returns undefined */


//7.
//Map.has()
//Example

/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.has("apples"))*/


//8.values()
//Example
/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.values())//returns MapIterator {500, 300, 200}
console.log(Array.from(fruits.values()))//returns (3) [500, 300, 200] */



//9.keys()
//Example
/*let fruits= new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);
console.log(fruits.keys())//returns MapIterator {apples, bananas, oranges}
console.log(Array.from(fruits.keys()))//returns (3) ['apples', 'bananas', 'oranges']*/




//11.one way without loop
//remove the duplicates in an array
/*let numbers=[1,2,3,3,4]
let unique=new Map()
unique.set(1,true)
unique.set(2,true)
unique.set(3,true)
unique.set(3,true)
unique.set(4,true)
console.log(Array.from(unique.keys()))
console.log(unique)*/

// returns (4) [1, 2, 3, 4]
// returns Map(4) {size: 4, 1 => true, 2 => true, 3 => true, 4 => true}

//second way with loop
//remove the duplicates in an array
/*let numbers=[1,3,3,5,7,7,4,3,8,2,2,1,1,6,7,5,5]
let unique=new Map()
for(let num  of numbers){
    unique.set(num,true)
}
console.log(Array.from(unique.keys()))
//returns (8) [1, 3, 5, 7, 4, 8, 2, 6]*/


//12.
//we need to develop an application where user can enter the phone number and contact details
/*let contacts=new Map();
function addcontact(name,phoneNumber){
    contacts.set(name,phoneNumber)
} 
function getContact(name){
    if(contacts.has(name)){
        console.log("phone number is",contacts.get(name))
    }else{
        console.log("no contacts found with this number")
    }
}
function deleteContact(name){
    if(contacts.has(name)){
        console.log(name,"has been deleted")
    }
}
addcontact("kalyani",56478949)
addcontact("vijitha",23456789)
addcontact("reshma",45689324)
getContact("reshma")
deleteContact("vijitha")*/


//12.
//Build  product catalog
/*let products=new Map();
function addProduct(id,type,price,desc){
    products.set(id,type,price,desc)
}
function getProduct(id){
    if(products.has(id)){
        console.log(products.get(id))
    }
}
addProduct(101,"Electronics",20000,"mobile")
addProduct(102,"fashion",2000,"dresses")
addProduct(103,"fashion",1000,"shirts")
getProduct(101)
getProduct(102)
getProduct(103)*/