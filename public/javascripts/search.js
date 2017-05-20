/**
 * Created by HYH on 19/5/2017.
 */
$(document).ready(function(){
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

    var tests = ["SAT", "ACT", "TOEFL", "GPA"];
    var ranges = [1600, 40, 120, 4.0];

    for (var i=0; i<tests.length; i++){
        /*
        $("#" + tests[i] + "-range").slider({
            range: true,
            min: 0,
            max: ranges[i],
            values: [0, ranges[i]],
            slide: function (event, ui) {

                $("#" + tests[i] + "-min").html(ui.values[0] + '分');
                $("#" + tests[i] + "-max").html(ui.values[1] + '分');
            }
        });
        $("#" + tests[i] + "-min").html($("#" + tests[i] + "-range").slider("values", 0) + '分');
        $("#" + tests[i] + "-max").html($("#" + tests[i] + "-range").slider("values", 1) + '分');
        */
        if(tests[i]!="GPA"){
            $("#" + tests[i] + "-range").slider({
                range: true,
                min: 0,
                max: ranges[i],
                values: [0, ranges[i]],
                slide: function (event, ui) {
                    var temp = $("#"+this.id).parent().attr('id');

                    $("#" + temp + "-min").html(ui.values[0] + '分');
                    $("#" + temp + "-max").html(ui.values[1] + '分');
                }
            });
            $("#" + tests[i] + "-min").html($("#" + tests[i] + "-range").slider("values", 0) + '分');
            $("#" + tests[i] + "-max").html($("#" + tests[i] + "-range").slider("values", 1) + '分');
        } else {
            $("#" + tests[i] + "-range").slider({
                range: true,
                min: 0,
                max: ranges[i],
                step: 0.1,
                values: [0, ranges[i]],
                slide: function (event, ui) {
                    var temp = $("#"+this.id).parent().attr('id');
                    $("#" + temp + "-min").html(parseFloat(Math.round(ui.values[0] * 10) / 10).toFixed(1) + '');
                    $("#" + temp + "-max").html(parseFloat(Math.round(ui.values[1] * 10) / 10).toFixed(1) + '');
                }
            });
            $("#" + tests[i] + "-min").html($("#" + tests[i] + "-range").slider("values", 0) + '.0');
            $("#" + tests[i] + "-max").html($("#" + tests[i] + "-range").slider("values", 1) + '.0');
        }

    }

});
