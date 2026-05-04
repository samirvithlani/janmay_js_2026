
const links = [
    {id:1,url:"https://www.google.com",name:"google"},
    {id:1,url:"https://www.linkedin.com",name:"Linkedin"},
    {id:1,url:"https://www.facebook.com",name:"Facebook"},

]
const root =document.getElementById("root")
const button1 = document.createElement("button")
button1.innerHTML="Click Me"
button1.addEventListener("click",()=>{
    // alert("button click")
    for(let i=0;i<links.length;i++){
        var linktag = document.createElement("a")
        linktag.href = links[i].url
        linktag.innerHTML=links[i].name
        root.appendChild(linktag)
    }
})
root.appendChild(button1)