function register(){
    console.log("register!");
}

function login(){
    console.log("login!");
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});



$(document).ready(function(){
    $('#jumbotron-text').animateCss('fadeInLeft');
    $('#login').animateCss('fadeInUp');

    $('h1').click(function(){
        console.log("YEAH!");
        $('#login').animateCss('shake');
    });
});