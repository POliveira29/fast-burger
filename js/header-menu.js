$(".header__menu").click(function () {
  $("body").toggleClass("scroll-disabled")
  $(".overlay-menu").toggleClass("active")
  $(".header__menu").toggleClass("active")
  $(".menu-bar").toggleClass("active")
  $(".header__nav").toggleClass("active")
  $(".nav-item").toggleClass("active")
});
