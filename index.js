// $(document).ready(function () {
//   $("p").click(function () {
//     $("p").hide();
//   });
// });

// $(document).ready(function () {
//   $("p").dblclick(function () {
//     $("p").hide();
//   });
// });

// $(document).ready(function () {
//   $("#p1").mouseenter(function () {
//     alert("Your mouse entered on paragraph 1 ");
//   });
// });

// $(document).ready(function () {
//   $("#p1").mouseleave(function () {
//     alert("Your mouse left on paragraph 1 ");
//   });
// });

// $(document).ready(function () {
//   $("#p1").mousedown(function () {
//     alert("Your mouse down on paragraph 1 ");
//   });
// });

// $(document).ready(function () {
//   $("#p1").mouseup(function () {
//     alert("Your mouse up on paragraph 1 ");
//   });
// });

// $(document).ready(function () {
//   $("p").on({
//     mouseenter: function () {
//       $(this).css("background-color", "gray");
//     },
//     mousedown: function () {
//       $(this).css("background-color", "green");
//     },
//     click: function () {
//       $(this).css("background-color", "purple");
//     },
//   });
// });

// $(document).ready(function () {
//   $("#hidden").click(function () {
//     $("h3").hide(1000);
//   });
//   $("#visible").click(function () {
//     $("h3").show(1000);
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("h3").toggle(1000);
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#div1").fadeIn();
//     $("#div2").fadeIn(1000);
//     $("#div3").fadeIn(3000);
//     $("#div4").fadeIn(5000);
//   });
//   $("button").click(function () {
//     $("#div1").fadeOut(5000);
//     $("#div2").fadeOut(3000);
//     $("#div3").fadeOut(1000);
//     $("#div4").fadeOut();
//   });
//   $("button").click(function () {
//     $("#div1").fadeToggle(5000);
//     $("#div2").fadeToggle(3000);
//     $("#div3").fadeToggle(1000);
//     $("#div4").fadeToggle();
//   });
// $("button").click(function () {
//   $("#div1").fadeTo(1000, 0.2);
//   $("#div2").fadeTo(1000, 0.4);
//   $("#div3").fadeTo(1000, 0.6);
//   $("#div4").fadeTo(1000, 0.8);
// });
// });

// $(document).ready(function () {
// $("#topbar").click(function () {
//   $("#panel").slideDown(1000);
// });
// $("#topbar").click(function () {
//   $("#panel").slideUp(1000);
// });
// $("#topbar").click(function () {
//   $("#panel").slideToggle(1000);
// });
// $("button").click(function () {
//   $("#square").animate(
// { left: "50%", opacity: 0.25, height: "toggle" },
//   { left: "45%", opacity: 0.1, height: "+=200px", width: "+=200px" },
//   1000
// );
// });
// var square = $("#square");
// square.animate({ width: "150px", opacity: "0.9" }, 500);
// square.animate({ height: "100px", opacity: "0.5" }, 1000);
// square.animate({ width: "200px", opacity: "0.5" }, 1000);
// square.animate({ height: "250px", opacity: "0.9" }, 500);
// $("button").click(function () {
// $("#square").hide(1000, function () {
//   alert("The Square is now Hidden");
// });
// $("#square").css("background", "#fff567").slideUp(2000).slideDown(2000);
// });
//   $(function () {
//     $("#drag").draggable();
//   });
// });

$(document).ready(function () {
  // $(function () {
  //   $("#accordion").accordion();
  // });
  // $("#button1").click(function () {
  //   alert($("#line1").text());
  // });
  // $("#button2").click(function () {
  //   alert($("#line1").html());
  // });
  // $("button").click(function () {
  //   alert($("#name").val());
  // });
  // $("button").click(function () {
  //   alert($("#ya").attr("href"));
  // });
  $("btn1").click(function () {
    $("#text1").text("New text line");
  });

  $("btn2").click(function () {
    $("#text2").html("<b>Bold text line</b>");
  });

  $("btn3").click(function () {
    $("#name").val("Jane Wills");
  });
});
