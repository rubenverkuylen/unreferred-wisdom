$(document).ready(function () {
    var divs = $('.quote>div');
    var now = 0; // currently shown div
    divs.hide().first().show();
    $("#button").click(function (e) {
        divs.eq(now).hide();
        now = (now + 1 < divs.length) ? now + 1 : 0;
        divs.eq(now).show(); // show next
    });
});
