$(function(){

  $('.Accordion__sublist').css('display','none');
  $('.Accordion__item').on('click',function(){
    var $next = $(this).next();
    $('.Accordion__sublist').not($next).slideUp();
    $next.not(':animated').slideToggle();
  })
});
