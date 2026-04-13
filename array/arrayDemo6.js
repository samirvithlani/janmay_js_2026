var users = [
  { id: 1, name: "amit", age: 23, salary: 23000 },
  { id: 2, name: "raj", age: 26, salary: 33000 },
  { id: 3, name: "parth", age: 24, salary: 43000 },
  { id: 4, name: "jayu", age: 28, salary: 55000 },
  { id: 5, name: "neha", age: 22, salary: 12000 },
];


var userName = users.map((u)=>u.name)
console.log(userName)

var userNameid = users.map((u)=>{
    return {id:u.id,name:u.name.toUpperCase()}
})
console.log(userNameid)

//get id name and salary and bonus --> salary 50%
