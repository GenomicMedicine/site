 $("#carousel-captions .carousel-inner").children().first().addClass("active");    
        $(".navbar-nav > li.dropdown").hover(function () {
            $(this).addClass("open");
        }, function () {
            $(this).removeClass("open");
        });
        $(".input-group-btn > img").hover(function () {
            $(".search").addClass("display");
        }, function () {
            $(this).removeClass("display");
        });
/*栏目左侧*/

$(".mb-j").click(function(){
  $(".column_left_fa_list_ul").slideToggle(); 
$(".colbox1").toggleClass("border-notop" );
});

$('.infolist p').find('img').parents().css('text-indent', '0px');