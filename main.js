var Canvas = document.getElementById("The-Canvas");
var ctx = Canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.arc(60, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.arc(150, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx.arc(240, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.arc(200, 100, 40, 0, 2 * Math.PI);
ctx.stroke();