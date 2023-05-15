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

var textElements = document.getElementsByClassName("card-text");
var limit = 100;

if (window.innerWidth < 440) {
  for (var i = 0; i < textElements.length; i++) {
    var text = textElements[i].textContent;

    if (text.length > limit) {
      textElements[i].textContent = text.substring(0, limit) + "...";
    }
  }
}
