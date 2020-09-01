const news = document.querySelector('.news-block'); 
const perfomance = document.querySelector('.performance-block');
const preview = document.querySelector('.preview-block'); 
const pageNews = document.querySelector('.page-news');
const pagePerfomance = document.querySelector('.page-perfomance');
const pagePreview = document.querySelector('.page-preview');


pageNews.addEventListener('click', (e) => {
  e.preventDefault();

  news.style.display = 'block';
  perfomance.style.display = 'none';
  preview.style.display = 'none';
});
pagePerfomance.addEventListener('click', (e) => {
  e.preventDefault();

  news.style.display = 'none';
  perfomance.style.display = 'block';
  preview.style.display = 'none';

});

pagePreview.addEventListener('click', (e) => {
  e.preventDefault();
  
  news.style.display = 'none';
  perfomance.style.display = 'none';
  preview.style.display = 'block';
});



var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
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
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
        hide: true,
      },
    
  })