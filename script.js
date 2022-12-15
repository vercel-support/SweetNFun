
//search bar toggle


var searched = document.querySelector('.searched');
var searchIcon = document.querySelector('.searchimged');
var searchPart = document.querySelector('.search-part');
var searchInput = document.querySelector('.search-input');

  document.addEventListener('click', function handleClick(event){

    var Clicked =searched.contains(event.target);
    
    if (Clicked){
      searchIcon.parentElement.classList.add('change');
      searchPart.classList.add('change');
    }
    
    if(!Clicked){
      searchIcon.parentElement.classList.remove('change');
      searchPart.classList.remove('change');
    }

    setTimeout(() => {
      searchInput.focus();
    }, 0)

  })
//search bar toggle end //

//search bar function 

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+';
const site = '';

function submitted(event) {
  event.preventDefault();
  const url = google + site + '+' + q.value;
  const win = window.open(url, '_blank');
  win.focus();
}

f.addEventListener('submit', submitted);

//search bar function end //

//nav 'contact' button scroll

var contact = document.querySelector('.inquiry');
var button = document.querySelector('.directory .contact');

button.addEventListener('click', function () {
  contact.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

//nav 'contact' button scroll end///

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

// individual product image gallery start

// const activeImage = document.querySelector(".product-image .active");
// const productImages = document.querySelectorAll(".image-list img");

// function changeImage(e) {
//   activeImage.src = e.target.src;
//   console.log(activeImage)
//   console.log(e.target.src)
// }



// productImages.forEach(image => image.addEventListener("click", changeImage));

// });

const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");

productImages.forEach(img => img.addEventListener('click', changeImage));

function changeImage(e) {
  console.log('Changing image', e.target.src);
  activeImage.setAttribute('src', e.target.src);
}


// individual product image gallery end //
