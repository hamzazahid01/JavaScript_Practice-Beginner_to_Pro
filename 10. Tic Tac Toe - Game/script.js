
let resetBtn = document.querySelector("#resetBtn");
let status = document.querySelector("#status");
let cells = document.querySelectorAll(".cell");
let board = document.querySelector("#board-container");

let winnerFound = document.createElement("h2");

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let alreadyWin = false;

function checkWin(){

    winPattern.forEach((pattern)=>{

        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;
        
        if(pos1!=="" && pos1==pos2 && pos2==pos3){
            console.log("Winner Found!");
            winnerFound.innerText=pos1 + " is Winner!!";
            alreadyWin = true;

            cells[pattern[0]].classList.add("win");
            cells[pattern[1]].classList.add("win");
            cells[pattern[2]].classList.add("win");

            board.insertBefore(winnerFound,resetBtn);
            return true;
        }

    })
}


let player = true;

cells.forEach((cell)=>{
    cell.addEventListener("click", function(){

        if(!alreadyWin){

            if(cell.innerText!=""){
                return;
            }

            if(player){
                cell.innerText = "0";
                status.innerText = "Player X Turn";
                player=false;
                console.log("Player 1 clicked");
            }
            else{
                cell.innerText = "X";
                status.innerText = "Player 0 Turn";
                player=true;
                console.log("player 2 clicked")
            }

            checkWin();

        }

        })
    })


