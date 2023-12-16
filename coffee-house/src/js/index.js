document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('index')) {
    document.querySelector('.header__logo').style.cursor = 'default';
  }
  openBurgerMenu();
  closeBurgerMenu();

  autoplay(time);
  useProgress(time, dots[0]);
  timer();
});

document
  .querySelector('video')
  .addEventListener('contextmenu', (e) => e.preventDefault());

const body = document.querySelector('body');

(function () {
  matchMedia('only screen and (min-width:768px)').addEventListener(
    'change',
    () => body.classList.remove('body-lock')
  );
})();

function openBurgerMenu() {
  document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('open');
    body.classList.toggle('body-lock');

    document
      .querySelectorAll('.burger__line')
      .forEach((el) => el.classList.toggle('close'));
  });
}

function closeBurgerMenu() {
  const menuLinks = document.querySelectorAll('.link');

  menuLinks.forEach((link) =>
    link.addEventListener('click', () => {
      document.querySelector('.header__nav').classList.remove('open');
      body.classList.remove('body-lock');
      document
        .querySelectorAll('.burger__line')
        .forEach((el) => el.classList.remove('close'));
    })
  );
}

const slides = document.querySelectorAll('.slider__body'),
  next = document.querySelector('.next'),
  prev = document.querySelector('.prev'),
  slider = document.querySelector('.slider__wrapper'),
  track = document.querySelector('.slider__track'),
  controls = document.querySelector('.favorite__controls');

let time = 6000;
let gap = 6000;

let slideID;
let interval;
let timeId;
let dotId;
let dotId2;

let template = '';

[...slides].map(() => {
  template += `<div><progress class="controls__item" value="0" max="100"></progress></div>`;
});

controls.innerHTML = template;

const dots = document.querySelectorAll('.controls__item');
dots[0].classList.add('chosen');

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    clear();
  } else {
    const chosenDot = document.querySelector('.controls__item.chosen');
    useProgress(time, chosenDot);
    playOneTime(nextSlide, gap);
    timer();
  }
});

function clear() {
  clearTimeout(timeId);
  clearInterval(interval);
  clearInterval(slideID);
  clearInterval(dotId);
}

function go() {
  gap = 6000;
  clearTimeout(timeId);
  clearInterval(slideID);
  autoplay(time);
}

function subtractTime() {
  gap -= 1000;
  if (gap < 0) {
    gap = 0;
  }
}

function timer() {
  interval = setInterval(subtractTime, 1000);
}

function autoplay(time) {
  slideID = setInterval(nextSlide, time);
}

function playOneTime(func, time) {
  timeId = setTimeout(func, time);
}

function useProgress(time, currentDot) {
  dotId = setInterval(function () {
    if (currentDot.value > 100) {
      clearInterval(dotId);
    }
    currentDot.value++;
  }, time / 100);
}

function useRegress(currentDot) {
  dotId2 = setInterval(function () {
    if (currentDot.value === 0) {
      clearInterval(dotId2);
    }
    currentDot.value--;
  }, 5);
}

window.addEventListener('resize', showSlides);

let slideWidth,
  sliderCount = 0;

function showSlides() {
  slideWidth = slider.offsetWidth;
  track.style.width = `${slideWidth * slides.length}px`;
  slides.forEach((slide) => (slide.style.minWidth = `${slideWidth}px`));

  rollSlider();
}

showSlides();

function rollSlider() {
  track.style.transform = `translateX(${-sliderCount * slideWidth}px)`;
}

function nextSlide() {
  clearInterval(dotId);
  sliderCount++;
  if (sliderCount >= slides.length) sliderCount = 0;
  rollSlider();

  let currentDot = document.querySelector('.controls__item.chosen');
  useRegress(currentDot);
  currentDot.classList.remove('chosen');

  let nextDot = currentDot.parentElement.nextElementSibling;
  if (nextDot) {
    nextDot.firstElementChild.classList.add('chosen');
    useProgress(time, nextDot.firstElementChild);
  } else {
    dots[0].classList.add('chosen');
    useProgress(time, dots[0]);
  }

  go();
}

function prevSlide() {
  clearInterval(dotId);

  sliderCount--;
  if (sliderCount < 0) sliderCount = slides.length - 1;
  rollSlider();

  let currentDot = document.querySelector('.controls__item.chosen');
  useRegress(currentDot);
  currentDot.classList.remove('chosen');

  let prevDot = currentDot.parentElement.previousElementSibling;
  if (prevDot) {
    prevDot.firstElementChild.classList.add('chosen');
    useProgress(time, prevDot.firstElementChild);
  } else {
    dots[dots.length - 1].classList.add('chosen');
    useProgress(time, dots[dots.length - 1]);
  }

  go();
}

const btns = [next, prev];

btns.forEach((btn) =>
  btn.addEventListener('pointerdown', (e) => {
    clear();
    e.preventDefault();
  })
);

btns.forEach((btn) =>
  btn.addEventListener('pointermove', (e) => e.preventDefault())
);

btns.forEach((btn) =>
  btn.addEventListener('pointerup', (e) => {
    timer();
    nextSlide();
    e.preventDefault();
  })
);

const eventListStart = ['mouseenter', 'touchstart'];
const eventListEnd = ['mouseleave', 'touchend'];

eventListStart.forEach((event) => {
  slider.addEventListener(event, (e) => {
    clear();
    e.preventDefault();
  });
});

eventListEnd.forEach((event) => {
  slider.addEventListener(event, (e) => {
    const chosenDot = document.querySelector('.controls__item.chosen');
    useProgress(time, chosenDot);
    playOneTime(nextSlide, gap);
    timer();

    e.preventDefault();
  });
});

let swipeArea = document.querySelector('.slider__container');
const swipe = (elem) => {
  let surface = elem;
  let startX = 0;
  let startY = 0;
  let distX = 0;
  let distY = 0;

  let startTime = 0;
  let toEndTime = 0;

  let path = 150;
  let angle = 100;
  //let allowedTime = 300;

  surface.addEventListener('touchstart', (e) => {
    let touchObject = e.changedTouches[0];
    startX = touchObject.pageX;
    startY = touchObject.pageY;
    //startTime = new Date().getTime();
    e.preventDefault();
  });

  surface.addEventListener('pointermove', (e) => {
    e.preventDefault();
  });

  surface.addEventListener('touchend', (e) => {
    let touchObject = e.changedTouches[0];
    distX = touchObject.pageX - startX;
    distY = touchObject.pageY - startY;
    //toEndTime = new Date().getTime() - startTime;
    /*if (toEndTime <= allowedTime)*/
    if (Math.abs(distX) >= path && Math.abs(distY) <= angle) {
      if (distX > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    e.preventDefault();
  });
};

swipe(swipeArea);
