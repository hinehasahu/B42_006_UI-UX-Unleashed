let Objarr = [];

(async function () {
    try {
        let res = await fetch("https://opencart-e92fb-default-rtdb.firebaseio.com/products.json")
        let resp = await res.json();
        let obj = Object.entries(resp);
        Objarr = [...obj]
        console.log(Objarr);
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
        const filteredItems = post.filter((ser) =>{ 
            return(
                ser.brand.toLowerCase().includes(sItem)||
                ser.product_code.toLowerCase().includes(sItem)||
                ser.name.toLowerCase().includes(sItem)||
                ser.availability.toLowerCase().includes(sItem)

            )
            
    });
        searchedItems = searchedItems.concat(filteredItems);
    });

    displaySorted(searchedItems);
}


function displaySorted(arr){
    document.getElementById("container").innerHTML = "";
    arr.forEach((pos) => {
        let card = document.createElement("div");
        card.innerHTML = `
    
    <h2>${pos.amount}<h2>
    <h2>${pos.brand}<h2>
    <h3>${pos.category}</h3>
    <h3>${pos.availability}</h3>
    <h3>${pos.product_code}</h3>
    <div id="images">
    <img src=${pos.img2}>
    <img src=${pos.img1}>
    <img src=${pos.img3}>
    <img src=${pos.img4}>
    <img src=${pos.main_img}>
    </div>`

        document.getElementById("container").append(card)

    })
}


// function display(arr) {
//     document.getElementById("container").innerHTML = "";
//     arr.forEach(([id, post]) => {
//         post.forEach((pos) => {
//             let card = document.createElement("div");
//             card.innerHTML = `
        
//         <h2>${pos.amount}<h2>
//         <h2>${pos.brand}<h2>
//         <h3>${pos.category}</h3>
//         <h3>${pos.availability}</h3>
//         <h3>${pos.product_code}</h3>
//         <div id="images">
//         <img src=${pos.img2}>
//         <img src=${pos.img1}>
//         <img src=${pos.img3}>
//         <img src=${pos.img4}>
//         <img src=${pos.main_img}>
//         </div>`

//             document.getElementById("container").append(card)
//         })

//     });

// }