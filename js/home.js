$(document).ready(function(){
//nav bar slide
  $("span.toggle-button").click(function(){
    if($("nav").css("right")==="0px"){
      $('nav').animate({
                right:-100+'%'
                  },400)
      $("span.toggle-button").html("<i class=\"fas fa-bars\"></i>")
      }
    else{
      $('nav').animate({
                right: 0
                  },400)
      $("span.toggle-button").html("<i class=\"fas fa-times\"></i>")
    }
  })
  //*****navbr*****
  //start tabs slide
  $("a").click(function(){
      var aHref=$(this).attr("href");
      var d=$(aHref).offset().top;
      $("body ,html").animate({scrollTop:d},1000)
  })
  //start slide up button
  $(".up").click(function(){
      $("body , html").animate({scrollTop:'0'},(1000))
  })
  $(window).scroll(function(){

      var scrlTop = $(window).scrollTop();

      if(scrlTop >500)
              {
                  $(".up").fadeIn(200)
              }
      else
          {
              $(".up").fadeOut(200)
          }
  })
})
