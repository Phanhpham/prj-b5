function renderProduct(){
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let idProduct = JSON.parse(localStorage.getItem("idProduct")) || [];
    // console.log(products);
    // const productContent = document.getElementById("product-content");
    const names = document.getElementById("names");
    const price = document.getElementById("price");
    const image = document.getElementById("image");
    const smallImg = document.getElementById("small-img");
    const last = document.getElementById("last")
    // let text = ``;
    if(products.length === 0){
        return;
    }
    for(let i = 0; i < products.length; i++){
        if(idProduct === products[i].id){
            names.innerHTML = products[i].name;
            image.src = products[i].image;
            price.innerHTML = `${products[i].price}.000 `;
            smallImg.innerHTML = `<img src="${products[i].imageSon[0].src}">
            <img src="${products[i].imageSon[1].src}">
            <img src="${products[i].imageSon[2].src}">
            <img src="${products[i].imageSon[3].src}">
            `;
            console.log(products[i].imageSon[1]);
            last.innerHTML = `<div class="product-content-right-product-button">
            <button><i class="fa-solid fa-bag-shopping"></i><p>Mua Hàng</p></button>
            <button onclick="addToCart(${products[i].id})"><p>Them Vao Gio Hàng</p></button>`
        }
    }
}
renderProduct();

function addToCart(a){
    // console.log(a);
    let user = JSON.parse(localStorage.getItem("user")) || [];
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let cart = [];
    for(let i = 0; i < users.length; i++){
        if(user.id = users[i].id){
            cart = users[i].cart;
            break;
        }
    };
    let products = JSON.parse(localStorage.getItem("products")) || [];
    let idProduct = JSON.parse(localStorage.getItem("idProduct")) || [];
    if(idProduct.length === 0){
        return;
    }
    for(let i = 0; i < products.length; i++){
        if(products[i].id === idProduct){
            products[i].quantity = 1;
            cart.push(products[i]);
            // cart.quantity = 1;
        }
    };
    for(let i = 0; i < users.length; i++){
        if(user.id = users[i].id){
            users[i].cart = cart;
            // console.log(users[i].cart);

            break;
        }
    };
    localStorage.setItem("users", JSON.stringify(users));
}