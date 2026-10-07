//Agenda:-
//1.custom promise(resolve,reject)
//2.chaing promise
//3.API promise


//promise:-it is an object that repersents the future result of an Asynchronous operation
//promise states:-
//1.pending:-the operation is still runnaing
//2.fulfilled:-the operation completed successfully
//3.Rejected:-the operation failed

//why do we use it?
//to avoid the callback hell
//handle the Asynchronous code more easly

//promise methods:-
//1.promise.then()--->handles the successful result
//2.promise.catch()--->handles the errors

//syntax
/*let promise=new Promise((resolve,reject)=>{
    //Asyncronous code
    if(success){
        resolve("success")
    }else{
        reject("failed")
    }
})*/


//1.basic promise
/*let promise=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("data loaded successfully ")
    }else{
        reject("error loading data")
    }

})
promise.then((result)=>console.log(result)).catch((err)=>console.log(err))*/



//2.using setTimeOut():-
/*let promise=new Promise((resolve,reject)=>{
    let success=false;
    if(success){
        resolve("data loding...")
    }
    setTimeout(()=>{
        reject("error loading data")
    },3000)
})
promise.then((result)=>console.log(result)).catch((result)=>console.log(result))*/


//real life examples
//1.
/*function checkDrink(drink){
    return new Promise((resolve,reject)=>{
            if(drink==="tea"){
             resolve("tea ready!")
            }
            setTimeout(()=>{
                reject("sorry,tea is not ready")
            },2000)
        })
}
function generateBill(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("paid successfully")
        },500)
    })
}
checkDrink("tea")
.then((data)=>{
    console.log(data)
    return generateBill()
})
.then((bill)=>{console.log(bill)
    return "thank you"
})
.then((message)=>{
    console.log(message)
})
.catch((err)=>{
    console.log("error")
})*/

//without .then using await and async
//await pauses the execution of an asyc function untill the promise is resolved or rejected
//try and catch works like .then().catch in promises
/*async function orderTea(){
    try{
        let data=await checkDrink("tea")
        console.log(data)
        let bill=await generateBill(10)
        console.log(bill)
        console.log("thank you")
    }catch(err){
        console.log(err)
    }
}
orderTea();*/


//2.
//login->fetech profile->logout

/*function login(username){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                 if(username==="kalyani"){
                resolve("login successfully")
            }else{
                reject("invalid username")
            }
            },1000)
    })
}
function fetchProfile(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        resolve("profile loaded")
       },2000)
    })
}
function logout(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           resolve("logout")
        },3000)                             
    })
}
login("kalyani")
.then((data)=>{
    console.log(data)
    return fetchProfile()
})
.then((data)=>{
    console.log(data)
    return logout()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

//
// using await and asyc
async function profileLogin(){
    try{
    let userLogin=await login("kalyani")
    console.log(userLogin)
    let userProfile=await fetchProfile()
    console.log(userProfile)
    let userlogout=await logout()
    console.log(userlogout)
    }
    catch(err){
        console.log(err)
    }

}
profileLogin()*/


//3.
//Bank loan
/*function verifyDocument(documents){
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          if(documents===true){
            resolve("documents verified successfully")
          }else{
          reject("documents not verified")
          }
        },1000)
     })
} 
function approveLoan(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("loan is approved")
    },2000)
})
}
function transferAmount(){
     return new Promise((resolve)=>{
        setTimeout(()=>{
         resolve("amount transferred")
    },3000)
     })
}
verifyDocument(true)
.then((data)=>{
    console.log(data)
    return approveLoan()
})
.then((data)=>{
     console.log(data)
     return transferAmount()
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})

//using await and asyc
async function bankLone(){
   let verified=await verifyDocument(true)
   console.log(verified)
    let approved=await approveLoan()
    console.log(approved)
   let transferred=await transferAmount()
   console.log(transferred)
}
bankLone()*/



//4.food ordering
/*let menu=["biriyani","piza","burger","dosa"]
function foodDlivery(food){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(menu.includes(food)){
                resolve("food deliverd")
            }else{
                reject("food is not avaliable")
            }
        },1000);
    })
}
function payAmount(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payement successful")
        },1000)
    })
}
function orderConformation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("order is conformed")
        },1000)
    })
}
foodDlivery("biriyani")
.then((data)=>{
    console.log(data)
    return payAmount()
})
.then((data)=>{
    console.log(data)
    return orderConformation()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

//using async and await
async function delivery(){
     let food=await foodDlivery("biriyani")
     console.log(food)
     let amount=await payAmount(80)
     console.log(amount)
     let conformation=await orderConformation()
     console.log(conformation)
}
delivery()*/


//promise.all:-it executes multiple promises in parallel and return a single promise that resolves when all promises succed or rejects
//for example:-
//food ordering
/*let menu=["biriyani","piza","burger","dosa"]
function foodDlivery(food){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(menu.includes(food)){
                resolve("food deliverd")
            }else{
                reject("food is not avaliable")
            }
        },1000);
    })
}
function payAmount(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("payement successful")
        },1000)
    })
}
function orderConformation(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("order is conformed")
        },1000)
    })
}
Promise.all([
    foodDlivery("biriyani"),
    payAmount(),
    orderConformation()
])
.then((result)=>{
    console.log(result[0])
    console.log(result[1])
    console.log(result[2])
})
.catch((err)=>{
    console.log(err)
})*/



//API promises:-
/*function getUsers(){
let api="https://jsonplaceholder.typicode.com/users"
   return fetch(api)
   .then((response)=>response.json())

}
getUsers()
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})*/
