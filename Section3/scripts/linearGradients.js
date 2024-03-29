var ctx, canvas, centerX, centerY;
var borderColor = innerBorderColor = '#c8c8c8';
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

    centerX = canvas.width/2;
    centerY = canvas.height/2;
    
    drawOuterGradient();   
    drawInnerGradient();
    drawText();
};

function drawOuterGradient() {
    ctx.beginPath();
    var gradient = ctx.createLinearGradient(centerX, 20, centerX, 230);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#ccc');
    ctx.fillStyle = gradient;
    ctx.rect(20, 20, canvas.width - 40, canvas.height - 40);
    ctx.fill();
    ctx.strokeStyle = borderColor;
    ctx.stroke();
    ctx.closePath();
}

function drawInnerGradient() {
    ctx.beginPath();
    var gradient = ctx.createLinearGradient(centerX, 20, centerX, 200);
    gradient.addColorStop(0, '#fff');
    gradient.addColorStop(1, '#88bfe8');
    ctx.fillStyle = gradient;
    ctx.rect(40, 40, canvas.width - 80, canvas.height - 80);
    ctx.fill();
    ctx.strokeStyle = innerBorderColor;
    ctx.stroke();
    ctx.closePath();
}

function drawText() {
    ctx.fillStyle = 'black'
    ctx.font = '20pt Arial';
    var text = 'Using Gradients';
    var tWidth = ctx.measureText(text).width;
    ctx.fillText(text, canvas.width/2 - tWidth/2, canvas.height/1.9);
}