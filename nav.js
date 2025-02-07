document.addEventListener("DOMContentLoaded", function() {
    // Future functionality can be added here
    console.log("Navigation loaded!");

    // Example: Toggle Account Dropdown (Dummy Implementation)
    document.querySelector('.account').addEventListener('click', function() {
        // alert("Account options will be shown here.");
        document.querySelector('.account>div').style.display = 
            document.querySelector('.account>div').style.display == 'block' ? 'none' : 'block';
    });
    let register = document.querySelector('.account>div');
    console.log(register);
    register.addEventListener('click', (e) => {
        if(e.target.textContent == 'Register'){
            // alert('register..');
            window.location.href = './myAccount/registerPage/register.html';
            
        }
        
        if(e.target.textContent == 'Login'){
            // alert('login..');
            window.location.href = './myAccount/loginPage/login.html';
        }
    })

    // Example: Cart Alert
    document.querySelector('.cart-summary button').addEventListener('click', function() {
        alert("Your shopping cart is empty.");
    });
});
