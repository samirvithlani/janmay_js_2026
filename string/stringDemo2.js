var data = "ahmedabad"

var ind = data.indexOf("ah")
var indl = data.lastIndexOf("a")

console.log(`index= ${ind}`)
console.log(`index= ${indl}`)

var ind = data.indexOf("a",ind+1)
console.log(ind)


var flag = data.startsWith("ah") //endswith
console.log("falg",flag)


var email = "  samir@gmail.com   " //15+5 =20
console.log(email)
console.log(email.length)
//email = email.trim()
//email = email.trimStart()
//email = email.trimEnd()
console.log(email)
console.log(email.length)
