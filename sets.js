//set:-set is a data structure to store unique values
//if you try to enter the duplicates it will automatically deleted
//set can be store values of multiple datatypes
//methods of sets
/* 1.new Set()          create a new set
   2.add()              add the elements to the set
   3.has()              checks the value is exists
   4.delete()           delete a specified value of the set returns true/false
   5.clear()             clear all the values in a set returns undefined
   6.size               return size of the set
   7.values()           returns the values to the set
   8.keys()             a set has no keys,so,keys returns same as values()*/

//1.new Set():-
//example:
// let bikes=new Set();

//2.add():-
/*let bikes=new Set();
bikes.add(6)
bikes.add(7)
bikes.add("hello world")
bikes.add(true)
console.log(bikes)
console.log(Array.from(bikes))*/

//3.has():-
/*let names=new Set(["kalyani","vijitha","reshma","harshitha"]);
console.log(names.has("kalyani"))//true
console.log(names.has("sireesha"))//false */

//4.delete():-
/*let names=new Set([
    "kalyani",
    "vijitha",
    "reshma",
    "harshitha"
]);
console.log(names.delete("kalyani"))*/

//5.clear():-
/*let names=new Set([
    "kalyani",
    "vijitha",
    "reshma",
    "harshitha"
]);
console.log(names.clear())*/

//6.size:-
/*let names=new Set([
    "kalyani",
    "vijitha",
    "reshma",
    "harshitha"
]);
console.log(names.size)//4 */

//7.values():-
/*let names=new Set([
    "kalyani",
    "vijitha",
    "reshma",
    "harshitha"
]);
//console.log(Array.from(names.values()))
console.log(names.values())*/

//8.keys():-
/*let names=new Set([
    "kalyani",
    "vijitha",
    "reshma",
    "harshitha"
]);
console.log(Array.from(names.keys()))
console.log(nammes.keys())


//problem statement:-
//1.
//remove the duplicate in an given array using set
//one way:-
//[1,2,3,4,1,2,5,6,3]
/*let arr=[1,2,3,4,1,2,5,6,3]
function removeDuplicates(arr){
    let unique=new Set()
    for(let i=0;i<=arr.length-1;i++){
        unique.add(arr[i])
    }
    console.log(unique)
}removeDuplicates(arr)*/

//remove the duplicate in an given array using set
//second way:-
/*let nums=[1,2,3,4,1,2,5,6,3]
let unique=new Set()
function removeDuplicates(nums){
    for(let num of nums){
    unique.add(num)
}
}
removeDuplicates(nums)
console.log(unique)*/

//remove the duplicate in an given array using set
//third way:-
/*let nums=[1,2,3,4,1,2,5,6,3]
let unique=[...new Set(nums)]
console.log(unique)*/