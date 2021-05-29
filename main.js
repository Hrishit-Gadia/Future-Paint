var Canvas = document.getElementById("The-Canvas");
var Ctx = Canvas.getContext("2d");
var Mouse_Event;
var Colour;
var Width;
var Radius;
var CurrentX;
var CurrentY;


Canvas.addEventListener("mousedown", Down);

function Down(e) {
    Colour = document.getElementById("Colour-Input").value;
    Width = document.getElementById("Width-Input").value;
    Radius = document.getElementById("Radius-Input").value;
    Mouse_Event = "Down";
}

Canvas.addEventListener("mouseup", Up);

function Up(e) {
    Mouse_Event = "Up";
}
Canvas.addEventListener("mousemove", Move);

function Move(e) {

    CurrentX = e.clientX - Canvas.offsetLeft;
    CurrentY = e.clientY - Canvas.offsetTop;
    if (Mouse_Event == "Down") {
        console.log("X = " + CurrentX + " Y = " + CurrentY);
        Ctx.beginPath();
        Ctx.strokeStyle = Colour;
        Ctx.lineWidth = Width;
        Ctx.arc(CurrentX, CurrentY, Radius, 0, 2 * Math.PI);
        Ctx.stroke();
    }
}

Canvas.addEventListener("mouseleave", Leave);

function Leave(e) {
    Mouse_Event = "Leave";
}