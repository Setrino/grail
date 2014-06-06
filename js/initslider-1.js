jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-1").amazingslider({
        jsfolder:jsFolder,
        width:800,
        height:600,
        skinsfoldername:"",
        loadimageondemand:false,
        isresponsive:false,
        autoplayvideo:false,
        pauseonmouseover:false,
        addmargin:true,
        randomplay:false,
        playvideoonclickthumb:true,
        slideinterval:5000,
        enabletouchswipe:true,
        transitiononfirstslide:false,
        loop:0,
        autoplay:true,
        navplayvideoimage:"../images/play-32-32-0.png",
        navpreviewheight:60,
        timerheight:2,
        shownumbering:false,
        skin:"Showcase",
        textautohide:false,
        addgooglefonts:true,
        navshowplaypause:true,
        navshowplayvideo:false,
        navshowplaypausestandalonemarginx:8,
        navshowplaypausestandalonemarginy:8,
        navbuttonradius:0,
        navthumbnavigationarrowimageheight:32,
        navmarginy:12,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navpreviewwidth:120,
        googlefonts:"Inder",
        textpositionmarginright:24,
        bordercolor:"#ffffff",
        navthumbnavigationarrowimagewidth:32,
        navthumbtitlehovercss:"text-decoration:underline;",
        arrowwidth:48,
        texteffecteasing:"easeOutCubic",
        texteffect:"fade,slide",
        navspacing:6,
        playvideoimage:"../images/playvideo-64-64-0.png",
        ribbonimage:"../images/ribbon_topleft-0.png",
        navwidth:16,
        navheight:16,
        arrowimage:"../images/arrows-48-48-3.png",
        timeropacity:0.6,
        navthumbnavigationarrowimage:"../images/carouselarrows-32-32-0.png",
        navshowplaypausestandalone:false,
        navpreviewbordercolor:"#ffffff",
        ribbonposition:"topleft",
        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
        navborder:4,
        navthumbtitleheight:20,
        textpositionmargintop:24,
        navswitchonmouseover:false,
        navarrowimage:"../images/navarrows-28-28-0.png",
        arrowtop:55,
        textstyle:"static",
        playvideoimageheight:64,
        navfonthighlightcolor:"#666666",
        showbackgroundimage:false,
        navpreviewborder:4,
        navopacity:0.8,
        shadowcolor:"#aaaaaa",
        navbuttonshowbgimage:true,
        navbuttonbgimage:"../images/navbuttonbgimage-28-28-0.png",
        textbgcss:"display:block; position:absolute; top:0px; left:0px; width:100%; height:100%; ",
        navpreviewarrowwidth:16,
        playvideoimagewidth:64,
        navshowpreviewontouch:false,
        bottomshadowimagewidth:110,
        showtimer:false,
        navradius:0,
        navshowpreview:false,
        navpreviewarrowheight:8,
        navmarginx:12,
        navfeaturedarrowimage:"../images/featuredarrow-16-8-0.png",
        showribbon:false,
        navstyle:"none",
        textpositionmarginleft:24,
        descriptioncss:"display:block; position:relative; margin-top:4px; font:14px Inder, Arial,Tahoma,Helvetica,sans-serif; color:#333;",
        navplaypauseimage:"../images/navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        numberingformat:"%NUM/%TOTAL ",
        navfontsize:12,
        navhighlightcolor:"#333333",
        navimage:"../images/bullet-16-16-3.png",
        navshowplaypausestandaloneautohide:false,
        navbuttoncolor:"#999999",
        navshowarrow:true,
        navshowfeaturedarrow:false,
        lightboxbarheight:48,
        titlecss:"display:block; position:relative; font: 18px Inder, Arial,Tahoma,Helvetica,sans-serif; color:#333;",
        ribbonimagey:0,
        ribbonimagex:0,
        navshowplaypausestandaloneposition:"bottomright",
        shadowsize:5,
        arrowhideonmouseleave:1000,
        navshowplaypausestandalonewidth:28,
        navfeaturedarrowimageheight:8,
        navshowplaypausestandaloneheight:28,
        backgroundimagewidth:120,
        navcolor:"#999999",
        navthumbtitlewidth:120,
        navpreviewposition:"top",
        arrowheight:48,
        arrowmargin:8,
        texteffectduration:1000,
        bottomshadowimage:"../images/bottomshadow-110-95-0.png",
        border:0,
        timerposition:"bottom",
        navfontcolor:"#333333",
        navthumbnavigationstyle:"arrow",
        borderradius:0,
        navbuttonhighlightcolor:"#333333",
        textpositionstatic:"top",
        navthumbstyle:"imageonly",
        textcss:"display:block; padding:12px 0px; text-align:center; ",
        navbordercolor:"#ffffff",
        navpreviewarrowimage:"../images/previewarrow-16-8-0.png",
        showbottomshadow:false,
        navdirection:"horizontal",
        textpositionmarginstatic:0,
        backgroundimage:"",
        navposition:"bottomright",
        arrowstyle:"mouseover",
        bottomshadowimagetop:95,
        textpositiondynamic:"bottomleft",
        navshowbuttons:false,
        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
        textpositionmarginbottom:24,
        slice: {
            duration:1500,
            easing:"easeOutCubic",
            checked:true,
            effects:"up,down,updown",
            slicecount:10
        },
        transition:"slice"
    });
});