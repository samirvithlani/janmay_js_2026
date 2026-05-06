const submitHandler =(event)=>{
    event.preventDefault()
    console.log(event)

    const name = document.getElementById("name").value
    console.log(name)
    const age = document.getElementById("age").value
    console.log(age)

    const gender = document.getElementsByName("gender")  //array
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            console.log(gender[i].value)
        }
    }
    const hobbies = document.getElementsByName("hobbies")
    for(let i=0;i<hobbies.length;i++){
        if(hobbies[i].checked){
            console.log(hobbies[i].value)
        }
    }



}