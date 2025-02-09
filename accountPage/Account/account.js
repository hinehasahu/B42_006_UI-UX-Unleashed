
// document.getElementById("gotologin").addEventListener("click",()=>{
//     window.Location.href = `../../Login/login.html`
// })

// document.getElementById("gotoregister").addEventListener("click",()=>{
//     window.Location.href = `../../RegisterPage/RegisterPage.html`
//     console.log("hello")
// })

// document.getElementById("gotowishli").addEventListener("click",()=>{
//     // window.Location.href = `../`
//     alert("Wishlist")
// })

// document.querySelector(".logo").addEventListener("click",()=>{
//     window.location.href = `../../LandingPage/HomePage.html`
// })
document.addEventListener("DOMContentLoaded", function() {
    // Future functionality can be added here
    console.log("Navigation loaded!");

    document.querySelector('.account').addEventListener('click', function() {
        // alert("Account options will be shown here.");
        window.location.href = `../accountPage/Account/account.html`
    });

    document.querySelector('.contact').addEventListener('click', function() {
        window.location.href = `../ContactPage/ContactPage.html`
        // alert("Account options will be shown here.");
    });
    
    // Example: Cart Alert
    document.querySelector('.cart-summary button').addEventListener("click", function() {
        alert("Your shopping cart is empty.");
    });
    document.querySelector(".cart").addEventListener("click", ()=>{
        window.location.href = `../../ShoppingCart/ShoppingCart.html`
    })

    document.querySelector(".logo").addEventListener("click",()=>{
        window.location.href = `../../LandingPage/index.html`
    })

});