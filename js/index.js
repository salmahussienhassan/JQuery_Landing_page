// scroll
let secondSectionTop=$('.second').offset().top
console.log(secondSectionTop)

$('.scroll').click(function(){

    $('body,html').animate({scrollTop:'0px'},500)
 })
$(window).scroll(function(){
    console.log($(window).scrollTop()) 
    if($(window).scrollTop()>secondSectionTop)
    
   {
    $('.scroll').css('display','flex')
   $('.open').addClass('open-scroll')
}
    else
    {$('.scroll').css('display','none')
    $('.open').removeClass('open-scroll')
}
})

// aside
 $('.open').click(function(){
    $('nav').animate({left: '0'},500)
 })

 $('.fa-xmark').click(function(){
    $('nav').animate({left: '-240px'},1000)
 })


//  cordion
$('.head').click(function() {
    
    $('.body').not($(this).next('.body')).slideUp(500);
    // console.log(this)
   
    $(this).next('.body').slideToggle(500);
  });