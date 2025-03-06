document.addEventListener('DOMContentLoaded', function() {
    // Select the hamburger button and mobile menu
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    // Add click event listener to the hamburger button
    hamburgerButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Select all the FAQ headers
    const faqHeaders = document.querySelectorAll('.faq-group-header');

    // Add click event listener to each header
    faqHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // Find the corresponding FAQ body (next sibling element)
            const faqGroupBody = header.nextElementSibling;

            // Close any currently open FAQ bodies
            const openFaqBodies = document.querySelectorAll('.faq-group-body.open');
            openFaqBodies.forEach(function(openBody) {
                if (openBody !== faqGroupBody) {
                    openBody.classList.remove('open');
                    const openIcon = openBody.previousElementSibling.querySelector('i');
                    openIcon.classList.remove('fa-minus');
                    openIcon.classList.add('fa-plus');
                }
            });

            // Toggle the 'open' class on the clicked FAQ body
            faqGroupBody.classList.toggle('open');

            // Toggle the icon between plus and minus
            const icon = header.querySelector('i');
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');
        });
    });
});