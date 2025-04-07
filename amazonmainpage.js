let count=0;
let initializecartvalue=JSON.parse(localStorage.getItem('cartItems'));
if(initializecartvalue!==null){
    count=initializecartvalue[initializecartvalue.length-1].fincount;
    document.querySelector('.valuechange').innerHTML=count;
}
function functionfun(value){
    let ch="checkoutimg"+value;
    let dis="discon"+value;
    let pric="pricecon"+value;
    let sele="selectfield"+value;
    let cart="cartup"+value; 
    const obj = {
        img: document.querySelector(`.${ch}`).src,
        discc: document.querySelector(`.${dis}`).innerHTML,
        pricc: document.querySelector(`.${pric}`).innerHTML,
        selee: document.querySelector(`.${sele}`).value,
        fincount:0,
        tempvar:false
    };
    let hold = JSON.parse(localStorage.getItem("cartItems")) || [];
    count=count+Number(obj.selee);
    obj.fincount=count;
    document.querySelector('.valuechange').innerHTML=count;
    hold.push(obj);
    localStorage.setItem("cartItems",JSON.stringify(hold));
    setTimeout(function(){
        document.querySelector(`.${cart}`).innerHTML='<img class="addcartcheck" src="checkmark.png">';
        document.querySelector(`.${cart}`).innerHTML += '<div style="margin-top:2px; margin-left:5px; color:green">Added</div>';
    }, 100);
    setTimeout(function(){
        document.querySelector(`.${cart}`).innerHTML="";
    }, 3000);
}
function cartfunc(){
    window.location.href = "cartpage.html";
}
function orderreturnfun(){
    window.location.href ="returnorder.html";
}
