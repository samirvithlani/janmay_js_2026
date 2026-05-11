const foodSearch = () => {
  console.log("food search has been started");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "pizza", rest: "dominos", price: 200, qty: 3 });
    }, 3000);
  });
};

const addTocart = (food) => {
  console.log("add to cart process starts...");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        ...food,
        message: "food has been added to cart",
        total: food.price * food.qty,
      });
    }, 2000);
  });
};

const payment = (amount)=>{

    console.log("payment started..");
    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({tid:Math.floor(Math.random()*1000),amount:amount,status:"success"})
        }, 3000);
    })
}

const zomato = () => {
  console.log("welcome to Zomato");
  // x = foodSearch()
  // console.log(x)
  // x.then((data)=>{
  //     console.log(data);

  // })

  foodSearch()
    .then((data) => {
      console.log(data);
      addTocart(data).then((cart) => {
        console.log("cart..", cart);
        payment(cart.total).then((paymentData)=>{
            console.log(paymentData)
        }).catch((err)=>{
            console.log(err)
        })
      }).catch((err)=>{
        console.log("cart error..",err)
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
zomato();
