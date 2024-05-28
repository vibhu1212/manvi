window.addEventListener('load', function() {
    // Get the video container and video element
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('myVideo');

    // Set a timeout to show and play the video after 20 seconds
    setTimeout(function() {
        // Make the video container visible
        videoContainer.style.display = 'block';

        // Play the video
        video.play();
    }, 20000); // 20000 milliseconds = 18 seconds
});
