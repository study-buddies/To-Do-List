$(function(){
  $(".state-buttons").html($(".state-buttons").attr("data-start-state-text"));
  $(".tabs-nav li:first-child a").click();
});


$(".state-buttons").on("click",function(){
  if($(this).attr("state") === "0") {
    $(this).addClass("waiting");
    $(this).html($(this).attr("data-first-state-text"));
    $(this).attr("state", "1")
  } else if($(this).attr("state") === "1") {
    $(this).addClass("success");
    $(this).removeClass("waiting");
    $(this).html($(this).attr("data-second-state-text"));
    $(this).attr("state", "2")
  } else if($(this).attr("state") === "2") {
    $(this).removeClass("success");
    $(this).html($(this).attr("data-start-state-text"));
    $(this).attr("state", "0")
  }
});


$(".tabs-nav a").on("click",function(){
  let toggle = $(this).attr("data-toggle");
  $(".panels").removeClass("active");
  $("#" + toggle).addClass("active");
  $(".tabs-nav a").removeClass("active");
  $(this).addClass("active");
  $(".tabs-nav").css("border-bottom-color",$(this).css("background-color"));
});
