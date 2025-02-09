let Objarr = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
(async function () {
    try {
        let res = await fetch("https://opencart-e92fb-default-rtdb.firebaseio.com/products.json")
        let resp = await res.json();
        let obj = Object.entries(resp);
        Objarr = [...obj]
        // console.log(Objarr);
        display(Objarr);
    }
    catch (error) {
        console.log(error)
    }

})();

let searchWords = document.getElementById("search");
searchWords.addEventListener("input", searchItems);

function searchItems() {
    const sItem = searchWords.value.toLowerCase();
    let searchedItems = [];

    Objarr.forEach(([id, post]) => {
        const filteredItems = post.filter((ser) => {
            return (
                ser.brand.toLowerCase().includes(sItem) ||
                ser.product_code.toLowerCase().includes(sItem) ||
                ser.name.toLowerCase().includes(sItem) ||
                ser.availability.toLowerCase().includes(sItem)

            )

        });
        searchedItems = searchedItems.concat(filteredItems);
    });
    setTimeout(() => {
        if (searchedItems.length < 1) {
            alert("No Data Found")
        }
    }, 2000)

    // console.log(searchedItems)
    displaySorted(searchedItems);
}





function catagery(cat) {
    (async function () {
        try {
            let res = await fetch(`https://opencart-e92fb-default-rtdb.firebaseio.com/products/${cat}.json`)
            let resp = await res.json();
            console.log(resp);
            displaySorted(resp);

        }
        catch (error) {
            console.log(error)
        }

    })();
}

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        let category = this.id; // Get the ID of the clicked element
        // console.log(category)
        // window.location.href = `../sort/sort.html?category=${category}`;
        catagery(category); // Call the function with the corresponding category
    });
});

function display(arr) {

    document.getElementById("container").innerHTML = "";
    arr.forEach(([id, post]) => {
        post.forEach((pos) => {
            let card = document.createElement("div");
            card.innerHTML = `
            <img  id="mainimg" src=${pos.main_img}>
            
            <h3 class="brandname">${pos.name}<h3>
            <p class="stars">&starf; &starf; &starf; &starf; &star; &star;
            <h5 class="txt">${pos.brand}</h5>
            <h6 class="txt">Price: ${pos.amount}</h6>
            <p class="txt">Category:${pos.category}</p>
            <p class="txt">Availability: ${pos.availability}</p>
            <p class="txt">Product code: ${pos.product_code}</p>
            
            
            <div class="action-buttons">
            <button class="add-to-cart" title="Add to Cart"><i class="fas fa-cart-plus"></i></button>
            <button title="Remove"><i class="fas fa-trash-alt"></i></button>
            <button title="Like"><i class="fas fa-heart"></i></button>
            </div>
            
        `

            // console.log("display: ",card)
            let addToCartBtn = card.querySelector(".add-to-cart");
            addToCartBtn.addEventListener("click", () => addToCart(pos));

            document.getElementById("container").append(card);
        })

    });

}

function displaySorted(arr) {
    document.getElementById("container").innerHTML = "";
    arr.forEach((pos) => {

        let card = document.createElement("div");
        card.innerHTML = `
        <img  id="mainimg" src=${pos.main_img}>
            <h3 class="brandname">${pos.name}<h3>
            <p class="stars">&starf; &starf; &starf; &starf; &star; &star;
            <h5 class="txt">${pos.brand}</h5>
            <h6 class="txt">Price: ${pos.amount}</h6>
        <p class="txt">Category: ${pos.category}</p>
        <p class="txt">Availability: ${pos.availability}</p>
        <p class="txt">Product code: ${pos.product_code}</p>
        
        <div class="action-buttons">
            <button class="add-to-cart" title="Add to Cart"><i class="fas fa-cart-plus"></i></button>
            <button title="Remove"><i class="fas fa-trash-alt"></i></button>
            <button title="Like"><i class="fas fa-heart"></i></button>
            </div>
            
    `
        let addToCartBtn = card.querySelector(".add-to-cart");
        addToCartBtn.addEventListener("click", () => addToCart(pos));
        document.getElementById("container").append(card)

    })
}


function addToCart(product) {
    let existingProduct = cart.find(item => item.product_code === product.product_code);

    if (existingProduct) {
        existingProduct.quantity += 1; // Increase quantity if item exists
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    cart.push(product);
    console.log("Cart:", cart);
    alert(`${product.brand} added to cart!`);
    updateCart();
}

function gotoproducts() {
    window.location.href = `../sort/sort.html`
}