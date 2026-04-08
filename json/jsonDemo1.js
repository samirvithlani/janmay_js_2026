//student  10 id name emaol age.......

var student ={
    id:1,
    name:"raj",
    age:23,
    status:"Active",

    address:{
        city:"ahmedabad",
        state:"Guj",
        pincode:"380052"
    }
}
console.log(student)
console.log(student.id)
console.log(student.name)
console.log(student.age)
console.log(student.city)
console.log(student.address)
console.log(student.address.city)

console.log(student)
//add filed

student.marsk = 100
console.log(student)
// ... spread operaotr
student = {...student,bloodGroup:"A+",age:25}
console.log("....",student)