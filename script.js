
//nav bar insert to DOM

fetch("components/nav.html")
  .then(response => response.text())
  .then(html => {
    document.getElementById('nav').innerHTML = html;
  });




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

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");


  if(input.value.length == 0 && input.value == ''){
    ul.style.display = "none";
    return;
}else{
    ul.style.display = "block";
}
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "block";
    } else {
        li[i].style.display = "none";
    }
}
}
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
