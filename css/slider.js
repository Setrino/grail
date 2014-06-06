$(document).ready(function() {

  $("#volume").slider({
    orientation: "vertical",
    min: 0,
    max: 100,
    value: 50,
		range: "min",
		animate: true,
    slide: function(event, ui) {
      setVolume((ui.value) / 100);
    }
  });

  var myMedia = document.createElement('audio');
  $('#player').append(myMedia);
  myMedia.id = "myMedia";
	playAudio('audio/ViewSource', 50/100);
});

function playAudio(fileName, myVolume) {
  var mediaExt = (myMedia.canPlayType('audio/mp3')) ? '.mp3' 
  	: (myMedia.canPlayType('audio/ogg')) ? '.ogg' 
  	: '';
  if (mediaExt) {
    myMedia.src = fileName + mediaExt;
    myMedia.setAttribute('loop', 'loop');
    setVolume(myVolume);
    myMedia.play();
  }
}

function setVolume(myVolume) {
    var myMedia = document.getElementById('myMedia');
    myMedia.volume = myVolume;
}