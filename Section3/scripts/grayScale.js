var canvas, ctx, height, width;	
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    height = canvas.height;
    width = canvas.width;
    
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, canvas.width/2 - img.width/4, 
                        canvas.height/2 - img.height/4, 206, 206);
        grayScale();
    };
    img.src = 'images/HTML5.png';
};
            
function grayScale() {
    var pixelData = ctx.getImageData(0, 0, width, height);
    var data = pixelData.data;
    for (var i=0;i<data.length;i+=4) {
        var gray = data[i] * .3 + data[i+1] * .59 + data[i+2] * .11;
        
        data[i] = gray; //red
        data[i+1] = gray; //green
        data[i+2] = gray; //blue
    }
    ctx.putImageData(pixelData, 0, 0);
}