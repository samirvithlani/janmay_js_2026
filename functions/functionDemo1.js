function test(){
    console.log("test called..")
}

function add(a,b){
    console.log("called..")
    return a + b
}
test()

//var x = add(1,20)
var x = add(10,20)
console.log(x)

//arrow functions...
const test1 = ()=>{
    console.log("test1 called..")
}
test1()

// const add1 = (a,b,c)=>{
//     return a+b+c
// }
//single line
const add1 = (a,b,c)=>a+b+c
console.log(add1(10,20,30));


//?:

const findMax =(a,b)=>a>b ?a :b
console.log(findMax(100,20))