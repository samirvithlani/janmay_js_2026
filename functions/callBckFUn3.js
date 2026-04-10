
const paytm =()=>{
    console.log("pay via paytm..")
}

const phonepe =()=>{
    console.log("pay via phonpe..")
}

const gpay =()=>{
    console.log("pay via gpay..")
}


const paynow =(cb)=>{

    console.log("paying now...")
    cb()
}

//choic...
paynow(gpay)