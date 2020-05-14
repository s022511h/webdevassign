// Item number prices (can be viewed on the menu)
var A1small = 2.45
var A2medium = 2.65
var A3large = 2.85
var A4extra = 0.50
var A5syrup = 0.25
var ismy_orderEmpty = true;
var firstCheck1 = false;
var firstCheck2 = false;
var firstCheck3 = false;
var orderTotal = 0;

function AddMyOrder(){
    var my_order = document.getElementById("myOrder");
    var n = document.getElementById('size');
    if (n.value == 1) {
        var cupSize = "Small";
        var cupPrice = A1small;
        firstCheck1 = true;
    }
    else if(n.value == 2){
        var cupSize = "Medium";
        var cupPrice = A2medium;
        firstCheck1 = true;
    }
    else if(n.value==3){
        var cupSize = "Large";
        var cupPrice = A3large;
        firstCheck1 = true;
    }
    var p = document.getElementById('name');
    if (p.value==1){
        var drinkName = "Latte";
        firstCheck2 = true;
    }
    else if(p.value==2) {
        var drinkName = "Capuccino";
        firstCheck2 = true;
    }
    else if(p.value==3) {
        var drinkName = "Espresso";
        firstCheck2 = true;
    }
    else if(p.value==4) {
        var drinkName = "Americano";
        firstCheck2 = true;
    }
    else if(p.value==5) {
        var drinkName = "Flat White";
        firstCheck2 = true;
    }
    var x = document.getElementById("extras");
    if (x.value == 1) {
        var extraItem = "Extra Cream";
        var extraPrice = A4extra;
        firstCheck3 = true;
    } else if(x.value==2) {
        var extraItem = "Syrup";
        var extraPrice = 5;
        firstCheck3 = true;A
    } else if(x.value==3) {
        var extraItem = "";
        var extraPrice = 0;
        firstCheck3 = true;
    }
    
    
    if ((firstCheck1 == true && firstCheck2 == true && firstCheck3 == true)) {
            var itemSize = document.createTextNode(cupSize + " ");
            my_order.appendChild(itemSize);

            var chosenName = document.createTextNode(drinkName + " ");
            my_order.appendChild(chosenName);

            var txtXtra = document.createTextNode(extraItem + " ");
            my_order.appendChild(txtXtra);
        

            var totalPrice = cupPrice + extraPrice;
            var txtPrice = document.createTextNode(totalPrice + " ");
            my_order.appendChild(txtPrice);

            var linebreak = document.createElement('br');
            my_order.appendChild(linebreak);
            orderTotal = orderTotal + totalPrice;
            console.log(orderTotal);
            ismy_orderEmpty = false;
         }
   
    else {
            console.log("ERROR: You've placed and unacceptable order!")
         }
    
    
        
}
function PlaceOrder() {
    if (ismy_orderEmpty==false){
        if (confirm("Your total is: £" + orderTotal + " Continue?") == true) {
            alert("Your order has been placed! Enjoy your drink");
            var myNode = document.getElementById('my_order');
            var size = document.getElementById("size");
            var name = document.getElementById("name");
            var extras = document.getElementById("extras");
            location.reload();

        } else{
            alert("You've cancelled placing the order! Please continue");
        }   
    } else{
        alert("Your my_order is empty!");
    }
    
    
}


