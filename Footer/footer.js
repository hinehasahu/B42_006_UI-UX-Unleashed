let ftr = document.querySelector('footer');
ftr.addEventListener('click', (e) => {
    if(e.target.textContent == 'Contact Us'){
        window.location.href = '../ContactPage/ContactPage.html';
    }
    if(e.target.textContent == 'My Account'){
        window.location.href = '../accountPage/Welcome/welcome.html';
    }
    if(e.target.textContent == 'Order History'){
        window.location.href = '../ShoppingCart/ShoppingCart.html';
    }
    if(e.target.textContent == 'Brands' || e.target.textContent == 'About Us'){
        window.location.href = '../sort/sort.html';
    }
})