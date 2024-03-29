var canvas, ctx;
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');				
    
    var img = new Image();
    img.onload = function() {
        drawImage(img);
    };
    img.src = 'Images/HTML5.png';
    
    var wallpaper = new Image();
    wallpaper.onload = function() {
        //drawWallPaper(wallpaper);
    };
    wallpaper.src = 'Images/wallpaper.jpg';	
};	

function drawImage(img) {
    var destX = 10;
    var destY = 20;
    var destWidth = 212;
    var destHeight = 212;
    
    ctx.drawImage(img, destX, destY, destWidth, destHeight);
    
    var sourceX = 0;
    var sourceY = 0;
    var sourceWidth = 512;
    var sourceHeight = 110;
    
    destX = 250;
    destY = 20;
    destWidth = 212;
    destHeight = 50;
    
    
    ctx.drawImage(img, sourceX, sourceY, sourceWidth, sourceHeight,
                    destX, destY, destWidth, destHeight); 
}

function drawWallPaper(img) {
    var pattern = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = pattern;
    ctx.rect(50, 50, 400, 300);
    ctx.fill();
}

function showCanvasAsImage() {
    var dataUrl = canvas.toDataURL();
    window.open(dataUrl, 'Canvas as Image', 'width=300, height=300');
}