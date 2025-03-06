// Toggle mobile menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active')
);

});


// Function for FAQ Opening and closing body content


// Select all the icons in the FAQ headers
const faqHeaders = document.querySelectorAll('.faq-group-header i');

// Add click event listener to each icon
faqHeaders.forEach(function(icon){
    icon.addEventListener('click', function(){
        const faqGroupBody = icon.parentElement.nextElementSibling;

        // Close any open FAQ bodies
        const openFaqBodies = document.querySelectorAll('.faq-group-body.open')
        openFaqBodies.forEach(function(openBody){
            if (openBody !== faqGroupBody) {
                openBody.classList.remove('open');
                const openIcon = openBody.previousElementSibling.querySelector('i');
                openIcon.classList.remove('fa-minus');
                openIcon.classList.add('fa-plus')
            }
        });
        
        // Toggle the 'open' class on the clicked FAQ body

        faqGroupBody.classList.toggle('open');

        // Toggle the icon between plus and minus
        
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus')
    })
})