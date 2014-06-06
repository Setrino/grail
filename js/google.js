var ge;
var spin = true;
google.load("earth", "1", {"other_params":"sensor=false"});

function init() {
    google.earth.createInstance('map3d', initCB, failureCB);
    }

function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);
    //ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);
    var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_ABSOLUTE);
    lookAt.setLatitude(37.831145);
    lookAt.setLongitude(-122.36868);
    lookAt.setRange(12000000);
    ge.getOptions().setFlyToSpeed(1);
    ge.getView().setAbstractView(lookAt);

    // Start spinning
    fullSpin(ge);

    // Let us know when the animation is complete

    var href = 'http://localhost:8888/grail/points.kml';

    google.earth.fetchKml(ge, href, function(kmlObject) {
    if (kmlObject)
    ge.getFeatures().appendChild(kmlObject);
    if (kmlObject.getAbstractView() !== null)
    ge.getView().setAbstractView(kmlObject.getAbstractView());
    });

google.earth.addEventListener(ge.getView(), 'viewchangeend', geViewChangeEnd);
}


function fullSpin() {
    if(spin){
        // Tweak these for the desired effect
        var iterationsPerSpin = 3;
        ge.getOptions().setFlyToSpeed(0.25);

        var lookAt = ge.getView().copyAsLookAt(ge.ALTITUDE_ABSOLUTE);
        nextLongitude = lookAt.getLongitude() + (360/iterationsPerSpin);
        if(nextLongitude >= 180.0) {
        nextLongitude -= 360.0;
        }

    // Use these to reset the state if the spin in used in conjunction with other effects
    lookAt.setLongitude(nextLongitude);
    lookAt.setAltitude(15);
    lookAt.setHeading(0);
    lookAt.setTilt(0);
    lookAt.setRange(12000000);

    ge.getView().setAbstractView(lookAt);
    }
}

function geViewChangeEnd(instance) {
    // Start the next iteration when the transition in complete
    fullSpin();
    }

function failureCB(errorCode) {
    }

google.setOnLoadCallback(init);

$(document).ready(function(){

    $("#map3d").bind({
        mouseenter: function(){
            spin = false;
        },
        mouseleave: function(){
            spin = true;
            fullSpin();
        }
    });

});