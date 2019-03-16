var length,
currentIndex = 0,
interval,
hasStarted = false, //是否已经开始轮播
t = 1500; //轮播时间间隔
length = $('.slider-panel').length;

// var JIM = new JMessage(); //极光对象

//将除了第一张图片隐藏
$('.slider-panel:not(:first)').hide();
$('.slider-pane2:not(:first)').hide();
$('.slider-pane3:not(:first)').hide();
$('.slider-pane4:not(:first)').hide();
//将第一个slider-item设为激活状态
$('.slider-item:first').addClass('slider-item-selected');


$('.slider-item').hover(function(e) {
stop();
var preIndex = $(".slider-item").filter(".slider-item-selected").index();
currentIndex = $(this).index();
play(preIndex, currentIndex);
}, function() {
start();
});


/**
   * 向前翻页
   */
  function pre() {
    var preIndex = currentIndex;
    currentIndex = (--currentIndex + length) % length;
    play(preIndex, currentIndex);
  }
  /**
   * 向后翻页
   */
  function next() {
    var preIndex = currentIndex;
    currentIndex = ++currentIndex % length;
    play(preIndex, currentIndex);
  }

function play(preIndex, currentIndex) {
$('.slider-panel').eq(preIndex).fadeOut(0)
  .parent().children().eq(currentIndex).fadeIn(0);
$('.slider-pane2').eq(preIndex).fadeOut(0)
    .parent().children().eq(currentIndex).fadeIn(0);
$('.slider-pane3').eq(preIndex).fadeOut(0)
    .parent().children().eq(currentIndex).fadeIn(0);
$('.slider-pane4').eq(preIndex).fadeOut(0)
    .parent().children().eq(currentIndex).fadeIn(0);
$('.slider-item').removeClass('slider-item-selected');
$('.slider-item').eq(currentIndex).addClass('slider-item-selected');
}

/**
* 开始轮播
*/
function start() {
if(!hasStarted) {
  hasStarted = true;
  interval = setInterval(next,t);
}
}

api.addEventListener({
  name:'swiperight'
}, function(ret, err){
  pre();
});
api.addEventListener({
  name:'swipeleft'
}, function(ret, err){
next();
});
start();
