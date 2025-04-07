function loadCart() {
    let cartContainer = document.querySelector(".finaldiv");
    let hold = JSON.parse(localStorage.getItem("returnorderspage")) || [];
    if (hold.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty</p>";
        return;
    }
    console.log(hold);
    cartContainer.innerHTML = "";
    hold.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<div class="checkborder">
            <div class="itemsmodule">
                <img src="${item.img}" width="100">
                <div class="itemsinfo">
                    <p>${item.discc}</p>
                    <p>${item.pricc}</p>
                    <p>Quantity: ${item.selee}</p>
                </div>
                <div><button class="trackdiv">Track Order</button></div>
            </div>
        </div>`;
        cartContainer.appendChild(itemDiv);
    });
    
}
loadCart();