import { renderedProducts } from "./renderedProducts.js";

export function searchProducts(products) {

    const search = document.querySelector(".search");

    search.onkeyup = function (event) {

        const searchValue = event.target.value.trim().toLowerCase();

        const filteredProducts = products.filter(function (product) {
            if (product.title.toLowerCase().includes(searchValue) || product.description.toLowerCase().includes(searchValue))   {
                return true;
            }
        });

        renderedProducts(filteredProducts);
    }
}