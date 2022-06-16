var board;
var player1 = "O";
var player2 = "X";
var currPlayer = player1;
var prevPlayer = player2;
var gameOver = false;

window.onload = function() {
    board = [
                [' ', ' ', ' '],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ]

    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c; ///automtically converts to string only
            tile.classList.add("tile");
            if (r>=0 && r<2) {
                tile.classList.add("horizontal-line");
            }
            if (c>=0 && c<2) {
                tile.classList.add("vertical-line");
            }
            tile.innerText = "";
            tile.addEventListener("click", setTile);
            document.getElementById("board").appendChild(tile);
            //  if (gameOver==true){
            //     alert(prevPlayer + "Wins");
            //     console.log(gameOver);
            //  }
        }
    }
}

function setTile() {
    if (gameOver) {
        return;
    }
    let coords = this.id.split("-"); 
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (board[r][c] != ' ') { 
        return;
    }
    
    board[r][c] = currPlayer;
    this.innerText = currPlayer;
    if (currPlayer == player1) {
        currPlayer = player2;
        prevPlayer = player1;
    }
    else {
        currPlayer = player1;
        prevPlayer = player2;
    }
    checkWinner();
    // if (gameOver== true){
    //     Window.alert(currPlayer +  "Wins");
    //     return;
    // }
}


function checkWinner() {
    //horizontally, check 3 rows
  //  debugger;
    console.log("In the func checkWinner");
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(r.toString() + "-" + i.toString());
                tile.classList.add("winner");
            }
            gameOver = true;
           // alert(prevPlayer + "Wins");
           debugger;
           //settimeout
           document.getElementById("winn").innerHTML = prevPlayer + " Wins";
           //console.log()
            return;
        }
    }
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] ==  board[2][c] && board[0][c] != ' ') {
            for (let i = 0; i < 3; i++) {
                let tile = document.getElementById(i.toString() + "-" + c.toString());                
                tile.classList.add("winner");
            }
            gameOver = true;
         //   alert(prevPlayer + "Wins");
          //  debugger;
            let jab = document.getElementById("winn");
            jab.innerHTML= prevPlayer + " Wins";
            console.log(jab);
            //debugger;
            return;
        }
    }

    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let tile = document.getElementById(i.toString() + "-" + i.toString());                
            tile.classList.add("winner");
        }
        gameOver = true;
       // alert(prevPlayer + "Wins");
       document.getElementById("winn").innerHTML = prevPlayer + " Wins";
        return;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {
        let tile = document.getElementById("0-2");                
        tile.classList.add("winner");
        tile = document.getElementById("1-1");                
        tile.classList.add("winner");
        tile = document.getElementById("2-0");                
        tile.classList.add("winner");
        gameOver = true;
        document.getElementById("winn").innerHTML = prevPlayer + " Wins";        
        return;
    }
}
