$(document).ready(function() {

    var array = ['jay', 'parsi', 'dylan', 'hunters', 'monty', 'pernille'];

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

    $("#playback0").slider({
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

    $("#playback2").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        animate: true,
        slide: function(event, ui) {
            setTime((ui.value) / 100);
        }
    });

    $("#playback3").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        animate: true,
        slide: function(event, ui) {
            setTime((ui.value) / 100);
        }
    });

    $("#playback4").slider({
        min: 0,
        max: 100,
        value: 0,
        range: "min",
        animate: true,
        slide: function(event, ui) {
            setTime((ui.value) / 100);
        }
    });

    $("#playback5").slider({
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
            zeroPlaybacks(0);
            $('#playback0').slider('value', value);
        }
        else if(myMedia.src == 'http://localhost:8888/grail/audio/parsi.mp3'){
            zeroPlaybacks(1);
            $('#playback1').slider('value', value);
        }
        else if(myMedia.src == 'http://localhost:8888/grail/audio/dylan.mp3'){
            zeroPlaybacks(2);
            $('#playback2').slider('value', value);
        }
        else if(myMedia.src == 'http://localhost:8888/grail/audio/hunters.mp3'){
            zeroPlaybacks(3);
            $('#playback3').slider('value', value);
        }
        else if(myMedia.src == 'http://localhost:8888/grail/audio/monty.mp3'){
            zeroPlaybacks(4);
            $('#playback4').slider('value', value);
        }
        else if(myMedia.src == 'http://localhost:8888/grail/audio/pernille.mp3'){
            zeroPlaybacks(5);
            $('#playback5').slider('value', value);
        }
    }, 1000);

    var myMedia = document.createElement('audio');
    $('#player').append(myMedia);
    myMedia.id = "myMedia";
    playAudio('http://localhost:8888/grail/audio/jay', 50/100);

    $(".jay").click(function(){
        playAudio('http://localhost:8888/grail/audio/jay', 50/100);
        flipPause(this);
    });
    $(".parsi").click(function(){
        playAudio('http://localhost:8888/grail/audio/wagner', 50/100);
        flipPause(this);
    });
    $(".dylan").click(function(){
        playAudio('http://localhost:8888/grail/audio/dylan', 50/100);
        flipPause(this);
    });
    $(".hunters").click(function(){
        playAudio('http://localhost:8888/grail/audio/hunters', 50/100);
        flipPause(this);
    });
    $(".monty").click(function(){
        playAudio('http://localhost:8888/grail/audio/monty', 50/100);
        flipPause(this);
    });
    $(".pernille").click(function(){
        playAudio('http://localhost:8888/grail/audio/pernille', 50/100);
        flipPause(this);
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

    function flipPause(that){
        $.each(array, function(i, v){
            console.log($("." + v));
            $("." + v).attr("src","images/play.png");
        });
        $(that).attr("src","images/pause.png");
        $('.play').attr("src", "images/large_pause.png");
    }

    function zeroPlaybacks(value){
        for(var i = 0; i < array.length; i++){
            if(i != value){
                $('#playback' + i).slider('value', 0);
            }
        }
    }
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