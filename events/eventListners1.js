const btn = document.querySelector("#btn")
console.log(btn)
btn.addEventListener("click",()=>{
    btn.innerHTML="CLICKED"
})
btn.addEventListener("mouseenter",()=>{
    btn.style.backgroundColor = "green"
})
btn.addEventListener("mouseleave",()=>{
    btn.style.backgroundColor = "yellow"
})