$(function () {
let $window = $(window),
$header = $('.page-header'),
$headerClone = $header.contents().clone(),
//새그릇
$headerCloneContainer = $('<div class="page-header-clone"></div>'), 
$threshold = $header.offset().top + $header.outerHeight();
//윈도우 맨위에서 상단까지 + 헤더박스높이
console.log($threshold);
$headerCloneContainer.append($headerClone);
$('body').append($headerCloneContainer);

$window.on('scroll', $.throttle(1000/15 ,function(){ //초당 15번
    if($window.scrollTop() >= $threshold){
        //$headerCloneContainer.css('top','0px')
        $headerCloneContainer.addClass('visible');
    }else{
        //$headerCloneContainer.css('top','-35px')
        $headerCloneContainer.removeClass('visible');
    }
}));
});
