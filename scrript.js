function toggleMenu() {
    const nav = document.getElementById('my-nav');
    nav.classList.toggle('show');
  }
  
  document.addEventListener('click', function (event) {
    const nav = document.getElementById('my-nav');
    const hamburger = document.getElementById('menu-icon');
    
    if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove('show'); 
    }
  });
  document.addEventListener('scroll', function() {
    const nav = document.getElementById('my-nav');
    
    if (nav.classList.contains('show')) {
      nav.classList.remove('show'); 
    }
  });

  const menuItems = document.querySelectorAll('.nav-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const nav = document.getElementById('my-nav');
      nav.classList.remove('show'); 
    });
  });