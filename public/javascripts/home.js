function register(){
    console.log("register!");
}

function login(){
    console.log("login!");
}

function search(){
    console.log("search!");
}



$.fn.extend({
    animateCss: function (animationName, nextAni, text) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (nextAni&&nextAni!=""){
                $(this).text(text).animateCss(nextAni, "", "");
            }
        });
    },
    animateText: function (i){
        var words = ['最真实的申请数据', '最实时的申请资讯', '申请过程中不再盲目'];
        this.text(words[i+1]).fadeIn();
    }
});


$(document).ready(function(){

    $('#jumbotron-text').animateCss('fadeInLeft');
    $('#login').animateCss('fadeInUp');
    $('#showMoreSection').animateCss('fadeIn');

    $('#showMore').click(function(){
        $("html, body").animate({ scrollTop: $('#showMore').offset().top }, 500);
    });

    // dynamic text
    function switchText(ele){
        var words = ['最真实的申请数据和材料', '最实时的申请资讯', '申请季不再盲目']; // set up words here
        var i = 1;

        var startTime = new Date().getTime();

        setInterval(function(){
            $('#taglines').animateCss('fadeOutDown', 'fadeInDown', words[i]);
            i++;
            if(i>=words.length) {
                i = 0;
            }
        }, 3000);
    }

    //$('.application').addClass("hide");

    $( ".application" ).each(function() {
        var that = $(this);
        that.addClass( "hide" );
        that.waypoint({
            handler: function() {
                that.removeClass("hide");
                that.addClass("animated slideInLeft"); // set up the scroll animation here
            },
            offset: '100%'
        });
    });

    setTimeout(switchText($('login')), 2000);
    //switchText($('#taglines'));

    $('#search_submit').click(function(){
        search();
    });
});