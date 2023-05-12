document.addEventListener("DOMContentLoaded", function () {
  var tabList = [].slice.call(document.querySelectorAll("#myTab a"));
  tabList.forEach(function (tab) {
    var tabTrigger = new bootstrap.Tab(tab);

    tab.addEventListener("click", function (event) {
      event.preventDefault();
      tabTrigger.show();
    });
  });
});

var collapseElement = document.getElementById("collapseExample");
var buttonElement = document.querySelector(
  '[data-bs-target="#collapseExample"]'
);
var bsCollapse = new bootstrap.Collapse(collapseElement, { toggle: false });

collapseElement.addEventListener("show.bs.collapse", function () {
  buttonElement.innerHTML = "Read less...";
});

collapseElement.addEventListener("hide.bs.collapse", function () {
  buttonElement.innerHTML = "Read more...";
});