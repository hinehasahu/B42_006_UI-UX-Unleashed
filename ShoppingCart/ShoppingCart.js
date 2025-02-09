
    // let availableCoupons = ["DISCOUNT10", "OFF20", "WELCOME5"];
    // let availableGiftCards = ["GIFT50", "GIFT100", "GIFT200"];
    // let shippingOptions = ["Standard: $5", "Express: $10", "Same-day: $15"];

    // let tablebody = document.getElementById("tablebox")
    // document.addEventListener("DOMContentLoaded", () => {
    //     if (document.getElementById("cart-body")) {
    //         updateCart();
    //     }
    // });
    
    // function updateCart() {

    //     let cartBody = document.getElementById("cart-body");
    //     if (!cartBody) return;
    //     cartBody.innerHTML = "";

    //     let subtotal = 0;
    //     let totalWeight = 0;

    //     cart.forEach((item, index) => {
    //     let row = document.createElement("tr");
    //     row.innerHTML = `
    //         <td><img src="${item.main_img}" width="50"></td>
    //         <td>${item.brand}</td>
    //         <td class="unit-price">${item.amount}</td>
    //         <td class="weight">${item.weight || 1}</td>
    //         <td class="quantity"><input type="number" value="${item.quantity}" min="1" data-index="${index}"></td>
    //         <td class="total-price">${(item.amount * item.quantity).toFixed(2)}</td>
    //         <td><button class="remove-btn" data-index="${index}">Remove</button></td>
    //     `;

    //     console.log(row)
    //     cartBody.appendChild(row);
    //     tablebody.appendChild(cartBody)

    //     subtotal += item.amount * item.quantity;
    //     totalWeight += (item.weight || 1) * item.quantity;
    // });


    //     // document.querySelectorAll("#cart-body tr").forEach(row => {
    //     //     // console.log(row)
    //     //     let quantity = row.querySelector(".quantity input").value;
    //     //     let unitPrice = row.querySelector(".unit-price").textContent;
    //     //     let weight = row.querySelector(".weight").textContent;
    //     //     let total = quantity * unitPrice;

    //     //     row.querySelector(".total-price").textContent = total;
    //     //     subtotal += total;
    //     //     totalWeight += quantity * weight;
    //     // });

    //     let tax = subtotal * 0.1;
    //     let vat = subtotal * 0.05;
    //     let finalTotal = subtotal + tax + vat;

    //     document.getElementById("subtotal").textContent = subtotal;
    //     document.getElementById("tax").textContent = tax.toFixed(2);
    //     document.getElementById("vat").textContent = vat.toFixed(2);
    //     document.getElementById("final-total").textContent = finalTotal.toFixed(2);
    //     document.getElementById("total-weight").textContent = totalWeight.toFixed(2);
    // }

    // function populateDropdowns() {
    //     let couponDropdown = document.getElementById("coupon-dropdown");
    //     let giftDropdown = document.getElementById("gift-dropdown");
    //     let shippingDropdown = document.getElementById("shipping-dropdown");

    //     availableCoupons.forEach(coupon => {
    //         let option = document.createElement("option");
    //         option.textContent = coupon;
    //         couponDropdown.appendChild(option);
    //     });

    //     availableGiftCards.forEach(card => {
    //         let option = document.createElement("option");
    //         option.textContent = card;
    //         giftDropdown.appendChild(option);
    //     });

    //     shippingOptions.forEach(optionText => {
    //         let option = document.createElement("option");
    //         option.textContent = optionText;
    //         shippingDropdown.appendChild(option);
    //     });
    // }

    // document.querySelectorAll(".quantity input").forEach(input => {
    //     input.addEventListener("change", function() {
    //         let index = this.getAttribute("data-index");
    //         cart[index].quantity = parseInt(this.value);
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //         updateCart();
    //     });
    // });

    // document.querySelectorAll(".remove-btn").forEach(button => {
    //     button.addEventListener("click", function() {
    //         let index = this.getAttribute("data-index");
    //         cart.splice(index, 1);
    //         localStorage.setItem("cart", JSON.stringify(cart));
    //         updateCart();
    //     });
    // });

    // function checkout() {
    //     alert("Proceeding to checkout...");
    //     window.location.href = "checkout.html";
    // }

    function continueShopping() {
        alert("Continuing shopping...");
        window.location.href = "../LandingPage/index.html";
    }

    // populateDropdowns();
    // updateCart();


   // Function to load and display cart items
function displayCartItems() {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; // Get cart data
    let cartTable = document.getElementById("tablebox");
    let subtotal = 0;

    // Clear table before adding rows
    cartTable.innerHTML = `
        <thead>
            <tr>
                <th>Image</th>
                <th>Product Name</th>
                <th>Model</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total</th>
                <th>Action</th>
            </tr>
        </thead>
    `;

    if (cart.length === 0) {
        cartTable.innerHTML += `<tr><td colspan="7" style="text-align:center;">Your cart is empty!</td></tr>`;
        updateTotals(0);
        return;
    }

    cart.forEach((item, index) => {
        let itemTotal = item.amount * item.quantity;
        subtotal += itemTotal;

        let row = document.createElement("tr");
        row.classList.add("cart-item");
        row.innerHTML = `
            <td><img src="${item.main_img}" width="50"></td>
            <td>${item.name}</td>
            <td>${item.product_code}</td>
            <td>
                <input type="number" value="${item.quantity}" min="1" class="quantity-input" data-index="${index}">
            </td>
            <td>₹${item.amount.toFixed(2)}</td>
            <td class="total-price">₹${itemTotal.toFixed(2)}</td>
            <td><button class="remove-btn" data-index="${index}">Remove</button></td>
        `;

        cartTable.appendChild(row);
    });

    updateTotals(subtotal);
}

// Function to update subtotal, tax, VAT, and final total
function updateTotals(subtotal) {
    let tax = subtotal * 0.1; // 10% tax
    let vat = subtotal * 0.05; // 5% VAT
    let finalTotal = subtotal + tax + vat;

    document.getElementById("subtotal").textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById("tax").textContent = `₹${tax.toFixed(2)}`;
    document.getElementById("vat").textContent = `₹${vat.toFixed(2)}`;
    document.getElementById("final-total").textContent = `₹${finalTotal.toFixed(2)}`;
}

// Function to remove an item from cart
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems(); // Refresh the cart
}

// Function to update quantity
function updateQuantity(event) {
    let index = event.target.dataset.index;
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart[index].quantity = parseInt(event.target.value);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCartItems();
}

// Event listener for quantity change
document.addEventListener("change", function (event) {
    if (event.target.classList.contains("quantity-input")) {
        updateQuantity(event);
    }
});

// Event listener for remove button
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
        let index = event.target.dataset.index;
        removeItem(index);
    }
});

// Function to proceed to checkout
function checkout() {
    alert("Proceeding to checkout...");
    // Add actual checkout functionality here
}

// Load cart items when the page loads
window.onload = displayCartItems;
 