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
    }, 1000, function () {
      contLetter.find('div').eq(3).animate({
        width:'100%'
      }, 1000)
    });
  });
});
  });

},
araH1 = $('.into .in-ara h1');
  var myTimer = setTimeout(moveFade(araH1), 6000);
  // small title
let win = $(window).width(),
bottomPos = win > 600 ? 30 : 50;
const moveFade2 = (elt, bottomPos) => {
  elt.animate({
    bottom: bottomPos + '%'
  }, 2000);

},
araH2 = $('.into .in-ara h2');
  var myTimer2 = setTimeout(moveFade2(araH2, bottomPos), 12000);
  clearTimeout(myTimer);
clearTimeout(myTimer2);

// start preparate nav icon
const iconMove = (elt) => {
  if (elt.hasClass('open')) {
    // start rotate the icon 
    elt.find('span').eq(2).css('display', 'none').siblings('span').css({
      position:'absolute',
      marginBottom: '0',
      backgroundColor: '#fff'
    }).animate({
      top: '50%',
    }, 1000);
    elt.find('span').eq(0).css('transform', 'translate(0, -50%) rotate(-45deg)');
    elt.find('span').eq(1).css('transform', 'translate(0, -50%) rotate(45deg)');
    elt.removeClass('open').addClass('close');
    // start move controll 
    elt.parent().eq(0).css('transform', 'translateX(0)');
    // start show nav bar 
    elt.parents().eq(1).animate({
      left : '0'
    }, 1000);
// start add class tarns-elt 
$('#navbar ul li').addClass('trans-elt');

  } else if (elt.hasClass('close')) {
    elt.find('span').eq(0).css('transform', 'translate(0, 0) rotate(0deg)');
    elt.find('span').eq(1).css('transform', 'translate(0, 0) rotate(0deg)');
    elt.find('span').eq(2).siblings('span').css({
      position:'static',
      marginBottom: '20%',
      backgroundColor:'#000'
    }).animate({
      top: '0',
    }, 1000, function() {
      $(this).siblings('span:last-child').css('display', 'block');
    })
    // start move controll 
    elt.parent().eq(0).css('transform', 'translateX(150%)');
    //  start hide nav bar 
    let win = $(window).width();
    let leftWin = win < 765 ? '-100%' : '-25%';
    elt.parents().eq(1).animate({
      left : leftWin
    });
    elt.removeClass('close').addClass('open');

     // start remove class tarns-elt 
$('#navbar ul li').removeClass('trans-elt');
  }
 return 0;
}
// appelle de function
$('#navbar .control .icon').on('click', function () {
  iconMove($('#navbar .control .icon'));
});

// start generation the scroll effect 
const wind = $(window);
wind.on('scroll', function () {
  let scrWiTo = $(this).scrollTop();
  // effect right box in home 
const ar1 = 10,
ar2 = 3,
ar3 = 0,
boxContent1 = $('#home .right-box div.wraper .our').eq(0).find('span').eq(1),
boxContent2 = $('#home .right-box div.wraper .our').eq(1).find('span').eq(1),
boxContent3 = $('#home .right-box div.wraper .our').eq(2).find('span').eq(1);
myAddNum = setInterval(function () {
  addNum(ar1, boxContent1);
  addNum(ar2, boxContent2);
  addNum(ar3, boxContent3);
}, 1000);
  if (scrWiTo >= $('#home').offset().top && scrWiTo < $('#about').offset().top) {
    $('#navbar ul li').eq(0).addClass('active').siblings().removeClass('active');
    } else if (scrWiTo >= $('#about').offset().top && scrWiTo < $('#servies').offset().top) {
      $('#navbar ul li').eq(1).addClass('active').siblings().removeClass('active');
  } else if (scrWiTo >= $('#servies').offset().top && scrWiTo < $('#skills').offset().top) {
    $('#navbar ul li').eq(2).addClass('active').siblings().removeClass('active');
  } else if (scrWiTo >= $('#skills').offset().top && scrWiTo < $('#work').offset().top) {
    $('#navbar ul li').eq(3).addClass('active').siblings().removeClass('active');
  } else if (scrWiTo >= $('#work').offset().top && scrWiTo < $('#contact').offset().top) {
    $('#navbar ul li').eq(4).addClass('active').siblings().removeClass('active');
  } else if (scrWiTo >= $('#contact').offset().top) {
    $('#navbar ul li').eq(5).addClass('active').siblings().removeClass('active');
  }
});

// start scroll to element with navbar 
$('#navbar ul li a').on('click', function () {
const eltIcon = $('#navbar .control .icon');
  if (eltIcon.hasClass('close')) {
   iconMove(eltIcon);
  } 
$('html, body').animate({
scrollTop : $('#' + $(this).attr('data-scr')).offset().top + .4
}, 1000);

});
// start small slider in home section 
const slidHome = (elt, elt1) =>{
      let i = 0;
     for (i=0; i < elt.length; i++) {
       if (elt.eq(i).hasClass('fade-box')) {
          elt.eq(i).siblings().animate({
            opacity: 0
          }, 200, function() {
            $(this).addClass('fade-box');
          });
          elt.eq(i).animate({
            opacity: 1
          }, 200, function () {
            $(this).removeClass('fade-box');
          });
          elt1.eq(i).addClass('acitve-d').siblings().removeClass('acitve-d');
       }
     }
}
$('#home .left-box .dayra span').on('click', function () {
  slidHome($('#home .left-box .mok'), $('#home .left-box .dayra span'));
});
slideHo= setInterval(function () {
  slidHome($('#home .left-box .mok'), $('#home .left-box .dayra span'));
}, 7000);

// declaration of function 
const addNum =  (ar, boxContent) => {
if(Number(boxContent.text()) < ar) {
 boxContent.text(Number(boxContent.text()) + 1);
} else {
  clearInterval(myAddNum);
}      
};






});