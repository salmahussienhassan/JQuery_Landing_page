$('.scroll').click(function(){
    $('body,html').animate({scrollTop:'0px'},500)
 })

 $('.open').click(function(){
    $('nav').animate({left: '0'},500)
 })

 $('.fa-xmark').click(function(){
    $('nav').animate({left: '-240px'},1000)
 })