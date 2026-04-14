// const text = document.getElementById("text")
// console.log(text)//null
// console.log(text.innerText)
// text.innerText = "HI"

const changetext =(event)=>{

    console.log(".......",event)
    const text = document.getElementById("text")
    console.log(text)//null
    console.log(text.innerText)
    text.innerText = "HI"
    text.style.color="blue"

}

const generateBox=()=>{

    const box = document.getElementById("box") //<div?
    box.style.height="200px"
    box.style.width="200px"
    box.style.backgroundColor="black"
}

const changeLink =()=>{



    const google = document.getElementById("google")
    google.href ="https://www.netflix.com"
    google.target ="_blank"


}