const getData =()=>{
    const text = document.getElementById("text3")
    console.log(text.value)
    const output = document.getElementById("output")
    output.innerText = text.value
}

const checkEmail =()=>{
    const email = document.getElementById("email")
    console.log(email.value)
}