import { baseUrl } from "../../../settings/api.js";

const url = baseUrl + "/products/"

const productContainer = document.querySelector(".featured-wrapper");

export async function featuredProducts() {
    const response = await fetch(url)
    const json = await response.json();

    const products = json;

    const filteredProducts = products.filter(filterShoes);

    function filterShoes(shoes) {
        if(shoes.featured === true) {
            return true
        }
    }

    filteredProducts.forEach(function(products) {

        let shoeImage = `<img src="${products.image_url}" />`;

        if(products.image !== null) {
            shoeImage = `<img src="${baseUrl}${products.image.formats.small.url}" alt="${products.image.alternativeText}" />`;
        }

        productContainer.innerHTML += `<div class="shoe-wrapper">
                                            <a href="details.html?id=${products.id}" >
                                            ${shoeImage}
                                            <h3>${products.title}</h3>
                                            <p>$ ${products.price}</p>
                                        </div>`
    });
}

