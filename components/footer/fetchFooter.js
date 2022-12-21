//inserting nav component in to DOM
fetch('../components/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer').innerHTML = html;
  });