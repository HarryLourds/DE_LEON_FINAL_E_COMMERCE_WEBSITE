document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show'); // Add the 'show' class
        } else {
            scrollToTopBtn.classList.remove('show'); // Remove the 'show' class
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        scrollToTop(0, 500); // Call the scrollToTop function with animation duration of 500ms
    });

    // Function to smoothly scroll to the top with animation
    function scrollToTop(to, duration) {
        const start = window.pageYOffset;
        const change = to - start;
        const increment = 20;
        let currentTime = 0;

        // Function for the animation
        const animateScroll = function() {
            currentTime += increment;
            const val = Math.easeInOutQuad(currentTime, start, change, duration);
            window.scrollTo(0, val);
            if (currentTime < duration) {
                requestAnimationFrame(animateScroll);
            }
        };
        animateScroll();
    }

    // Easing function for smooth animation
    Math.easeInOutQuad = function(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };
});

document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const email = emailInput.value.trim(); // Get the entered email address

        if (email === '') {
            alert('Enter an email to subscribe.');
        } else {
            alert('Check your email for exclusive offers!');
            // You can add further actions here, such as sending the email to a server for subscription handling

            // Clear the email input field after submission
            emailInput.value = '';
        }
    });
});

// Get the form and search input element by their IDs
const searchForm = document.getElementById('searchForm'); // Use getElementById
const searchInput = document.getElementById('searchInput'); // Use getElementById

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const searchTerm = searchInput.value.trim().toLowerCase(); // Get and normalize input

  // Map search terms to corresponding pages (case-insensitive)
  const pageMap = {
    "products": "products.html",
    "index": "index.html",
    "contact us": "contactus.html",
    "contactus": "contactus.html",
    "about us": "aboutus.html",
    "aboutus": "aboutus.html",
    "home": "home.html"
  };

  if (pageMap[searchTerm]) {
    // Valid search term, redirect to the corresponding page
    window.location.href = pageMap[searchTerm];
  } else {
    // Invalid search term, show alert and clear input
    alert("Invalid search. You can only search for: home, index, contact us, about us, or products.");
  }

  searchInput.value = ""; // Clear the search field
});
  