
const calling =()=>{
    console.log("i am calling...")
}

const test =(x)=>{

    console.log("test called..")
    console.log(x)
    x() //calling... !!

}

// test(100)
// test("ok")
// test({})
// test([])
// test()
test(calling)