var prevScrollpos = window.pageYOffset;

if (window.matchMedia("screen and (min-width: 1024px)").matches) {
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (currentScrollPos > prevScrollpos) {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("date").style.display = "none";
        document.getElementById("logo").style.maxWidth = "250px";
      } else {
        document.getElementById("navbar").style.display = "block";
        document.getElementById("logo").style.maxWidth = "500px";
        document.getElementById("date").style.display = "block";
      }
      prevScrollpos = currentScrollPos;
    }
} else {
  document.getElementById("date").style.display = "none";
}
