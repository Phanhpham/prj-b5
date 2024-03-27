function renderCart(){
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // let cart = [];
    if(users.length === 0){
        return;
    };
    let user = JSON.parse(localStorage.getItem("user")) || [];
    if(user.length === 0){
        return;
    }
    const tbody = document.getElementById("tbody");
    text = ``;
    for(let i = 0; i < users.length; i++){
        console.log(users);
        if(users[i].id === user.id){
            for(let j = 0; j < users[i].cart.length; j++){
                let total = users[i].cart[j].quantity * users[i].cart[j].price;
                text +=`<tr>
                <td id="stt">${j + 1}</td>
                <td id="id">${users[i].cart[j].id}</td>
                <td id="names">${users[i].cart[j].name}</td>
                <td id="image"><img src="${users[i].cart[j].image}" alt=""></td>
                <td id="price">${users[i].cart[j].price}</td>
                <td id="quantity">${users[i].cart[j].quantity}</td>
                <td id="total-cost">${total}</td>
                </tr>
                `;
            }
        }
    }
    tbody.innerHTML = text;
}
renderCart();