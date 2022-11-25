// sticky navbar script //

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
if(this.scrollY>500){
    $('.scroll-up-btn').addClass("show");
}else{
    $('.scroll-up-btn').removeClass("show");
}
});

// scrolling responsive navbar script //

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    $('html').css("scrollBehavior","auto");
});

$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior","smooth");
});


$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

// slideing section script //

$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        700:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false
        }}
    });
});