// JS (no jQuery) version

var catOne = {
	name:"Sprinkles",
	image:"img/cat1.jpg",
	clickCount:0
};

var catTwo = {
	name:"Bandit",
	image:"img/cat2.jpg",
	clickCount:0
};

var catThree = {
	name:"Snuggles",
	image:"img/cat3.jpg",
	clickCount:0
};

var catFour = {
	name:"Snowflake",
	image:"img/cat4.jpg",
	clickCount:0
};

var catFive = {
	name:"Pouncer",
	image:"img/cat5.jpg",
	clickCount:0
};

var catSix = {
	name:"Bugaboo",
	image:"img/cat6.jpg",
	clickCount:0
};

document.getElementById('catOneName').innerHTML = catOne.name;
document.getElementById('catTwoName').innerHTML = catTwo.name;
document.getElementById('catThreeName').innerHTML = catThree.name;
document.getElementById('catFourName').innerHTML = catFour.name;
document.getElementById('catFiveName').innerHTML = catFive.name;
document.getElementById('catSixName').innerHTML = catSix.name;

document.getElementById('selectedCatName').innerHTML = catOne.name;
document.getElementById('selectedCatImg').src = catOne.image;

var catOneListName = document.getElementById('catOneName');
var catTwoListName = document.getElementById('catTwoName');
var catThreeListName = document.getElementById('catThreeName');
var catFourListName = document.getElementById('catFourName');
var catFiveListName = document.getElementById('catFiveName');
var catSixListName = document.getElementById('catSixName');

catOneListName.addEventListener('click', function(){
  //the element has been clicked
  //show the appropriate cat name, picture, and count
  document.getElementById('selectedCatImg').src = catOne.image;
  document.getElementById('selectedCatName').innerHTML = catOne.name;
  //increment click-count
  catOne.clickCount += 1;
  document.getElementById('catOneClickCount').innerHTML = catOne.clickCount;
}, false);

catTwoListName.addEventListener('click', function(){
  //the element has been clicked
  //show the appropriate cat name, picture, and count
  document.getElementById('selectedCatImg').src = catTwo.image;
  document.getElementById('selectedCatName').innerHTML = catTwo.name;
  //increment click-count
  catTwo.clickCount += 1;
  document.getElementById('catTwoClickCount').innerHTML = catTwo.clickCount;
}, false);

var catOneElem = document.getElementById('selectedCatImg');
var catTwoElem = document.getElementById('catTwoImg');

catOneElem.addEventListener('click', function(){
  //the element has been clicked
  //increment click-count
  catOne.clickCount += 1;
  document.getElementById('catOneClickCount').innerHTML = catOne.clickCount;
}, false);

catTwoElem.addEventListener('click', function(){
  //the element has been clicked
  //increment click-count
  catTwo.clickCount += 1;
  document.getElementById('catTwoClickCount').innerHTML = catTwo.clickCount;
}, false);


// jQuery version
/*

$('#my-elem').click(function(e) {
  //the element has been clicked... do stuff here
});

*/