//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const iconToggler = document.body.querySelector('#treeLink');
        const navbarToggler = document.body.querySelector('#navbarToggle');
        if (!navbarCollapsible) {
            return;
        }
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            return;
        } else {
        if (window.scrollY <= 150) {
            navbarCollapsible.classList.remove('navbar-shrink');
            navbarCollapsible.classList.remove('position-fixed');
            iconToggler.classList.remove('icon-show');
            navbarCollapsible.classList.add('position-relative');
            iconToggler.classList.add('icon-hide');
        } else if (window.scrollY > 150) {
            navbarCollapsible.classList.add('navbar-shrink');
            navbarCollapsible.classList.add('position-fixed');
            iconToggler.classList.add('icon-show');
            navbarCollapsible.classList.remove('position-relative')
            iconToggler.classList.remove('icon-hide');
        }};

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Hide navbar icon when toggler is visible
    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('#navbarToggle');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});