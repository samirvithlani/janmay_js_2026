
const paytm =(amount)=>{
    console.log("pay via paytm.. amount ",amount)
    return "ok"
}

const phonepe =(amount)=>{
    console.log("pay via phonpe..amount",amount)
    return "ok"
}

const gpay =(amount)=>{
    console.log("pay via gpay..amount ",amount)
    return "ok"
}


const paynow =(cb,amount)=>{

    console.log("paying now...")
    //cb(1000) //
    cb(amount)
}

//choic...
//paynow(gpay)
var amount =1200
var choice = "gpay"

if(choice=="gpay"){
    paynow(gpay,amount)
}

else if(choice=="phonepe"){
    paynow(phonepe,amount)
}