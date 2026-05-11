const getOrder  =()=>{

    const promise = new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve("order has been placed !!")
        }, 3000);
    })

    return promise
}


var p = getOrder()
console.log(p)
p.then((data)=>{
    console.log(data)
})
