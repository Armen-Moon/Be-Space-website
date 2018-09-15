// Navigation click effect
var navItems = document.querySelectorAll("header nav li a");

for (let i = 0; i < navItems.length; i++) {
  navItems[i].onclick = function (){
    for(let j = 0; j < navItems.length; j++) {
      navItems[j].removeAttribute("class");
    }
    this.setAttribute("class", "active");
  }
}

// Mobile menu
$("#burger-nav").click(function () {
  $("header nav ul").slideToggle();
});

// Test jQuery scroll()
// $(window).scroll(function () {
//   if ($(window).scrollTop() > $("#about").offset().top) {
//     $("header").css({
//       "background" : "#000",
//     });
//   } else {
//     $("header").css({
//       "background" : "#1110"
//     });
//   }
// });
