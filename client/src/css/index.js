// Scrolling navbar script
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos) {
    document.getElementById("contnav").style.top="0";
  } else {
    document.getElementById("contnav").style.top="-140px";
  }
  prevScrollpos=currentScrollpos;
}