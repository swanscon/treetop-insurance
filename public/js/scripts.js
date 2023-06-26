/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar toggler close function
    // var navbarClose = function () {
    //     const navbarToggler = document.body.querySelector('#navbarToggle');
    //     if (!navbarToggler.classList.contains('collapsed')) {
    //         navbarToggler.classList.add('collapsed');
    //     };
    // };


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

    // Collapse responsive navbar when NavLink is clicked
    

    //Set collapsible navbar to fixed when toggler is visible
    // const navToggler = document.body.querySelector('.navbar-toggler');
    // const navCollapsible = document.body.querySelector('#mainNav');
    // if (navToggler) {
    //     navCollapsible.classList.remove('position-relative');
    // };

});

// window.addEventListener('DOMContentLoaded', event => {

//     // Header shrink function
//     var headerShrink = function () {
//         const headerCollapsible = document.body.querySelector('#mainHeader');
//         if (!headerCollapsible) {
//             return;
//         }
//         // if (window.scrollY === 0) {
//         //     headerCollapsible.classList.remove('header-shrink')
//         // } else {
//         //     headerCollapsible.classList.add('header-shrink')
//         // }
//         if (window.scrollY <= 260) {
//             headerCollapsible.classList.remove('navbar-shrink')
//         } else if (window.scrollY > 260) {
//             headerCollapsible.classList.add('navbar-shrink')
//         }
//     };
//     // Shrink the header 
//     headerShrink();
//     // Shrink the header when page is scrolled
//     document.addEventListener('scroll', headerShrink);
//     //  Activate Bootstrap scrollspy on the main nav element
//     const mainHeader = document.body.querySelector('#mainHeader');
//     if (mainHeader) {
//         new bootstrap.ScrollSpy(document.body, {
//             target: '#mainHeader',
//             rootMargin: '0px 0px -40%',
//         });
//     };
// });
