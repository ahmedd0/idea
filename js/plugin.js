/*global console ,$ */

$(document).ready(function () {
    //==========================================
    // set Header height
    //========================================
    'use strict';
    $('.carousel ,#video').height($(window).height());
    $("#video").css("object-fit", "cover");

    $(window).resize(function () {
        $('.carousel #video').height($(window).height());
    });

    //==================================
    // nav bar 
    //==================================
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 15 && $(window).scrollTop() < $(".header").height()) {
            $(".navbar").hide(500);

        } else if ($(window).scrollTop() >= $(".header").height()) {
            console.log("fdf");
            $(".navbar").css("background-color", "cornflowerblue");
            $(".navbar").show();
        
        } else {
            $(".navbar").css("background-color", "transparent").show();
        }
    });
    //==========================================
    // data count to     
    //==========================================
    var i = 0,
        c;
    $('.co').text(i);
    function count() {
        $(".co").each(function () {
        
            if ($(this).text() >= $(this).data("to")) {
                clearInterval(c);
            } else {
                $(this).text(i++);
            }


        });

    }


    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(".icon").offset().top - 200) {
            var c = setInterval(count, 0.1);
        }
        
    });

    //==========================================
    //video
    //==========================================
    var vid = document.getElementById("video");
    vid.play();
    vid.loop = "true";
});