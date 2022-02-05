// gets canvas context
var c = document.getElementById("game-screen");
var ctx = c.getContext("2d");

function drawGameBoard(){
    // draw rectangle for game board
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(100, 50, 600, 500);

    // draw grid of circles on game board
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
          ctx.beginPath();
          let x = 155 + j * 80; // x coordinate
          let y = 100 + i * 80; // y coordinate
          let radius = 30; // Arc radius
          let startAngle = 0; // Starting point on circle
          let endAngle = Math.PI * 2; // End point on circle
          let counterclockwise = true; // clockwise or counterclockwise

          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

          ctx.fillStyle = 'rgb(255,255,255)';
          ctx.fill();
        }
    }
}

drawGameBoard()

let coords = [
    {col: 0, row: 5},
    {col: 1, row: 5},
    {col: 2, row: 5},
    {col: 3, row: 5},
    {col: 4, row: 5},
    {col: 5, row: 5},
    {col: 6, row: 5},
]

function drawGameToken(player, row, col){
    if (row < 0){
        console.log('woops');
    } else {
        ctx.beginPath();
        let x = 155 + col*80; // x coordinate
        let y = 100 + row*80; // y coordinate
        let radius = 30; // Arc radius
        let startAngle = 0; // Starting point on circle
        let endAngle = Math.PI * 2; // End point on circle
        let counterclockwise = true; // clockwise or counterclockwise

        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

        // change color depending on player
        if (player === 1) {
            ctx.fillStyle = 'rgb(255,0,0)';
        } else {
            ctx.fillStyle = 'rgb(255,204,0)';
        }
        ctx.fill();
        // increments row value to place next token on top
        coords[col].row--
    }
}

// funtion to take param for player turn, then draws token
function playerTurn(player, selection){
    drawGameToken(player,coords[selection].row,coords[selection].col)
}

playerTurn(1, 0)
playerTurn(2, 0)
playerTurn(1, 3)
playerTurn(2, 0)
playerTurn(1, 5)
playerTurn(2, 1)
playerTurn(2, 0)
playerTurn(2, 0)
playerTurn(2, 0)
console.log(coords)


// drawGameToken(2,3,1)