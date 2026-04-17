const getData =()=>{

    var idData = document.querySelector("#text")
    console.log(idData.innerHTML)

    //var classData = document.querySelector(".box") //it returns 1st
    var classData = document.querySelectorAll(".box")
    console.log(classData)

    var nameData = document.querySelectorAll("[name=data]")
    console.log(nameData)

    var tagData = document.querySelectorAll("li")
    console.log(tagData)

}