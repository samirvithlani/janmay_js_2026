
console.log("line 1")
const promise =new Promise((resolve,reject)=>{
    //resolve("promise has been resolved..")
    setTimeout(() => {
        resolve("promise has been resolved..")
    }, 3000);
})
console.log(promise)

promise.then((data)=>{
    console.log(data)
})
promise.catch((err)=>{
    console.log("error..")
})

// console.log("end")