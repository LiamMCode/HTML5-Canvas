var canvas, ctx, x, y;
$(document).ready(function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    x = canvas.width/2 - 50;
    y = canvas.height/2 - 50;
    
    $('input').spinner({ min: -100, max: 100, step: 0.5 });
    $('input').change(draw);
    $('#reset').click(function() {
        $('#scale-x').val(1);
        $('#skew-x').val(0); 
        $('#skew-y').val(0);
        $('#scale-y').val(1);
        $('#translate-x').val(0);
        $('#translate-y').val(0);
        draw();
    });
    
    draw();
});

function draw() {
    var scaleX = $('#scale-x').val();
    var skewX =  $('#skew-x').val(); 
    var skewY =  $('#skew-y').val();
    var scaleY = $('#scale-y').val();
    var tx =     $('#translate-x').val();
    var ty =     $('#translate-y').val();
    
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(scaleX, skewX, skewY, scaleY, tx, ty);
    ctx.fillStyle = 'navy';
    ctx.fillRect(0, 0, 200, 100);
    ctx.restore();
}