const createBox=()=>{

    const root = document.getElementById("root") //<div>
    const boxTag = document.createElement("div") //<div>
    boxTag.style.backgroundColor="black"
    boxTag.style.height="100px"
    boxTag.style.width="100px"

    root.appendChild(boxTag)

}