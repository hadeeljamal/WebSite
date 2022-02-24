$(document).ready(function () {
    $(".progress-value > span").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3500,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });

// $(document).ready(function () {
//   $("button").click(function () {
//     $(this).addClass("active").siblings().removeClass("active");
//   });
//   $("button.About").click(function () {
//     $("div.About").show();
//     $("div.Skills").css("display", "none");
//   });
//   $("button.Skills").click(function () {
//     $("div.Skills").show();
//     $("div.About").css("display", "none");
//   });
// });

// function About() {
//   document.getElementById("About").style.display = "block";
//   document.getElementById("Skills").style.display = "none";
// }

// function Skills() {
//   document.getElementById("About").style.display = "none";
//   document.getElementById("Skills").style.display = "block";
// }

AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    delay: 100
});


/**
 * Back to top button
 */
let backtotop = select('.back-to-top')

window.addEventListener('load', toggleBacktotop)
onscroll(document, toggleBacktotop)


$('.sec-nav').localScroll();