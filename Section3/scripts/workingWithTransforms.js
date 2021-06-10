window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    
    ctx.font = '30pt Arial';
    
    ctx.save();
    ctx.translate(200, 350);
    ctx.rotate(-.5*Math.PI);
    ctx.scale(1.5, 4);
    
    var rText = 'Rotated Text';
    ctx.fillText(rText, 0, 0);
    ctx.restore();
    
    ctx.fillRect(250, 100, 200, 100);
    
};	