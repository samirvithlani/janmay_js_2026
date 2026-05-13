const gpay = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({mode:"gpay",payment:100})
        }, 3000);
    })
}

const phonepay = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve({mode:"phonepe",payment:200})
            reject({mode:"phonepe",payment:500})
        }, 2500);
    })
}
const paytm = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({mode:"paytm",payment:200})
        }, 4000);
    })
}

const paynow = async()=>{



        try{
            const [p,g,ph] = await Promise.all([paytm(),gpay(),phonepay()])
            console.log("paytm",p)
            console.log("phonepe",ph)
            console.log("gpay",g)
        }
        catch(err){
            console.log("err",err)
        }
        


}
paynow()