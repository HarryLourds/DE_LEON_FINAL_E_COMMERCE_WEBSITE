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

const openShopping = document.querySelector(".shopping"),
      closeShopping = document.querySelector(".closeShopping"),
      body = document.querySelector("body"),
      list = document.querySelector(".list"),
      listCart = document.querySelector(".listCart"),
      total = document.querySelector(".total"),
      quantity = document.querySelector(".quantity"),
      clearCartButton = document.querySelector(".clearCart");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})

let products = [
    {
        "id": 1,
        "name": "Machenike M7 Pro",
        "image":"1.png",
        "price": 5546
    },
    {
        "id": 2,
        "name": "Machenike L8 Pro",
        "image":"2.png",
        "price": 4999 
    },
    {
        "id": 3,
        "name": "Machenike M8 Gen2",
        "image":"3.png",
        "price": 4449 
    },
    {
        "id": 4,
        "name": "Machenike M8",
        "image":"4.png",
        "price": 4499 
    },
    {
        "id": 5,
        "name": "Machenike M5",
        "image":"5.png",
        "price": 4700 
    },
    {
        "id": 6,
        "name": "Machenike M2",
        "image":"6.png",
        "price": 4896 
    },
	  {
        "id": 7,
        "name": "Machenike M6",
        "image":"7.png",
        "price": 4954 
    },
	  {
        "id": 8,
        "name": "Machenike M7",
        "image":"8.png",
        "price": 6560 
    }
]

let listCarts = [];

const initApp = () => {
    products.forEach((value, key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">PHP ${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });

    loadCart();
    reloadCart();
}

const addToCart = key => {
    if(listCarts[key] == null) {
        listCarts[key] = JSON.parse(JSON.stringify(products[key]));
        listCarts[key].quantity = 1;
    } else {
        listCarts[key].quantity++;
        listCarts[key].price = listCarts[key].quantity * products[key].price;
    }

    saveCart();
    reloadCart();
}

const reloadCart = () => {
    listCart.innerHTML = "";
    let count = 0;
    let totalPrice = 0;

    listCarts.forEach((value, key) => {
        if (value != null) {
            totalPrice += value.price;
            count += value.quantity;

            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="images/${value.image}"></div>
                <div class="CartTitle">${value.name}</div>
                <div class="CartPrice">${value.price.toLocaleString()}</div>

                <div>
                    <button style="background-color:#000000;" class="CartButton" onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button style="background-color:#000000;" class="CartButton" onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCart.appendChild(newDiv);
        }
    });




    // Check if the cart is empty
    if (count === 0) {
        total.innerText = "Total: 0 PHP";
    } else {
        total.innerText = "Total: " + totalPrice.toLocaleString() + " PHP\nPress to Checkout";
    }

    quantity.innerText = count;
};



const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(listCarts));
}

const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        listCarts = cart;
    }
}

// Declare the clearCart function globally
const clearCart = () => {
    listCarts = []; // Make sure listCarts is defined in a global scope
    saveCart(); 
    reloadCart();
};

// Check for the flag in local storage with a slight delay
window.addEventListener('load', () => {
  setTimeout(() => { // Introduce a delay (e.g., 100 milliseconds)
    if (localStorage.getItem('clearCart') === 'true') {
      clearCart(); // Call the function here
      localStorage.removeItem('clearCart'); 
    }
  }, 100); // Adjust the delay if needed
});


// Keep your existing event listener (if applicable)
clearCartButton.addEventListener("click", clearCart);

// Initialize your app
initApp();

const totalPriceElement = document.getElementById('totalPrice');

totalPriceElement.addEventListener('click', function(event) {
  const isCartEmpty = Object.keys(listCarts).length === 0; // Check if listCarts is empty

  if (isCartEmpty) {
    event.preventDefault();
    alert("Your cart is empty. Please add items to your cart before proceeding.");
  } else {
    window.location.href = 'ordersummary.html';
  }
});

// ... your existing cart logic ...

const changeQuantity = (key, quantity) => {
  if (quantity == 0) {
    delete listCarts[key];
  } else {
    listCarts[key].quantity = quantity;
    listCarts[key].price = quantity * products[key].price;
  }

  saveCart(); // Make sure this function updates your cart storage
  reloadCart(); // Update the UI to reflect the cart changes
  updateTotalPriceButtonState(); // New function call (explained below)
};

function updateTotalPriceButtonState() {
  const isCartEmpty = Object.keys(listCarts).length === 0;

  // Assuming you want to disable/enable the button visually:
  totalPriceElement.disabled = isCartEmpty;

  // Optionally, you can add/remove classes for styling:
  if (isCartEmpty) {
    totalPriceElement.classList.add("disabled");
  } else {
    totalPriceElement.classList.remove("disabled");
  }
}

// Call this function initially to set the button's initial state
updateTotalPriceButtonState();


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
