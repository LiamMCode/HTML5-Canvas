window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var ctx = canvas.getContext('2d');

    var sin = Math.sin(Math.PI/20);   
    var cos = Math.cos(Math.PI/20); 

    ctx.translate(canvas.width/1.5, canvas.height/5);   
        
    for (var i=0; i <=40; i++) {   
        var r = Math.floor(255 * Math.random());  
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());
        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";   
        ctx.fillRect(0, 0, 50, 50);   
        ctx.transform(cos, sin, -sin, cos, 20, 10);   
    } 
};