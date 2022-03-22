function IP4(){
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;
    var toppings = document.getElementById("topping").value;
    var number = document.getElementById("number").value;
    var pizzas =parseInt(number);
    const price = document.getElementById("price")
    

    

    if(size == "Small"){
        size = 450;
    
        
    }
    else if(size == "Medium"){
        size = 750;
    
    }
    else if(size == "Large"){
        size = 1400;
    
    }
    else{
        alert("enter correct value");
    }


    if(crust == "Crispy"){
        crust = 50;
    }
    if(crust == "Stuffed"){
        crust = 150;
    }
    if(crust == "Gluten-Free"){
        crust = 200;
    }
    

    if(topping == "Sausage"){
        topping = 70;
    }
    if(topping == "Mushrooms"){
        topping = 70;
    }
    if(topping == "Extra Cheese"){
        topping = 70;
    }


    finalPrice = size + crust + toppings
    price.innerHTML = ` <h1>Total Price: Ksh ${finalPrice}</h1>`
    








}
const order = document.getElementById("order")
order.addEventListener("click", IP4)