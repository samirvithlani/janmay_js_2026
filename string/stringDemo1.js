// '' - "" --> immutable

var user = "amit" // array -->index [a][...]
console.log(user)
console.log(user[0])
user[0]="A"
console.log(user)

// '\0'
console.log(user.length)
//unicode A->65 a->97 space 32

console.log("unicode",user.charCodeAt(0))
//String class
console.log("code...>?",String.fromCharCode(65))
console.log(String.fromCharCode(user.charCodeAt(0)-32))

//copy
var a = "raj"
var b = a
console.log(b)

//>reverse..

var userName = "jay"
var revuser = ""

for(let i=userName.length-1;i>=0;i--){
    //console.log(userName[i])
    revuser = revuser + userName[i]
}
console.log("reverse..",revuser);

//small -->janmay ->cap..



