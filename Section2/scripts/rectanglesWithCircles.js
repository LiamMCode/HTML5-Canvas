window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');
    
    var scores = [100, 90, 85, 45, 72, 88];
    var width = 50;
    var currX = 50;
    var base = 200;
    
    for (var i=0;i<scores.length;i++) {
        var h = scores[i];
        var y = canvas.height - h;
        ctx.fillStyle = 'green';
        ctx.fillRect(currX, y, width, h);
        
        ctx.fillStyle = 'navy';
        ctx.beginPath();
        ctx.arc(currX + width /2, y, 15, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        currX += width + 10;
    }


};