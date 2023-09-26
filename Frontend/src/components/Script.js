import React from 'react'



  // Sample product data
const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99
    },
    {
      id: 2,
      name: "Product 2",
      price: 15.99
    },
    // Add more products as needed
  ];
  
  // Function to render cart items
  function renderCartItems() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";
  
    // Loop through the products and add cart item elements
    products.forEach(product => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `
        <span>${product.name}</span>
        <span>$${product.price.toFixed(2)}</span>
        <button class="remove-btn" data-id="${product.id}">Remove</button>
      `;
      cartItems.appendChild(cartItem);
    });
  
    // Attach event listener to remove buttons
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
      button.addEventListener("click", removeCartItem);
    });
  
    // Calculate and update total amount
    calculateTotal();
  }
  
  // Function to calculate total amount
  function calculateTotal() {
    const cartTotalAmount = document.getElementById("cart-total-amount");
    const total = products.reduce((sum, product) => sum + product.price, 0);
    cartTotalAmount.textContent = `$${total.toFixed(2)}`;
  }
  
  // Function to remove cart item
  function removeCartItem(event) {
    const button = event.target;
    const productId = parseInt(button.getAttribute("data-id"));
  
    // Remove the product from the products array
    const updatedProducts = products.filter(product => product.id !== productId);
    products.length = 0;
    Array.prototype.push.apply(products, updatedProducts);
  
    // Re-render the cart items
    renderCartItems();
  }
  
  // Attach event listener to checkout button
  const checkoutButton = document.getElementById("checkout-btn");
  checkoutButton.addEventListener("click", checkout);
  
  // Function to handle checkout process
  function checkout() {
    // Perform payment processing and redirect to payment gateway
    // Here, you would integrate with your chosen payment gateway provider
    // and handle the necessary steps for payment processing
    // This typically involves creating an order, collecting customer details,
    // and redirecting the user to the payment gateway for secure payment
  
    // After successful payment, you can redirect the user to a confirmation page or take any other desired action
  }
  
 
