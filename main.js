var mouse_event = "empty";
var last_x_position, last_y_position;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
var width = 2;
canvas.addEventListener("mousedown", Mymousedown);
function Mymousedown(e){
    mouse_event = "mousedown";
}
canvas.addEventListener("mousemove", Mymousemove_is_a_superhero);
function Mymousemove_is_a_superhero(e){
    var current_x_position = e.clientX-canvas.offsetLeft;
    var current_y_position = e.clientX-canvas.offsetTop;
    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        console.log("last_position_of_x_&_y_coordinates");
        console.log("x = "+last_x_position+"y ="+last_y_position);
        ctx.moveTo(last_x_position, last_y_position);
        console.log("current_position_of_x_&_y_coordinates");
        console.log("x = "+current_x_position+"y ="+current_y_position);
        ctx.lineTo(current_x_position, current_y_position);
        ctx.stroke();
    }
    last_x_position = current_x_position;
    last_y_position = current_y_position;
    
}
canvas.addEventListener("mouseup", Mymouseup);
function Mymouseup(e){
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave", Mymouseleave);
function Mymouseleave(e){
    mouse_event = "mouseleave";
}