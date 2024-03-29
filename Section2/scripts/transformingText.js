window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');				
    
    ctx.font = '30pt Arial';
    ctx.fillText('Regular Text', 100, 50);
    
    ctx.save();
    ctx.translate(100, 300);
    ctx.rotate(-0.5*Math.PI);
    
    var rText = 'Rotated Text';
    ctx.fillText(rText, 0, 0);
    ctx.restore();
    
    var rWidth = ctx.measureText(rText).width;
    ctx.fillText('Regular Text', 100, rWidth  + 120);
    
};		