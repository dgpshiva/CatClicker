var clickcount = 0;
var $clickCountElem = $('#click-count');

$('#cat-img').click(function(e) {
    clickcount += 1;
    $clickCountElem.text(clickcount);
  });
