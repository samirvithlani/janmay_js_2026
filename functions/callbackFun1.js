//function as object

function test (){

    console.log("test called...")
    return 100
}

// var x = test()
// console.log("x - ",x)
var x = test // no error -->test ->objcet ->x
console.log("x - ",x) //  x will act as test function
var ans = x()
console.log("ans ",ans)