let circle=document.querySelector(".circle");
let button=document.querySelectorAll("button");
let shape=document.querySelector("#square");

button[0].addEventListener("click", changeColor);

function genarateColor(){
    let color = Math.floor(Math.random() * 256);
    return color;
}
 function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    circle.style.backgroundColor = newColor;
 }


 button[1].addEventListener("click", changeShape);
let arr=["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function changeShape(){
    let idname = randomShape();
    shape.id = idname;
}