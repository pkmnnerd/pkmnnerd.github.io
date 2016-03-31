var h = 100;
var sh = 10;
var state = 0;
var infoh = 10;

$(document).ready( function(){
    headerh = $('.header').height();
    infoh = $('#info').height();
    h = $('#shrinker').height();
    sh = $("#spacer").height();
    $('#main').css('padding-top', (headerh + 40) + 'px');
})

$(window).scroll(function()
{

    var sc = $(window).scrollTop();
    /*
    if ((h-sc) < $("table").height() && (h-sc) >= $("table").height() -40){
        var padding = 40+h-sc-$("table").height();
        if (padding < 0)
            padding = 0;
        $('#shrinker').height($("table").height());
        $('.header').css({'padding-top': padding + 'px'});
        $('#info').stop().animate({'opacity':0},0);
        $('#info').css({'display':'block'});
        if (state === 3) {
            $('.header').stop().animate({'font-size': '150%'},250);
            $('#shrinker').animate({'left': '0px', 'bottom' :'0px'},250);
        }
        state = 2;
    }
    */
    if((h-sc) < 20) {

        if (state !== 3) {
            $('#shrinker').animate({"height":'0px'},250);
            $('#info').animate({"height":'0px'},250);
            $('.header').stop().animate({'padding-top':'0px'},250);
            $('.name').stop().animate({'font-size': '18px', 'padding-top':'0px'},250);
            $('.navi').css({'position': 'relative', 'bottom': '0', 'left': '0'})
            $('#main').animate({'padding-top': (sc + 64) + 'px'}, 250);
        }

        $('#info').animate({'opacity':0},0);
        state = 3;

    }

    if  (sc > 0 && (h-sc) >= 20) {
        $('#info').css({'display':'block'});
        $('#shrinker').height(h-sc+'px');
        $('#info').css({'opacity':(h-2*sc)/h});
        $('.header').css('padding-top', '40px');
        if (state === 3){
            $('.header').stop().animate({'padding-top':'40px'},250);
            $('.name').stop().animate({'font-size': '400%', 'padding-top':'0px'},250, 'swing', function() {$('.navi').css({'position': 'absolute', 'bottom': '22', 'left': '15'})});
            $('#info').animate({"height":infoh + 'px'},250);
            $('#main').animate({'padding-top': (40 + headerh) + 'px'}, 250);
        }
        state = 1;
    }
    $('#space').height($('.header').height());
    var op = 1-((headerh-1.5*sc)/headerh*.8)

    $('.header').css({'background': 'linear-gradient(rgba(76,185,80,' + op + '), rgba(76, 185, 80, ' + op + ')), url("image2.jpg")', 'background-size': '100%'});



});
