let items=0,price=0,tax=0,totaltaxpluprice=0,objlen=0,count=0;
function loadCart() {
    let cartContainer = document.querySelector(".cartContainer");
    let hold = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (hold.length === 0) {
        cartContainer.innerHTML = "<p>Cart is empty</p>";
        return;
    }
    objlen=hold.length;
    cartContainer.innerHTML = "";
    hold.forEach(item => {
        let itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<div class="checkborder">
            <div style="color:green;font-family:arial;font-weight:bold">Delivery date:Tuesday, April 15</div>
            <div class="itemsmodule">
                <img src="${item.img}" width="100">
                <div class="itemsinfo">
                    <p>${item.discc}</p>
                    <p>${item.pricc}</p>
                    <p>Quantity: ${item.selee}</p>
                </div>
                <div>
                   <div style="display:flex;margin-left:10px;font-family:arial;margin-bottom:10px">
                      <input value="1" checked type="radio">
                      <div>
                         <div class="delivery-option-date">Tuesday, April 15</div>
                         <div class="delivery-option-price">FREE Shipping</div>
                      </div>
                   </div>
                   <div style="display:flex;margin-left:10px;font-family:arial;margin-bottom:10px">
                      <input value="2" type="radio">
                      <div>
                         <div class="delivery-option-date">Tuesday, April 15</div>
                         <div class="delivery-option-price">FREE Shipping</div>
                      </div>
                   </div>
                   <div style="display:flex;margin-left:10px;font-family:arial;margin-bottom:10px">
                      <input value="3" type="radio">
                      <div>
                         <div class="delivery-option-date">Tuesday, April 15</div>
                         <div class="delivery-option-price">FREE Shipping</div>
                      </div>
                   </div>
                </div>
            </div>
        </div>`;
        cartContainer.appendChild(itemDiv);
        totalpricecalculation(item,count++,hold);
    });
}
function totalpricecalculation(hold,coun,thold){
    let val=thold;
    let value=Number(hold.selee);
    items=items+value;
    let value2=hold.pricc;
    let tevalue2=Number(value2.substring(1,value2.length));
    price=price+(tevalue2*value);
    if((objlen-1)===coun){
        let temprice=price;
        temprice=temprice*10;
        temprice=temprice/100;
        tax=tax+temprice;
        totaltaxpluprice=(price+tax);
        document.querySelector('.checkitemsnomiddlesec').innerHTML=hold.fincount+` items`;
        hold.tempvar=true;
    }
    document.querySelector('.totalprice').innerHTML=`<div class="paymentdiv">
        <div style="margin-bottom:10px;font-family:arial;">Order Summary</div>
        <div class="iteminforates">
            <div>items(${items})</div>
            <div style="display:flex;justify-content:end;">$${price.toFixed(2)}</div>
        </div>
        <div class="iteminforates">
            <div>Shipping & handling:</div>
            <div style="display:flex;justify-content:end;">$0</div>
        </div>
        <div class="iteminforates">
            <div>Total before tax</div>
            <div style="display:flex;justify-content:end;border-top-width:1px;border-top-style:solid;border-top-color:rgb(222, 222, 222);">$${price.toFixed(2)}</div>
        </div>
        <div class="iteminforates">
            <div>Estimated tax(10%)</div>
            <div style="display:flex;justify-content:end;">$${totaltaxpluprice.toFixed(2)}</div>
        </div>
        <div class="iteminforateslas">
            <div>Order total:</div>
            <div style="display:flex;justify-content:end;">$${totaltaxpluprice.toFixed(2)}</div>
        </div>
        <div><button class="placeorderbutton">Place Your Order</button></div>
    </div>`
    document.querySelector('.placeorderbutton').addEventListener('click',()=>{nextpage(val)});
}
loadCart();
function nextpage(hold){
    localStorage.setItem('cartItems',JSON.stringify(hold));
    window.location.href ="finalpage.html";
}
