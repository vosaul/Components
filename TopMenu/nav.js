var lastScrollTop = 0;
var outer = document.getElementById("nav_outer");

window.onscroll = () => {
  let st = this.scrollY;

  if (st < lastScrollTop) {
    outer.classList.add("nav_fixed");
    outer.classList.remove("nav_null");
  } else {
    outer.classList.remove("nav_fixed");
    outer.classList.add("nav_null");
  }
  lastScrollTop = st;
};
