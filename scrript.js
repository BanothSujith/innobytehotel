function toggleMenu() {
    const nav = document.getElementById('my-nav');
    nav.classList.toggle('show');
  }
  
  document.addEventListener('click', function (event) {
    const nav = document.getElementById('my-nav');
    const hamburger = document.getElementById('menu-icon');
    
    // Check if the clicked area is outside the hamburger menu or the nav
    if (!hamburger.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove('show'); // Close the menu
    }
  });

  const menuItems = document.querySelectorAll('.nav-item');
  menuItems.forEach(item => {
    item.addEventListener('click', function() {
      const nav = document.getElementById('my-nav');
      nav.classList.remove('show'); // Close the menu after clicking a link
    });
  });