//var is having glob scope


var x =100
console.log("value of x outside block =",x)

{
    console.log("value of x inside block =",x)
    var y =200
    console.log("valud of y inside block= ",y)
}
console.log("valud of y outside block= ",y)


let a = 100
console.log("value of a outsdie block = ",a)
{
    console.log("value of a inside block = ",a)
    let b = 200
    console.log("valud of b inside block..= ",b)
}
console.log("valud of b outside block..= ",b)

//const is having scope