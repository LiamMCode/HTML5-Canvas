window.requestAnimFrame = (function() {
    return  window.requestAnimationFrame       || 
            window.webkitRequestAnimationFrame || 
            window.mozRequestAnimationFrame    || 
            window.oRequestAnimationFrame      || 
            window.msRequestAnimationFrame     || 
            function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
            };
})();

window.requestTimeout = function(fn, delay) {
    if( !window.requestAnimationFrame      	&& 
        !window.webkitRequestAnimationFrame && 
        !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) && // Firefox 5 ships without cancel support
        !window.oRequestAnimationFrame      && 
        !window.msRequestAnimationFrame)
            return window.setTimeout(fn, delay);

    var start = new Date().getTime(),
        handle = new Object();

    function loop(){
        var current = new Date().getTime(),
            delta = current - start;

        delta >= delay ? fn.call() : handle.value = requestAnimFrame(loop);
    };

    handle.value = requestAnimFrame(loop);
    return handle;
};

var ctx, centerX, centerY, radius;
var borderColor = '#c8c8c8';
var innerBorderColor = '#c8c8c8';
var handColor = '#666666';

window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    centerX = canvas.width/2;
    centerY = canvas.height/2;
    radius = canvas.width/3;
    
    drawClockFace(ctx);				
    drawHand();
    
    
};		

function drawHand() {
    var radians = new Date().getSeconds() * Math.PI/30;
    radians -= 90 * Math.PI/180;
    
    //clear area
    ctx.beginPath();
    var gradient= ctx.createRadialGradient(centerX,centerY,radius/1.3,
                   70,50,radius/4);
    gradient.addColorStop(0, '#88bfe8');
    gradient.addColorStop(1, '#fff');
    ctx.fillStyle = gradient;
    ctx.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.strokeStyle = innerBorderColor;
    ctx.stroke();
    ctx.closePath();
    
    //Draw second hand
    ctx.save();
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    ctx.rotate(radians);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 0);
    ctx.lineTo(radius - 25, 0);
    ctx.strokeStyle = handColor;
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    
    requestTimeout(drawHand, 1000);
}

function drawClockFace(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = borderColor;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    var gradient= 
        ctx.createRadialGradient(centerX,centerY,radius,100,50,radius/2);
    gradient.addColorStop(0, '#ccc');
    gradient.addColorStop(1, '#fff');
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}