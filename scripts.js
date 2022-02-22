'use strict'

const moreInfoBtn = document.querySelector('.more-info-btn');
const screenOne = document.querySelector('.approach-screen-1');
const screenTwo = document.querySelector('.approach-textbox-screen');
const arrows = document.querySelectorAll('.arrow');
const goalScreen1 = document.querySelector('.goal-screen-1');
const goalScreen2 = document.querySelector('.goal-screen-2');

/*
moreInfoBtn.addEventListener('click', function(){
  screenOne.classList.add('hide');
  screenTwo.classList.remove('hide');
});
*/
// arrows.addEventListener('click', function(){
//
// });


// const fadeButton = document.querySelector(".more-info-btn").style.opacity = 1;
const fadeDiv = document.querySelector(".approach-screen-1");

let opacity = 1;
let fadeRepeat;
let slideRepeat;
let viewWidth = 0;

function a(){
  fadeRepeat = setInterval(fadeOut, 30);
}

function fadeOut(){
  opacity -= 0.1;
  fadeDiv.style.opacity = opacity;

  if(opacity < 0.1) clearInterval(fadeRepeat);
}

function slide(){
  slideRepeat = setInterval(slideRight, 10);
}

function slideRight(){
  viewWidth += 5;
  const width = viewWidth + "vw";
  goalScreen1.style.marginRight = width;

  if(viewWidth > 200){
    goalScreen1.classList.add("hide");
    clearInterval(slideRepeat);

  }
}
