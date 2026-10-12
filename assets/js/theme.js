// Light/dark toggle. The site is light by default; dark only when the visitor picks it.
(function () {
  // Lets iOS Safari apply :active on touch-down; passive, so it never delays scrolling.
  document.addEventListener("touchstart", function () {}, { passive: true });

  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function sync() {
    button.setAttribute("aria-pressed", current() === "dark" ? "true" : "false");
  }
  sync();

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    function apply() { root.setAttribute("data-theme", next); sync(); }
    // One cross-fade of the whole page; instant swap where unsupported.
    if (document.startViewTransition) document.startViewTransition(apply);
    else apply();
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
