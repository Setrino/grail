$(document).ready(function(){

    /*$('.right_slider, .left_slider').click(function(){
        var slider = $('.slider');
        if(slider.attr('src') == 'images/Screen%20Shot%202014-04-15%20at%2023.06.27.png'){
            slider.attr('src', 'images/Screen%20Shot%202014-04-15%20at%2023.23.05.png');
            $('.top_text').text('6.461231° 124.670698°');
            $('.bottom_text').text('La Grail Srl, Via Gradisca, 66/1, Pasiano Pordenone');
        }else{
            slider.attr('src', 'images/Screen%20Shot%202014-04-15%20at%2023.06.27.png');
            $('.top_text').text('26.983731° 4.637498°');
            $('.bottom_text').text('Holy Grail Pharmacy, Santo Nino, Phillippines');
        }
    });*/

    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
        slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#7E8F7C', '#7E8F7C', '#7E8F7C'],
        css3: true
    });
});