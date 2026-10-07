//Array methods:-array functions are the built in methods used to perform opreations on arrays
//it can be classified several types but here the most impotant array methods are,
//1.map()
//2.filter()
//3.reduce()
//4.find()
//5.forEach()

//difference between forEach() and map():-forEach() is simillar to the map().but the difference is
// 5.forEach():- is used to iterate over the elements an array but not return new array.where tha map() also iterate over the elements an array but it returns new array.
//for example:-
//map():-
/*let str=[1,2,3,4,5]
let result=str.map((num)=>num*2)
console.log(result)*/

//forEach():-creating an array
/*let arr=[1,2,3,4,5]
let result=arr.forEach((num)=>num*2)
console.log(result)*///return undefined because we can create new array

//not creating an array
/*let arr=[1,2,3,4,5]
arr.forEach((num)=>{
    console.log(num*2)
})*/

//1.map():-map is used to iterate over the elements an array and return a new array
//example:-
//1.
/*let nums=[1,2,3,4,5,6]
let mapMethod=nums.map((num)=>num*2)
console.log(mapMethod)*/

//2.
/*let nums=[1,2,3,4,5,6]
let mapMethod=nums.map((num)=>num+5)
console.log(mapMethod)*/

//3.
//given array of objects extract the property from objects
/*let users=[
    {id:1,name:"kalyani"},
    {id:2,name:"siri"},
    {id:3,name:"resh"},
]
names=users.map((user)=>user.name);
console.log(names)*/

//given an array elements return the squares of each element only positive numbers squares otherwise return original number

//one way:-
/*let arrayNumbers=[1,2,-1,7,10,-8]
squares=arrayNumbers.map((arrayNumber)=>arrayNumber>0?arrayNumber*arrayNumber:arrayNumber)//condition?value-if-true:value-if-false(terinary operator)
console.log(squares)*/

//another way:-
/*let arrayNumbers=[1,2,-1,7,10,-8]
squares=arrayNumbers.map((arrayNumber)=>{
    if(arrayNumber>0){
        console.log(arrayNumber*arrayNumber)
    }else{
        console.log(arrayNumber)
    }
})*/


//2.filter():- it is used to filter/select elements based on condition
//example:-
//1.
/*let nums=[1,2,3,4,5,6]
let filterMethod=nums.filter((num)=>num%2!==0)
console.log(filterMethod)*/

//2.
/*let nums=[1,2,3,4,5,6]
let filterMethod=nums.filter((num)=>num<5)
console.log(filterMethod)*/


//print the names is price greaterthan 40000
/*let products=[
    {name:"laptop",price:50000},
    {name:"tablet",price:15000},
    {name:"headphones",price:60000},
    {name:"phone",price:45000},
]
//result=products.filter((product)=>product.price>40000).map((product)=>product.name)
console.log(result)*/

//3.reduce():-it is used to reduce any array into a single value(sum,product,avg,maximum,minimum,frq count,etc)
//it will takes accumalate value and current value
//accumalate value means it returns the final result after processing of an array 
//syntax:-
// let nums=[1,2,3,4,5]
/*let result=nums.reduce((acc,cuur)=>{
    acc+curr
},0)*/
//example:-
//1.sum
/*let nums=[1,2,3,4,5,6]
let reduceMethod=nums.reduce((acc,num)=>acc+num,0)
console.log(reduceMethod)*/

//product
/*let nums=[1,2,3,4,5,6]
let reduceMethod=nums.reduce((acc,num)=>acc*num,0)
console.log(reduceMethod)*/

//3.average
/*Average=sum of all numbers /total count of numbers*/
/*let nums=[1,2,3,4,5,6]
let reduceMethod=nums.reduce((acc,num)=>(acc+num))/nums.length
console.log(reduceMethod)*/


//4.
//find():-it is used to find the first maching element then it returns a single value
//example:-
//1.
/*let nums=[1,2,3,4,5,6]
let findMethod=nums.find((num)=>num>5)
console.log(findMethod)*/


//2.print the name and price is greaterthan 40000
/*let products=[
    {name:"laptop",price:50000},
    {name:"tablet",price:15000},
    {name:"headphones",price:60000},
    {name:"phone",price:45000},
]
let result=products.find((product)=>product.price>40000)
console.log(result)*/


//forEach():-it is used to iterate over the elements of an array
//in this find method cannot be create a new array
//example:-
/*let nums=[1,2,3,4,5,6]
nums.forEach((num)=>{
    if(num%2==0)
console.log(num)
})*/

//print ranks is age greaterthan 18
/*let students=[
    {id:1,name:"kalyani",age:16,rank:9},
    {id:1,name:"harshi",age:25,rank:20},
    {id:1,name:"rekha",age:15,rank:18},
    {id:1,name:"reshma",age:21,rank:25},
    {id:1,name:"siri",age:22,rank:9},
    {id:1,name:"vijitha",age:20,rank:29},
]
/*for(let i=0;i<student.length;i++){
    if(student[i].age>18){
        console.log(student[i])
    }
}*/
/*students.forEach((student)=>{
   if(student.age>18){
    console.log(student.rank)
   }
})*/

//example:-
/*let names=["kalyani","siri","vijitha","harshi"]
names.forEach((name)=>console.log(name.toUpperCase()))*/



//Rest opreator:-collect multiple values in an single array
//where we used:-
//it is used to collect multiple function arguments into a single array

1.
/*function add(...args){
       return args.reduce((acc,curr)=>acc+curr,0)
}
console.log(add(2,4,6))*///12

/*function add(...args){
      return args.reduce((a,b)=>a+b)
}
console.log(add(2,4,6))*///12

2.
/*let obj1={
    name:"kalyani",
    age:19,
    village:"sangam",
    roll:"sde",
}
let{name,...otherDetails}=obj1
console.log(name)
console.log(otherDetails)*/


//spread opreator:-it is used inside arrays and objects
//expand an array or object into individual values
/*let num1=[1,2,3,4]
let num2=[5,6,7,8]
let result=[...num1,...num2]
console.log(result)*/

//create an nested object the this object move to the another new object using spread oprator
/*let obj1={
    name:"kalyani",
    age:19,
    village:"sangam"
}
let obj2={
    roll:"sde",
    
}
let obj3={...obj1,...obj2}
console.log(obj3)*/

//1.
//all methods see in one program
/*let numbers=[10,20,30,40,50]
let mapMethod=numbers.map(num=>num*2)
let filterMethod=numbers.filter(num=>num%3===0)
let reduceMethod=numbers.reduce((acc,num)=>acc+num)
let findMethod=numbers.find(num=>num>40)
numbers.forEach((num)=>(num%2===0)&&console.log(num))
console.log(numbers)
console.log(mapMethod)
console.log(filterMethod)
console.log(reduceMethod)
console.log(findMethod)*/

//2.
/*let names=["kalyani","reshma","vishnu","vijitha","harshi","vahidha"]
let mapMethod=names.map(num=>num.toUpperCase())
let filterMethod=names.filter(num=>num.startsWith("v"))
let reduceMethod=names.reduce((acc,num)=>acc+","+num)
let findMethod=names.find(num=>num==="kalyani")
names.forEach((name)=>{
    if(name.endsWith("i"))
        console.log(name)

    })
console.log(names)
console.log(mapMethod)
console.log(filterMethod)
console.log(reduceMethod)
console.log(findMethod)*/

