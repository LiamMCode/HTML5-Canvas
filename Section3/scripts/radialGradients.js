var ctx, canvas, centerX, centerY, radius;
var borderColor = '#c8c8c8';
var innerBorderColor = '#c8c8c8';
var handColor = '#666666';
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    centerX = canvas.width/2;
    centerY = canvas.height/2;
    radius = canvas.width/3;
    
    drawOuterGradient();   
    drawInnerGradient();
};

function drawOuterGradient() {
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    var gradient = ctx.createRadialGradient(centerX, centerY/1.2, radius,
                                            100, 50, radius/2);
    gradient.addColorStop(0, '#ccc');
    gradient.addColorStop(1, '#fff');
    ctx.fillStyle = gradient;
    ctx.arc(centerX, centerY/1.2, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();  
}

function drawInnerGradient() {
    ctx.beginPath();
    var gradient = ctx.createRadialGradient(centerX, centerY/1.2, radius,
                            70, 50, radius/4);
    gradient.addColorStop(0, '#88bfe8');
    gradient.addColorStop(1, '#fff');
    ctx.fillStyle = gradient;
    ctx.arc(centerX, centerY/1.2, radius - 10, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = innerBorderColor;
    ctx.stroke();		
    ctx.closePath();
}