var d = new Date();
$ (document) .ready(function() {
    $('.switch') .click (function() {
        $('.menu') .toggleClass ('visible');
    });
});
$('.przyklad').hide();
$('#klik').click(function(){
    $('.przyklad').slideDown(1000);
});

$(document) .ready(function(){
  $(".pass") .focus(function(){
    $(this) .css("background-color","#CCFFFF");
  });
  $(".pass") .blur(function(){
    $(this) .css("background-color", "white");
  });
});
$ (document) .ready(function() {
    $('.switch') .click (function() {
     $('.line') .css("text-decoration", "overline", "#5D2275");
    });
});
document.getElementById("help") .innerHTML=("Książki, z których korzystam"); 
document.getElementById("help").style.textTransform ="uppercase";


if (d = new Date().getHours() < 18);
alert("have a good day!");


  

/*function onMouse() {
    var element = document.getElementById("");
    element.style.color = "#fff";

}
function onMouseOut() {
  var element = document.getElementById("");
  element.style.color = "#D2C0AC";

}*/



