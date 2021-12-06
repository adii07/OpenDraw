var canvas=document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var blackPen=document.querySelector(".black-pen");
var redPen=document.querySelector(".red-pen");
var bluePen=document.querySelector(".blue-pen");
var greenPen=document.querySelector(".green-pen");
var body=document.querySelector("body");

canvas.width=window.innerHeight;
canvas.height=window.innerHeight;

var penColor="black";
var paint=false;

body.addEventListener("mousedown",startPainting);
body.addEventListener("mouseup",stopPainting);
body.addEventListener("mousemove",draw);

blackPen.addEventListener("click",()=>{penColor="black";});
redPen.addEventListener("click",()=>{penColor="red";});
bluePen.addEventListener("click",()=>{penColor="blue";});
greenPen.addEventListener("click",()=>{penColor="green";});



function startPainting(e){
    console.log("Starting point",e.clientX,e.clientY);
    paint=true;
    draw(e);
}

function stopPainting(e){
    paint=false;
    ctx.beginPath();
    console.log("Ending point",e.clientX,e.clientY);
}
function draw(e){
    if(!paint)return;
    ctx.strokeStyle=penColor;
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);

}