// console.log("line 1")

// setTimeout(() => {
//     console.log("line 2");
// }, 2000);

// console.log("line 3")

const searchFood = ()=>{

    setTimeout(() => {
            console.log("food search complate..");
            
    }, 6000);
}

const cart = ()=>{
    setTimeout(() => {
        console.log("food has been added to cart")
    }, 1000);
}

const paynow = ()=>{
    setTimeout(() => {
            console.log("payment has been done");
            
    }, 3000);
}


const delivery = ()=>{
    setTimeout(() => {
        console.log("food has been deliver..");
        
    }, 5000);
}

searchFood()
cart()
paynow()
delivery()