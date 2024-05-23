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
  

function clearCartAndRedirect() {
	alert('Orders Cleared'); 
    // Set a flag or indicator in localStorage
    localStorage.setItem('clearCart', 'true');

    // Redirect to the second page
    window.location.href = 'products.html';
}

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
    
    // Store form data in localStorage
    function storeFormData(form) {
        var formInputs = form.querySelectorAll("input");
        formInputs.forEach(function(input) {
            localStorage.setItem(input.name, input.value);
        });
    }

    // Retrieve and populate form data from localStorage
    function populateFormData(form) {
        var formInputs = form.querySelectorAll("input");
        formInputs.forEach(function(input) {
            var storedValue = localStorage.getItem(input.name);
            if (storedValue) {
                input.value = storedValue;
            }
        });
    }

    // Clear form data from localStorage and fields
    function clearFormData(form) {
        var formInputs = form.querySelectorAll("input");
        formInputs.forEach(function(input) {
            localStorage.removeItem(input.name);
            input.value = '';
        });
    }

// Add event listener to the payment form
	var paymentForm = document.getElementById("paymentForm");
	if (paymentForm) {
	  populateFormData(paymentForm);
	  paymentForm.addEventListener("input", function() {
		storeFormData(paymentForm);
	  });
	  paymentForm.addEventListener("submit", function(event) {
		event.preventDefault(); 
		var form = event.target;
		var formInputs = form.querySelectorAll("input");
		var isEmpty = false; 

		formInputs.forEach(function(input) {
		  if (!input.value.trim()) { 
			isEmpty = true;
		  }
		});

		if (isEmpty) {
		  alert("Fields cannot be empty!");
		} else {
		  alert("Payment successful!, Check your email for order details.");

		  // Clear form data
		  clearFormData(form);

		  // Signal to clear the cart on the next page
		  clearCartAndRedirect();

		  // Redirect immediately after the alert and clearing data
		  window.location.href = "tyFORBUYING.html"; 
		}
	  });
	}


// ... (your populateFormData, storeFormData, and clearFormData functions)


    // Subscribe form functionality
    const subscribeForm = document.getElementById('subscribeForm');
    const emailInput = document.getElementById('emailInput');

    if (subscribeForm && emailInput) {
        // Populate the email input field on load
        var storedEmail = localStorage.getItem('subscribeEmail');
        if (storedEmail) {
            emailInput.value = storedEmail;
        }

        // Store email input in localStorage on input change
        emailInput.addEventListener('input', function() {
            localStorage.setItem('subscribeEmail', emailInput.value);
        });

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
                localStorage.removeItem('subscribeEmail'); // Clear the stored email after submission
            }
        });
    }
});
