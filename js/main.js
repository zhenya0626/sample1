(function ($) {
    let scrollPosi = 0;
    
	$(window).scroll(function () {
		scrollPosi = $(document).scrollTop();
        var w = $(window).width();

        // if(w > 1024){
            if(scrollPosi < 50){
                $('.header-logo-links').css('top', 50-scrollPosi);

            }else{
                $('.header-logo-links').css('top', 0);

            }

        // } else {
        //     $('#body').stop(true, true).animate({
        //         'background-position-y': -scrollPosi / 3 + 'px'
        //     }, 100);
        //     if(scrollPosi < 110){
        //         $('#header').addClass('opacity-zero');
        //         $('#header').css('height', 200);
        //     }else{
        //         $('#header').removeClass('opacity-zero');
        //         $('#header').css('height', 130);
        //     }
        //     $(".pc").css('display','none');
        // }
	});
 
})(jQuery);