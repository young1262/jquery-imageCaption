// 첫번째줄 .first
$('.first .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({opacity:1},400);
  $(this).addClass('active');
})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({opacity:''},400);
  $(this).removeClass('active');
})

// 두번째줄 .second - 왼쪽에서 가운데로
$('.second .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({left:0},400);
  $(this).addClass('active');
})
.on('mouseleave',function(){
  $(this).find('.area').stop().animate({left:'-100%'},400);
  $(this).removeClass('active');
})

// 세번째 줄 .third -글씨만 중앙에서 나타남
$('.third .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400,'easeInOutExpo');
  $(this).addClass('active');
  
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({bottom:'-65px'},400,'easeInOutExpo');
  $(this).delay(300).removeClass('active');
})

// 네번째줄 .fours
$('.fours .item').on('mouseenter', function(){
  $(this).find('.area').stop().delay(300).animate({bottom:0},400,);
  $(this).addClass('active');
  
})
.on('mouseleave', function(){
  $(this).find('.area').stop().animate({bottom:'100%'},400,);
  $(this).delay(300).removeClass('active');
})