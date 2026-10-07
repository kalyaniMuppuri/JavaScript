//level 1:forEach()
1.
//print each fruit
/*let fruits=["apple","banana","mange","orange"]
fruits.forEach((fruit)=>{
    console.log(fruit)
})*/

2.
//print each number multiply by 2
/*let numbers=[2,4,6,8]
numbers.forEach((number)=>{
    console.log(number*2)
})*/

3.
//print index and value
/*let colors=["red","blue","green"]
colors.forEach((color,index)=>{
    console.log(index,color)
})*/

//level 2:map()
4.
//create a new array containing the square of each number
/*let numbers=[1,2,3,4,5]
let square=numbers.map((number)=>number*2)
console.log(square)*/

5.
//convert all names to upperCase()
/*let names=["john","emma","alex"]
let result=names.map((name)=>name.toUpperCase())
console.log(result)*/

6.
//extract only names
/*let user=[
    {id:1,name:"kalyani"},
    {id:2,name:"reshma"},
    {id:3,name:"vijitha"}
]
let result=user.map((name)=>name.name)
console.log(result)*/


//level 3:filter()
7.
//return only even numbers
/*let numbers=[3,6,9,12,15,18]
let even=numbers.filter((num)=>num%2==0)
console.log(even)*/

8.
//return users older than 25
/*let users=[
    {name:"john",age:22},
     {name:"emma",age:30},
      {name:"alex",age:27},
]
let result=users.filter((name)=>name.age>25)
console.log(JSON.stringify(result))*/

9.
//find words longer than 5 letters
/*let words=["apple","banana","cat","elephant"]
let longer=words.filter((word)=>word.length>5)
console.log(longer)*/

//level 4:find()
10.
//find the first number greater than 50
/*let numbers=[10,20,55,60,70]
let result=numbers.find((num)=>num>50)
console.log(result)*/

11.
//find the user with id 3
/*let users=[
    {id:1,name:"john",age:22},
     {id:2,name:"emma",age:30},
      {id:3,name:"alex",age:27},
]
let result=users.find((num)=>num.id==3)
console.log(result)*/

12.
//find the first product that costs more than 500
/*let products=[
    {name:"mouse",price:300},
    {name:"keyboard",price:800},
    {name:"monitor",price:1200},
]
let result=products.find((product)=>product.price>500)
console.log(result)*/

//level 5:reduce()
13.
//find sum
/*let numbers=[5,10,15,20]
let total=numbers.reduce((num,sum)=>num+sum,0)
console.log(total)*/

14.
//find the largest number
/*let numbers=[12,45,7,90,34]
let number=numbers.reduce((a,b)=>a+b,0)
let largest=Math.max(...numbers)
console.log(number)
console.log(largest)*/

15.
//count total characters
/*let words=["cat","elephant","dog"]
let count=words.reduce((a,b)=>a+b.length,0)
console.log(count)*/

16.
//convert the object into an array
/*let users=[
    {id:1,name:"john",age:22},
     {id:2,name:"emma",age:30},
      {id:3,name:"alex",age:27},
]
let result=users.reduce((a,b)=>{
    //a[b.id]=b.name
        a[b.id]={name:b.name.age:b.age}
    return a
},{})
console.log(JSON.stringify(result))*///output{"1":"john","2":"emma","3":"alex"}


//challange exercrises:-
//1.get the students who passed(marks>=50)
//2.return their only names
//3.count how many passed
1.
/*let students=[
    {name:"kalyani",marks:90},
    {name:"harshi",marks:45},
    {name:"rekha",marks:80},
    {name:"reshma",marks:30}
]
let result=students.filter((student)=>student.marks>=50)
let names=students.filter((student)=>student.marks>=50).map((student)=>student.name)
let count=students.filter((student)=>student.marks>=50).length
 console.log(JSON.stringify(result))
 console.log(names)
 console.log(JSON.stringify(count))*/
 
/* output:-[{"name":"kalyani","marks":90},{"name":"rekha","marks":80}]
           (2) ['kalyani', 'rekha']
             2*/



//challenge 2:-             
//1.find the order with id 3
//2.get the all orders above 200
//3.caculate total amount
/*let orders=[
    {id:1,amount:120},
    {id:2,amount:450},
    {id:3,amount:300},
    {id:4,amount:100},
]
let result=orders.find((order)=>order.id===3)
let all=orders.filter((order)=>order.amount>200)
let total=orders.reduce((sum,order)=>sum+order.amount,0)
console.log(result)
console.log(JSON.stringify(all))
console.log(total)*/
/* output:- {id: 3, amount: 300}
            [{"id":2,"amount":450},{"id":3,"amount":300}]
             970 */



//challenge 3:-
//1.increse every salary by 10%
//2.return employees earning more than 55000 after the raise
//3.find the employee either heighest salary
//calculate the total payroll

/*let employees=[
    {name:"john",salary:40000},
    {name:"emma",salary:60000},
    {name:"alex",salary:50000},
    {name:"sophia",salary:80000},
]
let increse=employees.map((employee)=>({
    name:employee.name,
    salary:Math.round(employee.salary*1.1)
}))
let raise=increse.filter((employee)=>employee.salary>55000)
let highest=increse.reduce((a,b)=>b.salary>a.salary?b:a)
let payroll=increse.reduce((a,b)=>a+b.salary,0)
console.log(JSON.stringify(increse))
console.log(JSON.stringify(raise))
console.log(highest)
console.log(payroll)*/
/* output is:-

[{"name":"john","salary":44000},{"name":"emma","salary":66000},{"name":"alex","salary":55000},{"name":"sophia","salary":88000}]
[{"name":"emma","salary":66000},{"name":"sophia","salary":88000}]
{name: 'sophia', salary: 88000}
253000*/


//challenge 4:-
//1.print every product name
//2.create an array of product prices
//3.filter only avaliable products
//4.find the product with id 2
//5.calculate the total value of the products
//6.calculate the total amount of only avaliable products

/*let products=[
    {id:1,name:"laptop",price:70000,inStock:true},
    {id:2,name:"mouse",price:800,inStock:false},
    {id:3,name:"keyborad",price:1500,inStock:true},
    {id:4,name:"monitor",price:12000,inStock:true},
]
products.forEach((product)=>console.log(product.name))
let prices=products.map((product)=>product.price)
let avaliable=products.filter((product)=>product.inStock)
let findvalue=products.find((product)=>product.id===2)
let total=products.reduce((sum,num)=>sum+num.price,0)
let sum=products.filter((product)=>product.inStock).reduce((sum,num)=>sum+num.price,0)
console.log(prices)
console.log(JSON.stringify(avaliable))
console.log(findvalue)
console.log(total)
console.log(sum)*/
/*output is:-
laptop
mouse
keyborad
monitor
(4) [70000, 800, 1500, 12000]
[{"id":1,"name":"laptop","price":70000,"inStock":true},{"id":3,"name":"keyborad","price":1500,"inStock":true},{"id":4,"name":"monitor","price":12000,"inStock":true}]
{id: 2, name: 'mouse', price: 800, inStock: false}
84300
83500*/



