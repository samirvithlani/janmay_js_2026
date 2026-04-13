var lang =["Guj","Hindi","Eng","Marathi","Tamil"]

console.log(lang)
lang.splice(1,1) //goto first index and remove elm
console.log(lang)

lang.splice(2,0,"Telugu")
console.log(lang)

lang.splice(3,1,"Kannada","Bhojpuri")
console.log(lang)