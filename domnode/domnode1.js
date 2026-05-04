var username = "janmay"
document.getElementById("text").innerHTML=username
var users = ["amit","sumit","jay","raj","parth"]


const root = document.getElementById("root") //<div>

//dynamic tag

const h1tag = document.createElement("h1") //<h1></h1>
h1tag.innerHTML="Hello I am dynamic h1"
root.appendChild(h1tag)

for(let i=0;i<users.length;i++){
    const nameh2 = document.createElement("h2") //<h2></h2>
    nameh2.innerHTML = users[i] //<h2>amit</h2>
    root.appendChild(nameh2) //<div><h2></h2></div>
}