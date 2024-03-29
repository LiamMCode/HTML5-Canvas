var radius = 50;
var posY = 70;
var posX = radius;
var speed = 10;
var canvas, ctx, canvasWidth, canvasHeight;
var dir = 1;
window.requestAnimFrame = function() {
    return window.requestAnimationFrame || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame || 
            window.oRequestAnimationFrame || 
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
}();

window.onload = function() {
    canvas = document.getElementById('myCanvas');
    canvasWidth = canvas.width;
    canvasHeight = canvas.height;
    ctx = canvas.getContext('2d');
    //window.setInterval(function() { animate(); }, 60);
    animate();
};		

function animate() {
    update();
    draw();
    requestAnimFrame(animate);
}

function update() {
    //Move to right until we reach canvas width
    if (dir > 0) {
        dir = (posX < canvasWidth - radius) ? 1 : -1;
    }
    //Move to left until we reach 0
    if (dir < 0) {
        dir = (posX > 0 + radius) ? -1 : 1;         
    }   
    posX += speed * dir; 
}

function draw() {    
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    ctx.fillStyle = 'Navy';
    ctx.beginPath();
    ctx.arc(posX, posY, radius, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
}
