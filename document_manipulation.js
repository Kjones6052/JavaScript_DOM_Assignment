// JavaScript file containing the code that completes all tasks under section 'Document Manipulation with JavaScript'.

// Task 1: create array about products (name, price, description)
let products = [
    { name: "TV", price: 999.99, description: "Perfect for entertainment" },
    { name: "Gaming System", price: 699.99, description: "Your virtual world awaits" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

// Task 2: function to display info to webpage
function displayProducts() {
    let part1 = document.getElementById("part1");
    part1.innerHTML = "";
    products.forEach(function(product) {
        let productItem = document.createElement("li");
        productItem.textContent = `Product Name: ${product.name}; Price: $${product.price}; Description: ${product.description}`;
        part1.appendChild(productItem)
    })
}

// Task 3: add event listener to trigger display
window.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});