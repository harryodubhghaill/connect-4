// gets canvas context
var c = document.getElementById("game-screen");
var ctx = c.getContext("2d");

function drawGameBoard(){
    // draw rectangle for game board
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(100, 50, 600, 500);

    // draw grid of circles on game board
    for (var i = 0; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
          ctx.beginPath();
          var x = 155 + j * 80; // x coordinate
          var y = 100 + i * 80; // y coordinate
          var radius = 30; // Arc radius
          var startAngle = 0; // Starting point on circle
          var endAngle = Math.PI * 2; // End point on circle
          var counterclockwise = true; // clockwise or counterclockwise

          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

          ctx.fillStyle = 'rgb(255,255,255)';
          ctx.fill();
        }
    }
}

drawGameBoard()

function drawGameToken(player, row){
    ctx.beginPath();
    var x = 155 + row*80; // x coordinate
    var y = 100; // y coordinate
    var radius = 30; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI * 2; // End point on circle
    var counterclockwise = true; // clockwise or counterclockwise

    ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

    if (player === 1) {
        ctx.fillStyle = 'rgb(255,0,0)';
    } else {
        ctx.fillStyle = 'rgb(255,204,0)';
    }
    ctx.fill();
}

drawGameToken(1,0)
drawGameToken(2,3)