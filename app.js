const boxs = document.querySelectorAll(".box")
const playerText = document.getElementById("player")
const error = document.getElementById("error")
const body = document.querySelector("#background")
const gameBox = document.querySelector(".gameBox")
let player = "X"
let boxValue = []

boxs.forEach(box => addEventListener("click",clickBox))

function clickBox(e){
    checkText(e)
}
function checkText(e){
    if(e.target.innerText == "X"){
        error.innerHTML = "this box is full"
        body.style.backgroundColor = "red"
        setTimeout(() => {
            error.innerHTML=""
            body.style.backgroundColor = "#FF6000"
        }, 1500);
        return
    }
    else if(e.target.innerText == "O"){
        error.innerHTML = "this box is full"
        body.style.backgroundColor = "red"
        setTimeout(() => {
            error.innerHTML=""
            body.style.backgroundColor = "#FF6000"
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

function checkWin(){
    boxValue = []
    boxs.forEach(box =>{
        boxValue.push(box.innerHTML)
    })

    //horizonta control
    for (let i = 0; i < 7; i+=3) {
        if(boxValue[i] == boxValue[i+1] && boxValue[i] == boxValue[i+2] && boxValue[i] != ""){
            customAlert("Game Over , WİNNER = ", boxValue[i])
            pictureAlert("https://blog.ipleaders.in/wp-content/uploads/2020/08/winner-1-696x463-1-1.jpg")
            return
        }
    }

    //vertical control
    for(let i = 0; i < 3; i++){
        if(boxValue[i] == boxValue[i+3] && boxValue[i] == boxValue[i+6] && boxValue[i] != ""){
            customAlert("Game Over , WİNNER = ", boxValue[i])
            pictureAlert("https://blog.ipleaders.in/wp-content/uploads/2020/08/winner-1-696x463-1-1.jpg")
            return
        }
    }

    //cross control   
    if(boxValue[0] == boxValue[4] && boxValue[0] ==  boxValue[8] && boxValue[0] != ""){
        customAlert("Game Over , WİNNER = ", boxValue[0])
        pictureAlert("https://blog.ipleaders.in/wp-content/uploads/2020/08/winner-1-696x463-1-1.jpg")
        return
    }
    else if(boxValue[2] == boxValue[4] && boxValue[2] ==  boxValue[6] && boxValue[2] != ""){
        customAlert("Game Over , WİNNER = ", boxValue[2])
        pictureAlert("https://blog.ipleaders.in/wp-content/uploads/2020/08/winner-1-696x463-1-1.jpg")
        return
    }

    //tie control
    if(!boxValue.includes("")){
        boxs.forEach(box=>{
            box.style.pointerEvents = "none"
        })
        customAlert("Game Over","Tie")
        pictureAlert("https://pbs.twimg.com/media/Dp1tgRHXgAAGDM1.jpg")
    }
}


function customAlert(message,winner){
    playerText.innerHTML = `${message} ${winner}`
}
function pictureAlert(url){
    boxs.forEach(box=>{
        box.remove()
    })
    const img = document.createElement("img")
    img.src = url
    img.style.width = "300%"
    img.style.height = "150%"
    gameBox.appendChild(img)
}
