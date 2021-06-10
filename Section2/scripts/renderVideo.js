var timerID;
window.onload = function() {
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');		

    var video = document.getElementById('video');
    
    video.addEventListener('play', function() {
        video.currentTime = 10.0;
        timerID = window.setInterval(function() {
            ctx.drawImage(video, 5, 5, 270, 125);
        }, 30);
    });
    
    video.addEventListener('pause', function() {
        stopTimer();
    });
    
    video.addEventListener('ended', function() {
        stopTimer();
    });
};	

function stopTimer() {
    window.clearInterval(timerID);  
}
			