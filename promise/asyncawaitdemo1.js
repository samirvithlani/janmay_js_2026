const geenrateData = ()=>{

    console.log("generating data...");
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({id:1,name:"raj"})
        }, 3000);
    })

}

const printData = async()=>{


    //any function whoese return type is promise we can put await..
    var x = await geenrateData() //promise resolve | reject
    console.log(x.name)
    console.log("ok")

}

printData()