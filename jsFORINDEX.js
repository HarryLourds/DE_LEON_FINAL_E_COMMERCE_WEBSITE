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
  

// Get a reference to the image element
  const logoLink = document.getElementById("logoLink");

  // Add a click event listener
  logoLink.addEventListener('click', function() {
    // Redirect to home.html when clicked
    window.location.href = 'home.html';
  });


document.addEventListener('DOMContentLoaded', function () {
        var sidebar = document.querySelector('.sidebar');
        var toggleButton = document.querySelector('.navbar-toggler');
        var closeButton = document.querySelector('[data-bs-dismiss="offcanvas"]');

        function showSidebar() {
            sidebar.classList.add('show');
            sidebar.classList.remove('hide');
        }

        function hideSidebar() {
            sidebar.classList.add('hide');
            setTimeout(function() {
                sidebar.classList.remove('show');
            }, 300); // Wait for the transition duration (300ms) before removing 'show'
        }

        toggleButton.addEventListener('click', showSidebar);
        closeButton.addEventListener('click', hideSidebar);
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
