window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var scores = [100, 90, 85, 45, 72, 88];
    var width = 50;
    var currX = 50;
    var base = 200;
    var startX = 0;
    var startY = 0;

    for (var i=0;i<scores.length;i++) {
        var x = currX;
        var y = canvas.height - scores[i];
        
        //moveTo point
        if (startX ==0) startX = x;
        if (startY ==0) startY = y;
        
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 1;
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
        
        startX = currX + 10;
        startY = y;
                    
        ctx.beginPath();
        ctx.fillStyle = 'navy';
        ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();

        currX += width + 10;
    }
};