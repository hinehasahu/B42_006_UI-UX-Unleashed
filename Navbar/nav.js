document.addEventListener("DOMContentLoaded", function() {
    // Future functionality can be added here
    console.log("Navigation loaded!");

    // Example: Toggle Account Dropdown (Dummy Implementation)
    document.querySelector('.account').addEventListener('click', function() {
        // alert("Account options will be shown here.");
        window.location.href = `../accountPage/Account/account.html`
    });

    document.querySelector('.contact').addEventListener('click', function() {
        window.location.href = `../ContactPage/ContactPage.html`
        // alert("Account options will be shown here.");
    });
    
    // Example: Cart Alert
    // document.querySelector('.cart-summary button').addEventListener("click", function() {
    //     alert("Your shopping cart is empty.");
    // });
    document.querySelector(".cart").addEventListener("click", ()=>{
        window.location.href = `../ShoppingCart/ShoppingCart.html`
    })

    document.querySelector(".logo").addEventListener("click",()=>{
        window.location.href = `../LandingPage/index.html`
    })

});


document.getElementById("gotosearch").addEventListener("click",()=>{
    window.location.href = `../sort/sort.html`
})