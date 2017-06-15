var myVideo = document.getElementById("video");

    function repeatVideo() {
        document.getElementById('replay').style.display = 'none';
        myVideo.currentTime = 0;
        myVideo.style.display = 'block';
        myVideo.play();
        document.getElementById('fon').style.display = 'none';
     }
    
    myVideo.addEventListener('ended',myHandler,false);
    function myHandler(e) {
        myVideo.style.display = 'none';
        document.getElementById('fon').style.display = 'block';
        document.getElementById('replay').style.display = 'block';
    }