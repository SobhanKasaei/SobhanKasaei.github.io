// Show the top bar's scroll edge only while content is underneath it.
(function () {
  var bar = document.querySelector(".masthead");
  var sentinel = document.querySelector(".scroll-sentinel");
  if (!bar || !sentinel || !("IntersectionObserver" in window)) {
    if (bar) bar.classList.add("is-scrolled");
    return;
  }
  new IntersectionObserver(function (entries) {
    bar.classList.toggle("is-scrolled", !entries[0].isIntersecting);
  }).observe(sentinel);
})();
