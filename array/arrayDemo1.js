var a =[10,20,30,40,55,67,89]

console.log(a)
//console.table(a)

a[0]=100
console.log(a)

//===============
a.push(77)
console.log(a)
var removedelm = a.pop()
console.log("removing...",removedelm)
console.log(a)

a.unshift(44)
console.log(a)
a.shift()
console.log(a)
