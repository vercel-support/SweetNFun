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