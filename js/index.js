// scroll
let secondSectionTop=$('.second').offset().top
console.log(secondSectionTop)

$('.scroll').click(function(){

    $('body,html').animate({scrollTop:'0px'},500)
 })
$(window).scroll(function(){
    // console.log($(window).scrollTop()) 
    if($(window).scrollTop()>=secondSectionTop)
    
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

 $('nav a[href^="#"]').click(function () {
    let href = $(this).attr('href')  //#home
    let topSec = $(href).offset().top
    $('html,body').animate({ scrollTop: topSec }, 1000)
})


//  cordion
$('.head').click(function() {
    
    $('.body').not($(this).next('.body')).slideUp(500);
    // console.log(this)
   
    $(this).next('.body').slideToggle(500);
  });

//   count

let counter=100;

$('textarea').on('input',function(){
   console.log(counter-this.value.length)
   if(counter-this.value.length<=0){
    $('.count').html('your available character finished ')
   

   }
      else{
        $('.count').html(counter-this.value.length)
      }  
  
})

// event time
window.onload = function() {
   
    countDownToTime("10 october 2023 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

    timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }
