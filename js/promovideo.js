
function toggleVideo() {
    var videoFrame = document.getElementById('videoFrame');
    var playButton = document.querySelector('.play-button');
    if (videoFrame.style.display === 'none') {
        videoFrame.style.display = 'block';
        playButton.style.display = 'none';
    } else {
        videoFrame.style.display = 'none';
        playButton.style.display = 'block';
    }
}

