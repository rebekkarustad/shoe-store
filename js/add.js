import adminMenu from "./components/common/adminMenu.js";
import displayMessage from "./components/displayMessage.js"
import { getToken } from "./utils/storage.js"
import { baseUrl } from "./settings/api.js"
import { createFooter } from "./components/footer.js";

createFooter();

const token = getToken();

if (!token) {
    location.href = "/";
};

adminMenu();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const message = document.querySelector(".message-container");
const featured = document.querySelector("#flexCheckDefault");

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";
    
    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const boxValue = featured.value;


    if(titleValue.lenght === 0 || priceValue.lenght === 0 || isNaN(priceValue) || descriptionValue.lenght === 0 || imageValue.lenght === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    };

    addProduct(titleValue, priceValue, descriptionValue, imageValue, boxValue);
}

async function addProduct(title, price, description, image, featuredValue) {
    const url = baseUrl + "/products/";


    if (featured.checked) {
        featuredValue = true;
    } else {
        featuredValue = false;
    }

    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image, featured: featuredValue });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.created_at) {
            displayMessage("success", "Product created", ".message-container");
            form.reset();
        }

        if(json.error){
            displayMessage("error", json.message, ".message-container");
        }

        console.log(json);

    }catch(error) {
        console.log(error)
        displayMessage("error", "An error accured", ".message-container");
    }
} 