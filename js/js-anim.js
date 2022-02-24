// function About() {
//   document.getElementById("About").style.display = "block";
//   document.getElementById("Skills").style.display = "none";
// }

// function Skills() {
//   document.getElementById("About").style.display = "none";
//   document.getElementById("Skills").style.display = "block";
// }

jQuery(document).ready(function ($) {
  $("#checkbox").change(function () {
    setInterval(function () {
      moveRight();
    }, 3000);
  });

  var slideCount = $("#slider ul li").length;
  var slideWidth = $("#slider ul li").width();
  var slideHeight = $("#slider ul li").height();
  var sliderUlWidth = slideCount * slideWidth;

  $("#slider").css({ width: slideWidth, height: slideHeight });

  $("#slider ul").css({ width: sliderUlWidth, marginLeft: -slideWidth });

  $("#slider ul li:last-child").prependTo("#slider ul");

  function moveLeft() {
    $("#slider ul").animate(
      {
        left: +slideWidth,
      },
      200,
      function () {
        $("#slider ul li:last-child").prependTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  function moveRight() {
    $("#slider ul").animate(
      {
        left: -slideWidth,
      },
      200,
      function () {
        $("#slider ul li:first-child").appendTo("#slider ul");
        $("#slider ul").css("left", "");
      }
    );
  }

  $("a.control_prev").click(function () {
    moveLeft();
  });

  $("a.control_next").click(function () {
    moveRight();
  });
});

const Dark = document.querySelector(".dark");
const Light = document.querySelector(".light");

Dark.addEventListener("click", function () {
  document.body.className = "dark";
});

Light.addEventListener("click", function () {
  document.body.className = "light";
});
