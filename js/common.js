$(document).ready(function(){
    
    //Same-site:None
    function launchCrossPlatform(){
        document.cookie = 'same-site-cookie=foo; SameSite=Lax';
        document.cookie = 'cross-site-cookie:bar; SameSite=None; Secure';
    }
    
    //dim - show & hide
    $('.dim').click(function(){
        $(this).hide();
        $(this).siblings('.sch_box').hide();
    });
    //search-btn click
    $('.btn_search').click(function(){
        $('.sch_box').show();
        $('.dim').show();
    });
    
    //search-form close-btn
    var btnClose = $('.close_btn');

    $('.close_btn').click(function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().removeClass('active');
        $('.search_field').val('');
    });

    if ( $('.search_field').val().length > 0 ) {
        btnClose.show();
    };

    $('.search_field').on('focusin', function () {
        if( $(this).val().length > 0 ) {
            btnClose.show();
        } else {
            btnClose.hide();
        }
    });

    $('.search_field').on('keyup', function () {
        if( $(this).val().length > 0 ) {
            // Enable submit button
            $(this).parent().addClass('active');
            btnClose.show();
       } else {
            // Disable submit button
            $(this).parent().removeClass('active');
            btnClose.hide();
       }
    });
    
    //tab-category
    $('.tab-cont').hide();
    $('.tabFirst').show();
    
    $('.btn-tab').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        
        var idx = $('.btn-tab').index(this);
        $('.tab-cont').hide();
        $('.tab-cont').eq(idx).show();
        
    });
    
    //footer-family-site
    $('.btn-site').click(function(){
        $('.site-list').toggleClass('active');    
    });
    
    //popup-sns
    $('.btn_share').click(function(){
        $('.popup-sns').show();    
    });
    //popup-sns close 
    $('.close_popup').click(function(){
        $('.popup-sns').hide();
    });
    
    
});//end