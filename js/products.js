import { baseUrl } from "./settings/api.js";
import { renderedProducts } from "./components/common/ui/renderedProducts.js";
import { searchProducts } from "./components/common/ui/searchProducts.js";
import adminMenu from "./components/common/adminMenu.js";
import { createFooter } from "./components/footer.js";

createFooter();
adminMenu();

const url = baseUrl + "/products/"

async function fetchProducts() {

    try {
        const fetchUrl = await fetch(url);
        const json = await fetchUrl.json();
    
        const products = json;
    
        renderedProducts(products);
        searchProducts(products);
        
    } catch(error) {
        console.log(error);
    }

};

fetchProducts();

