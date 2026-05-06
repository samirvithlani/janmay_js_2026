let second = 0
let min =0
let hour =0
let timer =null;


function updateDisplay(){

    let h = hour<10 ?"0"+hour:hour
    let m =min<10 ?"0"+min:min
    let s = second<10 ?"0"+second:second

    document.getElementById("display").innerText=`${h}:${m}:${s}`
}

function start(){
    if(timer!=null) return
    timer = setInterval(()=>{
        second++;
        if(second==60){
            second=0
            min++
        }
        if(min==60){
            min=0
            hour++
        }
        updateDisplay()
    },1000)

}