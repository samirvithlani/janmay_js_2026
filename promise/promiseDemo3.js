
const foodSearch = ()=>{
    console.log("food search has been started")
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"pizza",rest:"dominos",price:200})    
        }, 3000);
        
    })
}


const zomato =()=>{
    console.log("welcome to Zomato")
    // x = foodSearch()
    // console.log(x)
    // x.then((data)=>{
    //     console.log(data);
        
    // })

    foodSearch().then((data)=>{
        console.log(data)
    }).catch((err)=>{
        console.log(err)
    })

}
zomato()