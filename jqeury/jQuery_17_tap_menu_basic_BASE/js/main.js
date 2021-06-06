$(function () {

    let tabAnchor = $('.tabs-nav li a'), //누구를 클릭할지
        tabPanel = $('.tabs-panel');    //누구를 보이고 안고이게 할지

    //링크를 클릭하면 할일 작성
    tabAnchor.click(function(e){
        e.preventDefault();  //링크의 기본 속성 막기 a태그는 새로고침되니까
         tabAnchor.removeClass('active');
         $(this).addClass('active');
        //$(this).addClass('active').siblings().removeClass('active') //(사용불가 왜? 형제자매가 없기때문) 그 요소만 추가하고 나머지는 뺀다
        tabPanel.hide();
        let w = $(this).attr('href');
        //attr('src','naver.com') --> 추가
        console.log(w)
        $(w).show();
    })

    

});

