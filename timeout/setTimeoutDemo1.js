console.log("line 1")

setTimeout(()=>{
    console.log("line 2")
},2000)


var count =0
var id = setInterval(()=>{
    count++
    console.log("interval..")
    if(count>5){
        clearInterval(id)
    }
},1000)

//00:00:00 --> get -->split
//start pause -->reset