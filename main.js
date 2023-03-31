var canvas=document.getElementById("LogoCanvas");
var ctx=canvas.getContext("2d");
var palette=document.getElementById("colours").value

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(260,190,500,200,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(420,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=3;
ctx.arc(465,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(510,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(555,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(600,250,40,0,2*Math.PI);
ctx.stroke();

function drawcircle(){
    var palette=document.getElementById("colours").value;

    document.getElementById("drawowncircle").style.display="none";
    document.getElementById("olympic").style.display="inline-block";
    document.getElementById("colours").style.display="inline-block";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    canvas.addEventListener("mousedown",mymousedown);

    function circle(mouseX,mouseY){
        ctx.beginPath();
        ctx.strokeStyle=palette;
        ctx.lineWidth=3;
        ctx.arc(mouseX,mouseY,40,0,2*Math.PI);
        ctx.stroke(); 
    }

function mymousedown(e){
mouseX=e.clientX-canvas.offsetLeft;
mouseY=e.clientY-canvas.offsetTop;
console.log("X="+mouseX+",Y="+mouseY);
circle(mouseX,mouseY);
}


   
}

function olympicreturn(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=1;
ctx.rect(260,190,500,200,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(420,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=3;
ctx.arc(465,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(510,250,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(555,300,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(600,250,40,0,2*Math.PI);
ctx.stroke();

document.getElementById("olympic").style.display="none";
document.getElementById("drawowncircle").style.display="inline-block";
document.getElementById("colours").style.display="none";
}






