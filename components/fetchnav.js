window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');



//search bar toggle

const getSearched = () => ({
  searched : document.querySelector('.searched'),
  searchIcon : document.querySelector('.searchimged'),
  searchPart : document.querySelector('.search-part'),
  searchInput : document.querySelector('.search-input'),
})

//search bar toggle
document.addEventListener('click', function handleClick(event){

  const {
    searched, searchIcon, searchPart, searchInput
  } = getSearched()

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

  input.addEventListener('input', function() {
    ul.style.display = 'block';
  });

  if(input.value.length == 0){
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



});