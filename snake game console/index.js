

let p = document.getElementById("output");
let board = [
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""],
    ["","","","","",""]
]
let width = board.length;
let height = board[0].length;
var score = 0;
let Player = {
    x:0,
    y:2
}
let Food = {
    y:Math.floor(Math.random()*height),
    x:Math.floor(Math.random()*width)
}
function RandomiseFood(){
    Food.x = Math.floor(Math.random()*(height-1))
    Food.y = Math.floor(Math.random()*(width-1))
}
let direction = "left";
function printGame(){
    p.innerText = ""
    for(var i = 0 ; i < width ;i++){
        for(var j = 0 ; j <height;j++){
            // draw player
            if (i == Player.x && Player.y == j){
                board[i][j] = "-";
            }else if (i==Food.x && j == Food.y){
                board[i][j] = "+";
            }
            else {
                board[i][j] = " ";
            }
            p.innerText += `[${board[i][j]}] `;
        }
        p.innerText += "\n";
    }
}

printGame()

function move(){
    switch(direction){
        case "up":
            Player.x = (Player.x == 0)?Player.x=width-1:Player.x-1 ;
            break;
        case "down":
            Player.x = (Player.x == width-1) ?Player.x=0:Player.x+1;
            break;
        case "left":
            Player.y = (Player.y == 0)?Player.y=height-1:Player.y-1;
            break;
        case "right":
            Player.y = (Player.y == height-1)?0:Player.y+1
    }
}

function changeDirectionByControls(){
    document.addEventListener("keypress",(event)=>{
        switch(event.key){
            case "8":
                direction = "up";
                break;
            case "2":
                direction = "down";
                break;
            case "4":
                direction = "left";
                break;
            case "6":
                direction = "right";
                break;
        }
    })
}
function checkColision(){
    if (Player.x == Food.x && Player.y == Food.y){
        RandomiseFood();
        score++;
        document.getElementById("score").innerText = score + " pts";
    }
}
function ShowFoodPosition(){
    document.getElementById("food").innerText = `x:${Food.y} ; y:${Food.x};`
}
setInterval(() => {
    // update
    printGame();
    // move by direction
    move()
    // change direction by keys 
    changeDirectionByControls();
    // check colision between player and food 
    checkColision()
    // show food position
    ShowFoodPosition()
}, 700);