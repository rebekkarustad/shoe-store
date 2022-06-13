import { baseUrl } from "./settings/api.js";
import displayMessage from "./components/displayMessage.js";
import adminMenu from "./components/common/adminMenu.js";
import { getToken } from "./utils/storage.js";
import deleteButton from "./components/common/ui/deleteButton.js"
import { createFooter } from "./components/footer.js";

createFooter();

const token = getToken();

if (!token) {
    location.href = "/";
};

adminMenu();


const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if(!id) {
    document.location.href = "/";
}

const productUrl = baseUrl + "/products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loading = document.querySelector(".loading");
const featured = document.querySelector("#flexCheckDefault");

(async function() {
    try {
        const response = await fetch(productUrl);
        const details = await response.json();

        title.value = details.title;
        price.value = details.price;
        description.value = details.description;
        image.value = details.image_url;
        idInput.value = details.id;
        featured.value = details.featured;

        deleteButton(details.id);

        console.log(details);

        document.title = `Shoe Store | Edit ${details.title}`;

    } catch(error) {
        console.log(error)
    }
    finally {
        loading.style.display = "none";
        form.style.display = "block";
    }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    message.innerHTML = "";

    const titleValue = title.value.trim();
    const priceValue = parseFloat(price.value);
    const descriptionValue = description.value.trim();
    const imageValue = image.value.trim();
    const idValue = idInput.value;
    const boxValue = featured.value;

;
    if(titleValue.lenght === 0 || priceValue.lenght === 0 || isNaN(priceValue) || descriptionValue.lenght === 0 || imageValue.lenght === 0) {
        return displayMessage("warning", "Please supply proper values", ".message-container");
    }

    updateProduct(titleValue, priceValue, descriptionValue, imageValue, idValue, boxValue);

}

async function updateProduct(title, price, description, image, id, featuredValue) {
    const url = baseUrl + "/products/" + id;

    if (featured.checked) {
        featuredValue = true;
    } else {
        featuredValue = false;
    }

    const data = JSON.stringify({ title: title, price: price, description: description, image_url: image, featured: featuredValue });

    const options = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();

        if(json.updated_at) {
            return displayMessage("success", "Product updated", ".message-container");
        }

        if(json.error) {
            return displayMessage("error", json.message, ".message-container");
        }

        console.log(json);

    } catch(error) {
        console.log(error);
    }
}
