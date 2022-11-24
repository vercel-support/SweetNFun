

//change main product display
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
  
  

const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");

productImages.forEach(img => img.addEventListener('click', changeImage));

function changeImage(e) {
  console.log('Changing image', e.target.src);
  activeImage.setAttribute('src', e.target.src);
}

});
//change main product display end //


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