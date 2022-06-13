import { baseUrl } from "../../../settings/api.js";

export function renderedProducts(productsToRender) {
    const productContainer = document.querySelector(".products-wrapper");
    
    productContainer.innerHTML = "";
        
    productsToRender.forEach(function(product) {

        let shoeImage = `<img src="${product.image_url}" />`;

        if(product.image !== null) {
            shoeImage = `<img src="${baseUrl}${product.image.formats.small.url}" alt="${product.image.alternativeText}" />`;
        }

        productContainer.innerHTML += `<div class="product-details">
                                            <a href="details.html?id=${product.id}" >
                                            ${shoeImage}
                                            <h3>${product.title}</h3>
                                            <p>$ ${product.price}</p>
                                        </div>`
    });
};