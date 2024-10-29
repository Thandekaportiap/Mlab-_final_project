

let text = `<h5>Sneaker Company</h5>
<h1 id="head1">Fall limited Edition Sneakers</h1>
<p>These low profile sneakers are your perfect casual wear<br> companion.
    Feature a durable rubber outer sole, they'll<br> withstand eveything the weather can offer.
</p>
<h3>$125.00</h3><h5>50%</h5>
<p><del>$250.00</p>
 <div class="quantity-selector">
    <button class="btn"><i id="minus" class="fa fa-minus"></i>    0    <i id="plus" class="fa fa-plus"></i></button>
    <button class="cart-btn"><i class="fa fa-shopping-cart"></i>    Add to cart</button> </div>`;
    document.getElementById("text-block").innerHTML = text;



    const hoverLink = document.querySelector('.cart');
    hoverLink.addEventListener('mouseover', () =>{
        alert("Your cart is empty");
    }), 3000;


    const myFunction = (smallImg) => {
        var fullImg = document.getElementById("main-img");
        fullImg.src = smallImg.src; // Change the main image to the thumbnail's source
    };
    





