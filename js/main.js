const elOne = document.querySelector('.boxsvg'),
  elOnesvg = document.querySelector('.boxsvgup'),
  MAIN = document.querySelector('main');
let click = false; // 클릭 여부

let moving = false; // 움직이는 중인지 여부

elOne.addEventListener('click', function () {
  let ifToggle = elOne.classList.toggle('svgOn');
  if (ifToggle == false) {
  } else {
    elOnesvg.style = `width: 0%; display: none;`;
    MAIN.style = 'display:block';
    elOne.style = 'display:none';
  }
  // elOne.classList.toggle('on')
});

//첫번째 이미지 17개 자동전환

let imgArray = new Array();

imgArray[0] = './img/01.jpg';
imgArray[1] = './img/02.jpg';
imgArray[2] = './img/03.jpg';
imgArray[3] = './img/04.jpg';
imgArray[4] = './img/05.jpg';
imgArray[5] = './img/06.jpg';
imgArray[6] = './img/07.jpg';
imgArray[7] = './img/08.jpg';
imgArray[8] = './img/09.jpg';
imgArray[9] = './img/10.jpg';
imgArray[10] = './img/11.jpg';
imgArray[11] = './img/12.jpg';
imgArray[12] = './img/13.jpg';

function showImage() {
  var imgNum = Math.round(Math.random() * 12);
  var objImg = document.getElementById('introimg');
  objImg.src = imgArray[imgNum];
  setTimeout('showImage()', 1000);
}

var bullet = ['Sinchon', 'Dongdaemun', 'Sinseol', 'Soongin'];
var swiper = new Swiper('.mySwiper', {
  breakpoints: {
    // 화면의 넓이가 980px 이상일 때
    980: {
      slidesPerView: 1,
    },
    // 화면의 넓이가 1024px 이상일 때
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  spaceBetween: 30,
  loop: true,
  observer: true,
  observeParents: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<div class="' +
        className +
        '"><span>' +
        bullet[index] +
        '</span></div>'
      );
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  on: {
    slideChange: function (e) {
      console.log(e.realIndex);
    },
  },
});

const elOne1 = document.querySelector('.List2'),
  elBut = document.querySelector('button .b');
let click2 = false; // 클릭 여부

let moving3 = false; // 움직이는 중인지 여부

elOne1.addEventListener('click', function () {
  let ifToggle = elOne1.classList.toggle('up');
  if (ifToggle == false) {
    elBut.style = `background-color: black; color: white;`;
  } else {
    elBut.style = `background-color: transparent;`;
  }
  // elOne.classList.toggle('on')
});

// var swiper2 = new Swiper('.mySwiper2', {
//   slidesPerView: 3,
//   freeMode: true,
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//   },
//   observer: true,
//   observeParents: true,
// });

var swiper2 = new Swiper('.mySwiper2', {
  breakpoints: {
    // 화면의 넓이가 980px 이상일 때
    600: {
      slidesPerView: 2,
      spaceBetween: 100,
    },
    980: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    // 화면의 넓이가 1024px 이상일 때
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  loop: true,
  observer: true,
  observeParents: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

$('.que').click(function () {
  $(this).next('.anw').stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next('.anw').siblings('.anw').slideUp(300); // 1개씩 펼치기
});

const elFaq = document.querySelectorAll('.que');
const elAnw = document.querySelectorAll('.anw');

/* elFaq.addEventListener('click', function () {
  let ifToggle = elFaq.classList.toggle('on');
  if (ifToggle == false) {
  } else {
    elAnw.style = 'display:none';
  }
  elFaq.classList.toggle('on');
}); */
