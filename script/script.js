new fullpage('#fullpage', {
    sectionsColor: ['white', 'white', '#F0EBE3', '#839AA8'],
    navigation:true,
    navigationPosition: 'left',
    showActiveTooltip:true,
    //navigationTooltips: ['1', '2', '3', '4'],
  });
  
  AOS.init();
  
  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  

  AOS.init({
    duration: 500,
    once: true
  });