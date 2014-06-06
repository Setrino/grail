$(document).ready(function() {

    $("#volume").slider({
        orientation: "vertical",
        min: 0,
        max: 100,
        value: 50,
        range: "max",
        animate: true,
        slide: function(event, ui) {
            setVolume((ui.value) / 100);
        }
    });

    $("#playback").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        animate: true,
        slide: function(event, ui) {
            setTime((ui.value) / 100);
        }
    });

    $("#playback1").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        animate: true,
        slide: function(event, ui) {
            setTime((ui.value) / 100);
        }
    });

    setInterval(function(){
        var value = Math.floor(myMedia.currentTime / myMedia.duration * 100);
        if(myMedia.src == 'http://localhost:8888/grail/audio/jay.mp3'){
        $('#playback').slider('value', value);
        $('#playback1').slider('value', 0);
        }else{
        $('#playback').slider('value', 0);
        $('#playback1').slider('value', value);
        }
    }, 1000);

    var myMedia = document.createElement('audio');
    $('#player').append(myMedia);
    myMedia.id = "myMedia";
    playAudio('http://localhost:8888/grail/audio/jay', 50/100);

    $(".jay").click(function(){
        playAudio('http://localhost:8888/grail/audio/jay', 50/100);
        $(this).attr("src","images/pause.png");
        $('.play').attr("src", "images/large_pause.png");
        $(".parsi").attr("src","images/play.png");
    });
    $(".parsi").click(function(){
        playAudio('http://localhost:8888/grail/audio/wagner', 50/100);
        $(this).attr("src","images/pause.png");
        $('.play').attr("src", "images/large_pause.png");
        $(".jay").attr("src","images/play.png");
    });

    $(".sound").click(function(){
        if(myMedia.muted){
            $(this).attr("src", "images/sound.png");
            myMedia.muted = false;
        }else{
            $(this).attr("src", "images/no_sound.png");
            myMedia.muted = true;
        }
    })

    $(".play").click(function(){
        if($(this).attr("src") == "images/large_pause.png"){
            myMedia.pause();
            $(this).attr("src", "images/large_play.png");
        }else{
            myMedia.play();
            $(this).attr("src", "images/large_pause.png");
        }
    });
});

var previous = 0;
function resetPrevious(){
    previous = 0;
}

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

function setTime(myTime){
    var myMedia = document.getElementById('myMedia');
    myMedia.currentTime = myTime * myMedia.duration;
}