// JS (no jQuery) version

var catOneNameStr = "Sprinkles";
var catTwoNameStr = "Sparkles";
var catOneElem = document.getElementById('catOneImg');
var catTwoElem = document.getElementById('catTwoImg');
var catOneClickCountInt = 0;
var catTwoClickCountInt = 0;

document.getElementById('catOneName').innerHTML = catOneNameStr;
document.getElementById('catTwoName').innerHTML = catTwoNameStr;

catOneElem.addEventListener('click', function(){
  //the element has been clicked
  //increment click-count
  catOneClickCountInt = catOneClickCountInt + 1;
  document.getElementById('catOneClickCount').innerHTML = catOneClickCountInt;
}, false);

catTwoElem.addEventListener('click', function(){
  //the element has been clicked
  //increment click-count
  catTwoClickCountInt = catTwoClickCountInt + 1;
  document.getElementById('catTwoClickCount').innerHTML = catTwoClickCountInt;
}, false);


// jQuery version
/*

$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
});

*/