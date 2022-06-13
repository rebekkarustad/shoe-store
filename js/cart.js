import { getExistingFaves } from "./components/common/ui/faveFunction.js";
import adminMenu from "./components/common/adminMenu.js";
import { createFooter } from "./components/footer.js";

createFooter();

adminMenu();

const favorites = getExistingFaves();

const cartContainer = document.querySelector(".cart-container");
const sumContainer = document.querySelector(".sum-wrapper");

if(favorites.length === 0) {
    cartContainer.innerHTML = `<div class="cart">Cart is empty</div>`;
};

favorites.forEach((cart) => {
    cartContainer.innerHTML += `<div class="cart">
                                    <img src="${cart.image}" />
                                    <h2>${cart.title}</h2>
                                    <p class="price">$ ${cart.price}</p>
                                    <a href="details.html?id=${cart.id}">Product page</a>
                                    <hr>
                                </div>`
});

var sum = favorites.map(cart => parseFloat(cart.price)).reduce((acc, cart) => cart + acc);
var estShip = 35;
var totalSum = sum + estShip;



sumContainer.innerHTML += `<p>Subtotal</p> <p>$ ${sum}</p>
                            <p>Estimated shipping</p> <p>$ ${estShip}</p>
                            <hr><hr>
                            <p>Total</p><p>$ ${totalSum}</p>
                            <button class="checkout guest">Guest checkout</button>
                            <button class="checkout member">Member checkout</button>
                            <button class="checkout paypal"><i class="fa-brands fa-paypal"></i> Pay with PayPal</button>`;
