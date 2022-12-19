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


// create references to the modal...
var modal = document.getElementById('my-modal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('my-images');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}