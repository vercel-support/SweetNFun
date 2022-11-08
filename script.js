//search bar anim

const searchIcon = document.querySelector('.searchimged');
const searchPart = document.querySelector('.search-part');
const searchInput = document.querySelector('.search-input');
// const closeSearch = document.querySelector

// const onClickOutside = (e) => {
//   if (!e.target.className.includes('change')) {
//     show = false;
//   }
// };


  searchIcon.addEventListener('click', function handleClick(event){
    searchIcon.parentElement.classList.add('change');
    searchPart.classList.add('change');
  
    setTimeout(() => {
      searchInput.focus();
    }, 0)

  })


  // if (searchPart.contains.classList('change')){
  //   searchIcon.addEventListener('click', ()=>{
  //     searchPart.classList.remove('change');
  //     searchIcon.parentElement.classList.remove('change');
  //   })
  // }


window.removeEventListener('click', handleClick)



//hero carousel start
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    
    // autoplayTimeout: 2000,
    autoplayHoverPause: true,
    
    responsive: {
        0: { items: 1, nav: false },
        1600: { items: 1, nav: false },
    },
  });

//hero carousel end//


//popular products slide start

const gap = 16;

const carousel = document.getElementById('carousel'),
  content = document.getElementById('content'),
  next = document.getElementById('next'),
  prev = document.getElementById('prev');

next.addEventListener('click', (e) => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = 'flex';
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'none';
  }
});
prev.addEventListener('click', (e) => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = 'none';
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = 'flex';
  }
});

let width = carousel.offsetWidth;
window.addEventListener('resize', (e) => (width = carousel.offsetWidth));

//hero carousel end //

