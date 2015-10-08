//  Set the height of the header to the height of the video player 
function setIntroVideoSize() {
	var videoHeight = $('#intro-video').height();

    var tabsHeight = 59;
    var windowHeight = window.innerHeight;
	
    $('.header').css('max-height', (windowHeight - tabsHeight) + 'px'); 
    $('.header').css('height', videoHeight + 'px');
    $('.overlay').css('height', videoHeight + 'px');

    var headerHeight = $('.header').height();

    $('article').css('top', headerHeight + 'px'); 
}

//  Adjust the header when the browser width is changed
function adjustHeaderOnResize() {
    "use strict";
    
	$(window).resize(function () {
		setIntroVideoSize();
	});
}



function tabEventHandler() {
    "use strict";
	$('nav li').click(function (evt) {
        
        evt.stopImmediatePropagation();
        
        var tab_height = $('.tabs').height();
        var section = $(this).find('a').attr('class');

        var section_loc = $('.contents').find('.' + section).offset().top - tab_height;

        $('body').animate({scrollTop:section_loc}, 'slow');

	});
}

function linkEventHandler() {
    $('.splash-letter span').click(function (evt) {
        evt.stopImmediatePropagation();

        var tab_height = $('.tabs').height();
        var section = $(this).attr('target-tab');

        var section_loc = $('.contents').find('.' + section).offset().top - tab_height;

        $('body').animate({scrollTop:section_loc}, 'slow');
    });
}

function stickyNav() {  
    $('.tabs').scrollToFixed({
        zIndex : 1000000,
        fixed: function() {
            $('.splash-letter').css('visibility', 'hidden');
            $('.header').css('overflow', 'visible');
        },
        unfixed: function() {
            $('.splash-letter').css('visibility', 'visible');
            $('.header').css('overflow', 'hidden');
        }
    });

    /*
    var stickyNavTop = $('nav').offset().top;

    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  
        
        
        if (scrollTop > stickyNavTop) {   
            $('nav').addClass('sticky');  
        } else {  
            $('nav').removeClass('sticky');   
        }  
    };  
  
    stickyNav();  

    $(window).scroll(function() {  
        stickyNav();  
    });  
*/
}
/*
function loadRSVPModal {

require(["mojo/signup-forms/Loader"], function(L) { 
    L.start({"baseUrl":"mc.us5.list-manage.com","uuid":"f99ffe693efb9c8d734e6507c","lid":"e226bfe8bb"}) })


}
*/


$(function initilize() {
    "use strict";
	window.setTimeout(function() {setIntroVideoSize();}, 300); 
    window.setTimeout(function() {stickyNav();}, 500); 
	adjustHeaderOnResize();
	tabEventHandler();
    linkEventHandler();
});



