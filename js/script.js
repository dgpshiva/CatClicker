var catname1 = "Cat 1";
var catname2 = "Cat 2";

var clickcount1 = 0;
var clickcount2 = 0;

var $clickCountElem1 = $('#click-count1');
var $clickCountElem2 = $('#click-count2');

var $cat1Name = $('#cat1-name');
var $cat2Name = $('#cat2-name');


$cat1Name.text(catname1);
$cat2Name.text(catname2);

$('#cat1-img').click(function(e) {
    clickcount1 += 1;
    $clickCountElem1.text(clickcount1);
  });

  $('#cat2-img').click(function(e) {
    clickcount2 += 1;
    $clickCountElem2.text(clickcount2);
  });
