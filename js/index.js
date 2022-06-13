import { baseUrl } from "./settings/api.js"
import { renderedProducts } from "./components/common/ui/renderedProducts.js"
import { featuredProducts } from "./components/common/ui/featuredProducts.js";
import { createFooter } from "./components/footer.js";
import { getBanner } from "./components/common/ui/getBanner.js"
import adminMenu from "./components/common/adminMenu.js"

adminMenu();
createFooter();

const url = baseUrl + "/products/"

async function getProducts() {
    const response = await fetch(url);
    const json = await response.json();

    const product = json;

    featuredProducts(product);
}

getBanner();
getProducts();