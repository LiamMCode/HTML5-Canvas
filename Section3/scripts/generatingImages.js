var canvas, ctx;		
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    generateImage();
};
            
function generateImage() {
    var height = canvas.height;
    var width = canvas.width;
    
    var pixelData = ctx.createImageData(width, height);
    var xCenter = width / 2;
    var yCenter = height / 2;
    var pixelPos = 0;
    
    for (var y = 0; y < pixelData.height; y++) { //rows
        for (var x = 0; x < pixelData.width; x++) { //columns
            var xOffset = x - xCenter;
            var yOffset = y - yCenter;
            var d = Math.abs(xOffset) + Math.abs(yOffset);
            var t = Math.tan(d/10);
            
            var r = t * 255;
            var g = 125 + t * 80;
            var b = 235 + t * 20;
              
            //get to the pixel data and assign the RGB
            pixelData.data[pixelPos++] = Math.max(0, Math.min(255, r));
            pixelData.data[pixelPos++] = Math.max(0, Math.min(255, g));
            pixelData.data[pixelPos++] = Math.max(0, Math.min(255, b));
            pixelData.data[pixelPos++] = Math.random() * 1000;						
            
        }
    }
    
    ctx.putImageData(pixelData, 0, 0);
    
    
}