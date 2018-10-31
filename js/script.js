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

var catOneElem = document.getElementById('catOneImg');
var catTwoElem = document.getElementById('catTwoImg');


document.getElementById('catOneName').innerHTML = catOne.name;
document.getElementById('catTwoName').innerHTML = catTwo.name;
document.getElementById('catOneImg').src = catOne.image;

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