var lang =["Guj","Hindi","Eng","Marathi","Tamil"]

// for(let i=0;i<lang.length;i++){
//     console.log(lang[i])
// }

//void:
lang.forEach((l)=>{
    console.log(l)
})

//map
// var upperLang =[]
// for(let i=0;i<lang.length;i++){
//     upperLang.push(lang[i].toUpperCase())
// }
// console.log(upperLang)

// var upperLang = lang.map((l)=>{
//     return l.toUpperCase()
// })

//array
var upperLang = lang.map((l)=>l.toUpperCase())
console.log(upperLang);


var filtlang = lang.filter((l)=>l.length>4)
console.log(filtlang)


var marks = [23,18,24,21,24,25]
//manual approch by own
//

var flag = marks.some((mark)=>mark>=25)
console.log(flag)

var flag1 = marks.every((mark)=>mark>20)
console.log(flag1)
