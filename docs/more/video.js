// just in case the browser doesn't allow html5 to loop the video
function restartVideo(){
vid.currentTime = 0.1; //setting to zero breaks iOS 3.2, the value won't update, values smaller than 0.1 was causing bug as well.
vid.play();
}
//loop video
vid.addEventListener('ended', restartVideo, false);