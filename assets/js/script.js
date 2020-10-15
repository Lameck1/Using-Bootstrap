var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var date = document.getElementById("date");
var logo = document.getElementById("logo");
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.zIndex = "-1";
    date.style.display = "none";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
