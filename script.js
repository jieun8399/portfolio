new fullpage('#fullpage', {
  sectionsColor: ['yellow', 'whithe', '#C0C0C0', '#ADD8E6'],
  continuousVertical:true,
  navigation:true,
  navigationPosition: 'left',
  showActiveTooltip:true,
  //navigationTooltips: ['1', '2', '3', '4'],
});

AOS.init();


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});