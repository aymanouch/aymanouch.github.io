/*global $, document*/
$(function () {
  // start move cicle
$('.into').on('mousemove', function (e) {
  let x = e.clientX - 117,
  y = e.clientY - 50;
  $('.into .cicle').css('transform', 'translate(' + x + 'px,' + y + 'px');
});
// start slide top 
const slideTop = (cliElt, effElt) =>{
cliElt.on('click', function () {
effElt.slideUp(600);
});
},
btnSlide = $('.into .scr-top .top-ic'),
boxslide = $('.into');
slideTop(btnSlide, boxslide);
// start effect text addaed first 
let i =0;
const text = "welecom in my web site in 2019",
boxContent = 'first-title',
text2 = 'salam alikum',
boxContent2 = 'second-title'
myVar = setInterval(function () {
    addText(text, boxContent);
}, 100);
// declaration of function 
const addText =  (text, boxContent) => {
  if(i < text.length) {
    if (i == text.length - 1) {
document.getElementById(boxContent).innerHTML += '<span>' + text[i] + '</span>';
    } else {
      document.getElementById(boxContent).innerHTML += text[i];
    }
    i = i + 1;
  } else {
    $('.into .in-eng h1 span').delay(100).addClass('nine');
    clearInterval(myVar);
  }      
};
// start effect text addaed second
let j =0;
myVar2 = setInterval(function () {
  addText2(text2, boxContent2);
}, 100);
// declaration of function 
const addText2 =  (text, boxContent) => {
  if(j < text.length) {
      document.getElementById(boxContent).innerHTML += text[j];
      j = j + 1;
  } else {
    clearInterval(myVar2);
  } 
};
// start move and fadein the arabic text 
// and start preparation letter name
const contLetter = $('.into .lettre-name > div');
const moveFade = (elt) => {
  elt.animate({
    right:'0%',
    opacity:1
  }, 2000, function () {
contLetter.find('div').eq(0).animate({
  height : '100%'
}, 2000, function () {
  contLetter.find('div').eq(1).animate({
    width: '100%'
  }, 2000, function () {
    contLetter.find('div').eq(2).animate({
    height:'100%'
    }, 2000, function () {
      contLetter.find('div').eq(3).animate({
        width:'100%'
      }, 2000)
    });
  });
});
  });

},
araH1 = $('.into .in-ara h1');
  var myTimer = setTimeout(moveFade(araH1), 6000);
  // small title

const moveFade2 = (elt) => {
  elt.animate({
    bottom:'30%'
  }, 2000);

},
araH2 = $('.into .in-ara h2');
  var myTimer2 = setTimeout(moveFade2(araH2), 12000);
  clearTimeout(myTimer);
clearTimeout(myTimer2);












});