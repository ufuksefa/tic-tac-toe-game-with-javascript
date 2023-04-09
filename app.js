const boxs = document.querySelectorAll(".box")
const playerText = document.getElementById("player")
const error = document.getElementById("error")
let player = "X"

boxs.forEach(box => addEventListener("click",clickBox))

function clickBox(e){
    checkText(e)
}
function checkText(e){
    if(e.target.innerText == "X"){
        error.innerHTML = "this box is full"
        setTimeout(() => {
            error.innerHTML=""
        }, 1500);
        return
    }
    else if(e.target.innerText == "O"){
        error.innerHTML = "this box is full"
        setTimeout(() => {
            error.innerHTML=""
        }, 1500);
        return
    }
    else{
        addText(e)
    }
}

function addText(e){
    e.target.innerText = player;
    if(player == "X"){
            player = "O"
    }else{
            player = "X"
    }
    playerText.innerText = `${player}'s turn`
    checkWin()
}

