var canvas=document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var blackPen=document.querySelector(".black-pen");
var redPen=document.querySelector(".red-pen");
var bluePen=document.querySelector(".blue-pen");
var greenPen=document.querySelector(".green-pen");
var body=document.querySelector("body");
var rectangleTool=document.querySelector(".rectangle-tool");
var pencilTool=document.querySelector(".pencil-tool");
var eraserTool=document.querySelector(".eraser-tool");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

var penColor="black";
var paint=false;
var startX=0;
var endX=0;
var startY=0;
var endY=0;
var tool="freehand";

body.addEventListener("mousedown",startPainting);
body.addEventListener("mouseup",stopPainting);
body.addEventListener("mousemove",draw);

blackPen.addEventListener("click",()=>{penColor="black";tool="freehand"});
redPen.addEventListener("click",()=>{penColor="red";tool="freehand"});
bluePen.addEventListener("click",()=>{penColor="blue";tool="freehand"});
greenPen.addEventListener("click",()=>{penColor="green";tool="freehand"});

rectangleTool.addEventListener("click",()=>{
    tool="rectangle";
    console.log("rectool");
});

pencilTool.addEventListener("click",()=>{
    tool="freehand";
    penColor="black";
    console.log("pencil");
});

eraserTool.addEventListener("click",()=>{
    tool="eraser";
    console.log("eraser");
});

function startPainting(e){
    console.log("Starting point",e.clientX,e.clientY);
    startX=e.clientX;
    startY=e.clientY;
    paint=true;
    if(tool=="freehand" ||tool=="eraser"){
    draw(e);}
}

function stopPainting(e){
    endX=e.clientX;
    endY=e.clientY;
    paint=false;
    if(tool=="freehand" ||tool=="eraser"){
        ctx.beginPath();
    }else{
        drawRectangle(e);}
    
    console.log("Ending point",e.clientX,e.clientY);
}

function draw(e){
    if(!paint || tool=="rectangle")return;
    ctx.strokeStyle=penColor;
    switch (tool) {
        case "freehand":
            ctx.lineWidth=2;
            drawFreeHand(e);
            break;
        case "rectangle":
            drawRectangle(e);
            break;
        case "eraser":
            penColor="white";
            ctx.lineWidth=20;
            drawFreeHand(e);
            break;
        default:
            break;
    }
}


function drawFreeHand(e){
    ctx.lineTo(e.clientX,e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX,e.clientY);
}

function drawRectangle(e){
    ctx.strokeRect(startX,startY,e.clientX-startX,e.clientY-startY);
}