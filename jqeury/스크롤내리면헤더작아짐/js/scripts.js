/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
/*
$(function(){
    let $window = $(window);
    let header = $('#main-header')
    let threshold = header.offset().top + header.outerHeight();
    console.log(threshold)
    $window.on('scroll',function(){
if($window.scrollTop() >= threshold ){
    $('header').css('height','4em');
    $('li').css('line-height','4em')
} else{
    $('header').css('height','6em');
    
}
    })
})
*/
$(function(){
let $window = $(window),
    mainHeader = $('#main-header')
    defaultLogo = 'images/logo.svg'
    smallLogo = 'images/logo-shrink.svg'

    $window.scroll(function(){
        if($window.scrollTop() > 100){
            if(!mainHeader.hasClass('shrink')){
                mainHeader.addClass('shrink');
                switchImages(smallLogo);
            }
        }else{
            if(mainHeader.hasClass('shrink')){
                mainHeader.removeClass('shrink');
                switchImages(defaultLogo);
            }
        }
    })
})

function switchImages(newPath){
    let logo = $('#logo');
    logo.fadeOut(300,function(){
        logo.attr('src',newPath)
        logo.fadeIn(300)
    });   //로고 사라지게함
    
}
/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/

