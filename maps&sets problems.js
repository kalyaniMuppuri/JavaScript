/*if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }*/

//this code in single line
//map.set(num,(map.get(num)||0)+1)



//1.
//find the frequency of given numbers using Maps [1,2,1,3,2,1]
/*let numbers=[1,2,1,3,2,1]
 let map=new Map();
function findFrq(numbers){
   for(let num of numbers){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    console.log(map)
}
findFrq(numbers)*/


2.
//find the freqency of given string
/*let str="banana"
 let map=new Map();
function findFrq(str){
    for(let num of str){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
        console.log(map)
}
        findFrq(str)*/

//3
//find the first repeating character 
/*let str="abcaef"
function findReapiting(str){
    let map=new Map();
    for(let num of str){
        if(map.has(num)){
            map.set(num,(map.get(num)+1))
        }else{
            map.set(num,1)
        }
    }
    for(let num of str){
        if(map.get(num)>1){
            console.log(num)
            break;
        }
    }
}
findReapiting(str)*/

//4.
//find first non-repeating character
/*let str="aabbcdde"
function nonRepeating(str){
    let map=new Map();
    for(let num of str){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
   for(let [key,value] of map){
         if(value===1){
            console.log(key)//c,e
            //return key;c
         }
   }
}nonRepeating(str)*/

//5.
//count the frequency of given words
//find the frequency of given numbers using Maps ["apple","banana","apple","orange","banana","apple"]
/*let words=["apple","banana","apple","orange","banana","apple"]
function findFrq(words){
    let map=new Map();
    for(let word of words){
        if(map.has(word)){
            map.set(word,map.get(word)+1)
        }else{
            map.set(word,1)
        }
    }console.log(map)
}findFrq(words)*/


//6.
//remove the duplicates using set
//with function 
/*let numbers=[1,2,2,3,4,4,5]
function removeDuplicates(numbers){
    let unique=new Set();
    for(let key of numbers){
        unique.add(key)
    }
    console.log(unique)
}removeDuplicates(numbers)*/

//without function
/*let set=new Set();
let unique=[...new Set([1,2,2,3,4,4,5])]
console.log(unique)*/


//8.
//remove the uniques using set
//with function 
/*let numbers=[5,5,10,20,30]
function removeDuplicates(numbers){
    let unique=new Set();
    for(let key of numbers){
        unique.add(key)
    }
    console.log(unique)
}removeDuplicates(numbers)*/


//9.
//check if two arrays have common elements
/*let arr1=[1,2,3]
let arr2=[4,5,3]
function commonElements(arr1,arr2){
    let set=new Set(arr1);
for(let num of arr2){
    if(set.has(num)){
        return true;
    }
}
return false;
}
console.log(commonElements(arr1,arr2))*/


//10.
//find the intersection of two arrays
/*let arr1=[1,2,3,4]
let arr2=[3,4,5,6]
function findIntersection(arr1,arr2){
    let set=new Set(arr1)
    let result=[];
    for(let num of arr2){
        if(set.has(num)){
            result.push(num);
        }
    }return result;
}
console.log(findIntersection(arr1,arr2))*/

//11.
//find the most frequent number
/*let arr=[1,2,2,3,2,4]
function mostFrequent(arr){
    let map=new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    let max=0;
    let result;
    for(let [key,value] of map){
        if(value>max){
            max=value;
            result=key
        }
    }
    return result;
} 
console.log(mostFrequent(arr))*///output 2


//12.
//find the least frequent number
/*let arr=[1,1,2,2,3,4,4]
function leastFrequent(arr){
    let map=new Map();
    for(let num of arr){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    let min=Infinity;
    let result;
    for(let [key,value] of map){
        if(value<min){
            min=value;
            result=key
        }
    }
    return result;
} 
console.log(leastFrequent(arr))*/


//15.
//find the missing number 
/*let arr=[1,2,4,5]
let n=5
function findMissing(arr,n){
    let set=new Set(arr)
    let result=[]
    for(let i=1;i<=n;i++){
        if(!set.has(i)){
            result.push(i)
        }
    }return result
}
 console.log(findMissing(arr,n))*/

//16.
//count the distinct number
/*let arr=[1,1,2,2,3,4,4]
function countDistinct(arr){
    let set=new Set(arr)
    return set.size
}
console.log(countDistinct(arr))*/


//17.
//find the union of two arrays
/*let arr1=[1,2,3]
let arr2=[3,4,5]
function findUnion(arr1,arr2){
    let union=[...new Set([...arr1,...arr2])]
    console.log(union)
}
findUnion(arr1,arr2)*/


//18.
//find the difference between arrays
/*let arr1=[1,2,3,4]
let arr2=[3,4,5]
function findDifference(arr1,arr2){
    let set=new Set(arr2)
    let result=[]
    for(let num of arr1){
        if(!set.has(num)){
            result.push(num)
        }
    }return result;
}
console.log(findDifference(arr1,arr2))//1,2*/


//25.
//find the all pairs with give target

//using set
/*let nums=[1,2,3,4,5,6]
let target=7
let set=new Set();
function findTarget(nums,target){
    for(let num of nums){
        let value=target-num
        if(set.has(value)){
            console.log(value,num)
        }
        set.add(num,1)
    }
}findTarget(nums,target)*/

//using map
/*let nums=[1,2,3,4,5,6]
let target=7
let map=new Map();
function findTarget(nums,target){
    for(let num of nums){
        let value=target-num
        if(map.has(value)){
            console.log(value,num)
        }
        map.set(num,1)
    }
}findTarget(nums,target)*/


//29.
//symmetric difference
/*let arr1=[1,2,3,4]
let arr2=[3,4,5,6]
function mostFrequent(arr1,arr2){
    let map=new Map();
    for(let num of arr1){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    for(let num of arr2){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    for(let [key,value] of map){
        if(value===1){
            console.log(key)
        }
    }
}
     mostFrequent(arr1,arr2)//1,2,5,6*/


 //30.
 //count thefrequency/occurrences of multiple arrays    
/*let arr1=[1,2,3]
let arr2=[2,3,4]
let arr3=[3,4,5]
function mostFrequent(arr1,arr2,arr3){
    let map=new Map();
    for(let num of arr1){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    for(let num of arr2){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    for(let num of arr3){
        if(map.has(num)){
            map.set(num,map.get(num)+1)
        }else{
            map.set(num,1)
        }
    }
    
            console.log(map)
        }

     mostFrequent(arr1,arr2,arr3)*/






