const gpay = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({mode:"gpay",payment:500})
        }, 3000);
    })
}

const phonepay = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            //resolve({mode:"phonepe",payment:500})
            reject({mode:"phonepe",payment:500})
        }, 2500);
    })
}
const paytm = ()=>{

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({mode:"paytm",payment:500})
        }, 4000);
    })
}

const paynow = async()=>{



        try{
            const res = await Promise.race([gpay(),phonepay(),paytm()])
            console.log(res)
        }
        catch(err){
            console.log("err",err)
        }
        


}
paynow()