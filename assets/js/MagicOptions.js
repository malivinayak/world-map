options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 31,
    "outerHeight": 31
};
magicMouse(options);

$(document).ready(function () {
    var svgPaths = $("svg path");
    svgPaths.click(function () {
      var countryName = $(this).data("country");
      alert("You clicked on " + countryName);
    });
  });
  
