window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    //Using arcTo for rounded corners
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(80, 50);
    
    //top right
    ctx.arcTo(210, 50, 210, 70, 20);
    
    //bottom right
    ctx.arcTo(210, 200, 160, 200, 20);
    
    //bottom left
    ctx.arcTo(60, 200, 60, 180, 20);

    //top left
    ctx.arcTo(60, 50, 100, 50, 20);
    
    ctx.stroke();
    ctx.fillStyle = 'navy';
    ctx.fill();

};