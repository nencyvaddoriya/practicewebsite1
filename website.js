$(document).ready(function() {
    $('.banner_slider_items').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        arrows: true,
        prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow')
    });
});




$(document).ready(function() {
    // Initialize the slick slider with breakpoints
    $('.slideitemtwo').slick({
        slidesToShow: 4, // Default to show 4 products at a time
        slidesToScroll: 4,
        arrows: false, // Disable default arrows
        dots: false,
        infinite: false, // Change to true if you want infinite scrolling
        draggable: true, // Enable dragging
        swipe: true, // Enable swipe for touch devices
        touchThreshold: 10, // Sensitivity of swipe
        speed: 800, // Animation speed for sliding
        responsive: [ // Responsive settings
            {
                breakpoint: 1024, // Change settings for widths below 1024px
                settings: {
                    slidesToShow: 3, // Show 3 products at a time
                    slidesToScroll: 3 // Scroll 3 products at a time
                }
            },
            {
                breakpoint: 768, // Change settings for widths below 768px
                settings: {
                    slidesToShow: 2, // Show 2 products at a time
                    slidesToScroll: 2 // Scroll 2 products at a time
                }
            }
        ]
    });

    // Custom arrows
    $('#left').click(function() {
        $('.slideitemtwo').slick('slickPrev'); // Move to the previous slide
    });

    $('#right').click(function() {
        $('.slideitemtwo').slick('slickNext'); // Move to the next slide
    });

    // Update radio button based on current slide
    $('.slideitemtwo').on('afterChange', function(event, slick, currentSlide) {
        // Calculate the radio button index based on the current slide
        const radioIndex = Math.floor(currentSlide / 4) + 1; // +1 because radio button values start from 1
        $('input[name="slide1"][value="' + radioIndex + '"]').prop('checked', true); // Check the corresponding radio button
    });

    // Radio button functionality
    $('input[name="slide1"]').change(function() {
        var index = $(this).val(); // Get the index from the radio button value
        $('.slideitemtwo').slick('slickGoTo', (index - 1) * 4); // Navigate to the corresponding slide
    });
});




$(document).ready(function() {
    // Initialize the slick slider with breakpoints
    $('.slideitemthree').slick({
        slidesToShow: 4, // Default to show 4 products at a time
        slidesToScroll: 4,
        arrows: false, // Disable default arrows
        dots: false,
        infinite: false, // Change to true if you want infinite scrolling
        draggable: true, // Enable dragging
        swipe: true, // Enable swipe for touch devices
        touchThreshold: 10, // Sensitivity of swipe
        speed: 800, // Animation speed for sliding
        responsive: [ // Responsive settings
            {
                breakpoint: 1024, // Change settings for widths below 1024px
                settings: {
                    slidesToShow: 3, // Show 3 products at a time
                    slidesToScroll: 3 // Scroll 3 products at a time
                }
            },
            {
                breakpoint: 768, // Change settings for widths below 768px
                settings: {
                    slidesToShow: 2, // Show 2 products at a time
                    slidesToScroll: 2 // Scroll 2 products at a time
                }
            }
        ]
    });

    // Custom arrows
    $('.leftarrow-two').click(function() {
        $('.slideitemthree').slick('slickPrev'); // Move to the previous slide
    });

    $('.rightarrow-two').click(function() {
        $('.slideitemthree').slick('slickNext'); // Move to the next slide
    });

    // Update radio button based on current slide
    $('.slideitemthree').on('afterChange', function(event, slick, currentSlide) {
        // Calculate the radio button index based on the current slide
        const radioIndex = Math.floor(currentSlide / 4) + 1; // +1 because radio button values start from 1
        $('input[name="slide2"][value="' + radioIndex + '"]').prop('checked', true); // Check the corresponding radio button
    });

    // Radio button functionality
    $('input[name="slide2"]').change(function() {
        var index = $(this).val(); // Get the index from the radio button value
        $('.slideitemthree').slick('slickGoTo', (index - 1) * 4); // Navigate to the corresponding slide
    });
});


$(document).ready(function() {
    // Initialize Slick Slider
    $('.slider-container').slick({
       
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
        arrows: false // Hide arrows if not needed
    });

    // Sync radio buttons with slick slider
    $('.radio-buttons input').on('change', function() {
        var index = $('input[name="slider"]').index(this); // Get the index of the clicked radio button
        $('.slider-container').slick('slickGoTo', index); // Navigate to the corresponding slide
    });

    // Listen for slick slide changes to update radio buttons
    $('.slider-container').on('afterChange', function(event, slick, currentSlide) {
        $('.radio-buttons input').prop('checked', false); // Uncheck all radio buttons
        $('.radio-buttons input').eq(currentSlide).prop('checked', true); // Check the radio button corresponding to the current slide
    });
});





$(document).ready(function() {
    // Initialize the slick slider with breakpoints
    $('.slideitemfour').slick({
        slidesToShow: 4, // Default to show 4 products at a time
        slidesToScroll: 4,
        arrows: false, // Disable default arrows
        dots: false,
        infinite: false, // Change to true if you want infinite scrolling
        draggable: true, // Enable dragging
        swipe: true, // Enable swipe for touch devices
        touchThreshold: 10, // Sensitivity of swipe
        speed: 800, // Animation speed for sliding
        responsive: [ // Responsive settings
            {
                breakpoint: 1024, // Change settings for widths below 1024px
                settings: {
                    slidesToShow: 3, // Show 3 products at a time
                    slidesToScroll: 3 // Scroll 3 products at a time
                }
            },
            {
                breakpoint: 768, // Change settings for widths below 768px
                settings: {
                    slidesToShow: 2, // Show 2 products at a time
                    slidesToScroll: 2 // Scroll 2 products at a time
                }
            }

            
        ]
    });

    // Custom arrows
    $('.leftarrow-three').click(function() {
        $('.slideitemfour').slick('slickPrev'); // Move to the previous slide
    });

    $('.rightarrow-three').click(function() {
        $('.slideitemfour').slick('slickNext'); // Move to the next slide
    });

    // Update radio button based on current slide
    $('.slideitemfour').on('afterChange', function(event, slick, currentSlide) {
        // Calculate the radio button index based on the current slide
        const radioIndex = Math.floor(currentSlide / 4) + 1; // +1 because radio button values start from 1
        $('input[name="slide3"][value="' + radioIndex + '"]').prop('checked', true); // Check the corresponding radio button
    });

    // Radio button functionality
    $('input[name="slide3"]').change(function() {
        var index = $(this).val(); // Get the index from the radio button value
        $('.slideitemfour').slick('slickGoTo', (index - 1) * 4); // Navigate to the corresponding slide
    });
});




$(document).ready(function() {
    $('.testimonial-container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.arrow_backk img'),
        nextArrow: $('.arrow_next img'),
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
        
    });

    // Ensure arrows work correctly
    $('.arrow_backk').on('click', function() {
        $('.testimonial-container').slick('slickPrev');
    });

    $('.arrow_next').on('click', function() {
        $('.testimonial-container').slick('slickNext');
    });
});



$(document).ready(function () {
    // Set both 'c_one' color options as active initially
    $('.color-option[data-color="c_one"]').addClass('active');

    $('.color-option').on('click', function () {
        // Remove active class from all options within the same color-options div
        $(this).closest('.color-options').find('.color-option').removeClass('active');
        // Add active class to the clicked option
        $(this).addClass('active');
    });
});

function toggleMenu() {
    const $mobileMenu = $('#mobileItem');
    const $cancelButton = $('#cancelButton');

    // Toggle the active class on the mobile menu
    $mobileMenu.toggleClass('active');

    // Check if the mobile menu is active
    if ($mobileMenu.hasClass('active')) {
        $mobileMenu.css('display', 'block'); // Show the mobile menu immediately
        setTimeout(() => {
            $mobileMenu.css('left', '0'); // Slide in the menu
            $mobileMenu.css('opacity', '1'); // Fade in the menu
        }, 10); // Slight delay to trigger transition

        // Show and slide in the cancel button
        setTimeout(() => {
            $cancelButton.show(); // Show the cancel button
            setTimeout(() => {
                $cancelButton.addClass('show'); // Add class for transition
            }, 10); // Slight delay to trigger transition
        }, 0); // Immediate next step to show cancel button
    } else {
        $mobileMenu.css('left', '-100%'); // Slide out the menu
        $mobileMenu.css('opacity', '0'); // Fade out the menu
        setTimeout(() => {
            $mobileMenu.removeClass('active'); // Remove the active class
            $mobileMenu.hide(); // Hide the mobile menu after it has been closed
        }, 400); // Time matches the CSS transition duration

        // Hide the cancel button with transition
        $cancelButton.removeClass('show'); // Remove class for transition
        setTimeout(() => {
            $cancelButton.hide(); // Hide the cancel button
        }, 400); // Time matches the CSS transition duration
    }
}

// Close menu if clicking outside
$(document).on('click', function(event) {
    const $mobileMenu = $('#mobileItem');
    const $hamburger = $('.hamburger');
    const $cancelButton = $('#cancelButton');

    // Check if the clicked target is not the mobile menu, the hamburger, or the cancel button
    if (!$mobileMenu.is(event.target) && !$mobileMenu.has(event.target).length &&
        !$hamburger.is(event.target) && !$hamburger.has(event.target).length &&
        !$cancelButton.is(event.target) && !$cancelButton.has(event.target).length) {
        
        // Close the menu
        $mobileMenu.removeClass('active');
        $cancelButton.removeClass('show');
        
        // Slide out the mobile menu
        $mobileMenu.css('left', '-100%'); // Slide out
        $mobileMenu.css('opacity', '0'); // Fade out
        setTimeout(() => {
            $cancelButton.hide(); // Hide the cancel button
            $mobileMenu.hide(); // Hide the mobile menu
        }, 400); // Time matches the CSS transition duration
    }
});

// Dropdown menu for the big screen remains unchanged
$(document).ready(function() {
    function toggleDropdown(event) {
        // Prevent the default anchor behavior
        event.preventDefault();
        // Prevent the click event from bubbling up to the document
        event.stopPropagation();

        // Get the dropdown menu related to the clicked link
        const $dropdownMenu = $(event.currentTarget).next('.dropdown-menu'); // Get the next sibling element (dropdown menu)
        const isVisible = $dropdownMenu.is(':visible');

        // Hide all dropdowns first
        $('.dropdown-menu').slideUp(200); // Smoothly hide all dropdowns
        $('.dropdown-arrow').removeClass('rotate'); // Reset arrow rotation for all arrows

        // Toggle the clicked dropdown
        if (!isVisible) {
            $dropdownMenu.slideDown(200); // Smoothly show the dropdown
            $(event.currentTarget).find('.dropdown-arrow').addClass('rotate'); // Rotate the arrow down
        } else {
            $dropdownMenu.slideUp(200); // Smoothly hide the dropdown
        }
    }

    // Add event listeners for subcategories
    $('.dropdown-toggle').on('click', toggleDropdown);

    // Add event listener for the close button
    $('.close-button').on('click', function(event) {
        // Prevent the default behavior
        event.preventDefault();
        const $dropdownMenu = $(this).closest('.dropdown-menu');
        $dropdownMenu.slideUp(200); // Smoothly hide the dropdown
        $dropdownMenu.prev('.dropdown-toggle').find('.dropdown-arrow').removeClass('rotate'); // Reset arrow rotation
    });
});





$(document).ready(function () {
    // Event listener for subcategories in the mobile menu
    $('.subcat a').click(function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const dropdownId = $(this).attr('onclick').match(/'([^']+)'/)[1]; // Extract dropdown ID
        const dropdownMenu = $(`#${dropdownId}`); // Get the corresponding dropdown menu
        const arrow = $(this).find('.dropdown-arrow'); // Get the arrow icon

        // Hide other dropdowns and reset their arrows
        $('.mobile-dropdown-menu').not(dropdownMenu).slideUp().removeClass('active');
        $('.dropdown-arrow').not(arrow).removeClass('rotate'); // Reset other arrows

        // Toggle the clicked dropdown
        dropdownMenu.slideToggle().toggleClass('active');
        arrow.toggleClass('rotate'); // Rotate the clicked arrow
    });

    // Event listener for subcategories in the main menu
    $('.items .subcat a').click(function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        const dropdownMenu = $(this).next('.dropdown-menu'); // Get the corresponding dropdown menu
        const arrow = $(this).find('.dropdown-arrow'); // Get the arrow icon

        // Hide other dropdowns and reset their arrows
        $('.dropdown-menu').not(dropdownMenu).slideUp(); // Hide other dropdowns
        $('.dropdown-arrow').not(arrow).removeClass('rotate'); // Reset other arrows

        // Toggle the clicked dropdown
        dropdownMenu.slideToggle();
        arrow.toggleClass('rotate'); // Rotate the clicked arrow
    });
});




$(document).ready(function() {
    function toggleDropdown() {
        if ($(window).width() <= 410) {  // Only enable the functionality for screens 410px or less
            $('.toggle').off('click').on('click', function() {  // Remove previous click events and add a new one
                $(this).next('.dropdown').slideToggle();
                const isExpanded = $(this).attr('aria-expanded') === 'true';
                $(this).attr('aria-expanded', !isExpanded);
                $(this).next('.dropdown').attr('aria-hidden', isExpanded);
                $(this).find('.footarrow').toggleClass('rotated');
            });
        } else {
            // Remove the click functionality for larger screens
            $('.toggle').off('click');
            $('.dropdown').removeAttr('style');  // Reset any inline styles applied by jQuery (e.g., display: none)
        }
    }

    // Run the function on page load
    toggleDropdown();

    // Run the function on window resize to dynamically apply the behavior
    $(window).resize(function() {
        toggleDropdown();
    });
});

