window.onload = function() {
    let canvas = document.getElementById('mycanvas');
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = 'Green';
    ctx.fillRect(300,200,200,100);

    ctx.fillStyle = 'Navy';
    ctx.arc(100,100,50,0,2 * Math.PI, false);
    ctx.fill();
}