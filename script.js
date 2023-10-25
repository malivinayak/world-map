$(document).ready(function () {
    $(".country").hover(function () {
        var gmt_country = $(this).attr("id");
        var options = {
            format: '<span class=\"dt\">%A, %d %B %I:%M:%S %P</span>',
            timeNotation: '12h',
            am_pm: true,
            utc: true,
            utc_offset: gmt_country
        };
        $('.jclock').jclock(options);

        var country_time = $(".jclock").text();

        $(this).attr("data-content", country_time);
    });

    $('[data-toggle="popover"]').popover({ trigger: "hover" });
});
