const box = document.getElementById("box")

document.getElementById("on").onclick=()=>{
    //console.log(box.classList)
    box.classList.add("active1")
}
document.getElementById("off").addEventListener("click",()=>{
    box.classList.remove("active1")
})
document.getElementById("toggle").addEventListener("click",()=>{
    box.classList.toggle("active1")
})