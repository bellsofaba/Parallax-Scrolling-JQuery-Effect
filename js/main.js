$(window).on("scroll", function () {
 let parallax = $(".parallax");
 let scrollPosition = $(this).scrollTop();
 parallax.css("transform", "translateY(" + scrollPosition * 0.5 + "px" + ")");
});