window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    ctx.strokeStyle = 'red';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.bezierCurveTo(300, 400, 400, 400, 400, 50);
    ctx.lineTo(50, 50);
    ctx.stroke();
    ctx.fill();
};		