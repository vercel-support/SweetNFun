const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
    <style>
    html,
    body {
      font-family: "Roboto", sans-serif;
    }
    
    #menu, #burger{
      display: none;
    }
    
    .desktop .productsimg {
      display: flex;
        margin-top: 3px;
        width: 50px;
    }
    
    .desktop .aboutimg, .desktop .contactimg, .desktop .searchimged{
      display: flex;
      width: 40px;
      height: 40px;
    }
    
    .desktop .products, .desktop .about, .desktop .contact, .desktop .searched {
      display: flex;
      cursor: pointer;
    }
    
    .desktop .searchimged{
      margin-top: 7px;
    }
    
    .nav{
        flex-direction: row;
    }
    
    .nav a{
        margin: 20px 20px;
    }
    
    .nav .logo-container{
        display: flex;
        position: absolute;
        margin: 0 auto 0 0; 
    }
    
    .nav .directory{
        display: flex;
        justify-content: center;
    }
    
    .logo-container:hover:after{
      display: -webkit-flex;
      display: flex;
      -webkit-justify-content: center;
      justify-content: center;
      position: absolute;
      background: #444;
      border-radius: 8px;
      color: #fff;
      content: 'Home';
      margin: auto 0 0 0px;
      font-size: 12px;
      padding: 13px;
      width: 50px;
      margin-top: 110px;
      z-index: 99;
    }
    
    .products:hover:after{
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        background: #444;
        border-radius: 8px;
        color: #fff;
        content: 'All Products';
        margin: auto 0 0 -35px;
        font-size: 12px;
        padding: 13px;
        width: 100px;
        margin-top: 40px;
    }
    
    .about:hover:after{
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        background: #444;
        border-radius: 8px;
        color: #fff;
        content: 'About Us';
        margin: 5px 0 0 -40px;
        font-size: 12px;
        padding: 13px;
        width: 100px;
        margin-top: 68px;
    
    }
    
    .contact:hover:after{
        display: -webkit-flex;
        display: flex;
        -webkit-justify-content: center;
        justify-content: center;
        position: absolute;
        background: #444;
        border-radius: 8px;
        color: #fff;
        content: 'Contact Us';
        margin: 5px 0 0 -40px;
        font-size: 12px;
        padding: 13px;
        width: 100px;
        margin-top: 68px;
    
    }
    
    .search-input{
      width: 350px;
      padding: 16px;
      border: none;
      border-bottom: 0.1rem solid #999;
    }
    
    .search-button{
      cursor: pointer;
      height: 50px;
      margin: 0 0 0 0;
    }
    
    .search-part{
      display: flex;
      flex-direction: row;
      margin: 0 0 0 60px;
      height: 50px;
      opacity: 0;
      visibility: hidden;
      position: absolute;  
    }
    
    .desktop .searched{
      cursor: pointer;
    }
    
    .search-part.change{
      opacity: 1;
      visibility: visible;
      transition: all 0.5 1s;
    }
    
    
    /* nav bar end /// */
    <style/>
    <header>
    <div class="nav">
        <input type="checkbox" id="menuIcon">
        <label id="burger" for="menuIcon">
            <div></div>
            <div></div>
            <div></div>
        </label>

        <div id="menu">
            <div class="directory mobile">
                <a class="products"><img class='productsimg' src='/imgs/products2.png'/> All Products</a>
                <a class="about" href="#"><img class='aboutimg' src='/imgs/about.png'/> About Us</a>
                <a class="contact"><img class='contactimg' src='/imgs/contact.png'/>Contact Us</a>
                <!-- <h4>Blog</h4> -->
                <a class="search"><img class='searchimg' src='/imgs/search.png'/></a>
            </div>
        </div>
        
        <div >
            <a class="logo-container" href="/index.html">
                <img class='logo' src='/imgs/logo.png'/>
            </a>
        </div>
        <div class="directory desktop">
            <a href="#" class="products"><img class='productsimg' src='/imgs/products.png'/></a>
            <a href="about/about.html" class="about"><img class='aboutimg' src='/imgs/about.png'/></a>
            <a class="contact"><img class='contactimg' src='/imgs/contact.png'/></a>
            <!-- <h4>Blog</h4> -->
            <a class="searched"> 
              <img class="searchimged" src='/imgs/search.png'/>
              <div class="search-part">
                <input class="search-input" type="text" placeholder="Search"/>
                <button class="search-button">Go</button>
              </div>
            </a>
        </div>
    </div>
    </header>
    `;


class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.appendChild(headerTemplate.content);
    }
  }
  
  customElements.define('header-component', Header);