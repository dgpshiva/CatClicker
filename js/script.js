var $h2 = $('h2');
var $img = $('img');
var $clickCountElem = $('#click-count');

var catids = ["cat1", "cat2", "cat3"];
var catnames = ["cat1", "cat2", "cat3"];
var srcimages = ["https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&h=350",
                "https://i.pinimg.com/originals/bd/5d/84/bd5d845c980508d41b0329dc21d08d2b.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sKM3OGMqlgSMl_uGSnL5pnc38FmA7g94OOF0c4JAa2rWQyF7kA"];

var clickCounts = [0, 0, 0];

for (var i=0; i<catids.length; i++)
{
    var elem = document.createElement('li');
    elem.textContent = catnames[i];
    elem.id = catids[i];
    document.body.insertBefore(elem, document.body.firstChild);
}

$('li').click(function(clickedElement){
    var id = clickedElement.target.id;
    var index = catids.indexOf(id);
    $h2.textContent = catnames[index];
    $img.attr('src', srcimages[index]);

    var currentClickCount = clickCounts[index];
    currentClickCount += 1;
    $clickCountElem.text(String(currentClickCount));
    clickCounts[index] = currentClickCount;
});

// var catname1 = "Cat 1";
// var catname2 = "Cat 2";

// var clickcount1 = 0;
// var clickcount2 = 0;

// var $clickCountElem1 = $('#click-count1');
// var $clickCountElem2 = $('#click-count2');

// var $cat1Name = $('#cat1-name');
// var $cat2Name = $('#cat2-name');


// $cat1Name.text(catname1);
// $cat2Name.text(catname2);

// $('#cat1-img').click(function(e) {
//     clickcount1 += 1;
//     $clickCountElem1.text(clickcount1);
//   });

//   $('#cat2-img').click(function(e) {
//     clickcount2 += 1;
//     $clickCountElem2.text(clickcount2);
//   });




// // clear the screen for testing
// document.body.innerHTML = '';

// var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));

//     document.body.appendChild(elem);
// };