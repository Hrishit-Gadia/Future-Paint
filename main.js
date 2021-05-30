var PreviousX;
var PreviousY;
var CurrentX;
var CurrentY;
var Canvas = document.getElementById("The-Canvas");
var Ctx = Canvas.getContext("2d");
var CurrentEvent;
var Colour;
var Width;

Canvas.addEventListener("mousedown", MouseDown);

function MouseDown(e) {

    CurrentEvent = "Mouse Down";
    Colour = document.getElementById("Colour").value;
    Width = document.getElementById("Width").value;
    console.log("Width = " + Width + " , " + " Colour = " + Colour);
}

Canvas.addEventListener("mousemove", MouseMove);

function MouseMove(e) {

    CurrentX = e.clientX - Canvas.offsetLeft;
    CurrentY = e.clientY - Canvas.offsetTop;

    if (CurrentEvent == "Mouse Down") {
        Ctx.beginPath();
        Ctx.lineWidth = Width;
        Ctx.strokeStyle = Colour;
        Ctx.moveTo(PreviousX, PreviousY);
        Ctx.lineTo(CurrentX, CurrentY);
        Ctx.stroke();
    }
PreviousX = CurrentX;
PreviousY = CurrentY;
}

Canvas.addEventListener("mouseup" , MouseUp);

function MouseUp (e) {
    CurrentEvent =  "Mouse Up";
}

Canvas.addEventListener("mouseleave" , MouseLeave);

function MouseLeave (e) {
    CurrentEvent = "Mouse Leave";
}

Canvas.addEventListener("touchstart", TouchStart);

function TouchStart(e) {

    CurrentEvent = "Touch Down";
    Colour = document.getElementById("Colour").value;
    Width = document.getElementById("Width").value;
    console.log("Width = " + Width + " , " + " Colour = " + Colour);
}

Canvas.addEventListener("touchmove", TouchMove);

function TouchMove(e) {

    CurrentX = e.touches[0].clientX - Canvas.offsetLeft;
    CurrentY = e.touches[0].clientY - Canvas.offsetTop;

    if (CurrentEvent == "Touch Down") {
        Ctx.beginPath();
        Ctx.moveTo(PreviousX, PreviousY);
        Ctx.lineTo(CurrentX, CurrentY);
        Ctx.stroke();
    }
PreviousX = CurrentX;
PreviousY = CurrentY;
}