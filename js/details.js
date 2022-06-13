import { baseUrl } from "./settings/api.js";
import { renderButton } from "./components/common/faveButton.js";
import adminMenu from "./components/common/adminMenu.js";
import { getUsername } from "./utils/storage.js";
import { createFooter } from "./components/footer.js";

createFooter();
adminMenu();

const detailContainer = document.querySelector(".product-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = baseUrl + "/products/" + id;

async function fetchInfo() {
    try {
        const fetchDetails = await fetch(url);
        const details = await fetchDetails.json();

        const username = getUsername();

        let editbutton = "";
        
        if(username) {
            editbutton = `<a class="edit-button" href="edit.html?id=${details.id}">Edit</a>`;
        }

        document.title = `Shoe Store | ${details.title}`;

        let shoeImage = `<img src="${details.image_url}" />`;
        let faveButton = `<button class="fave-button" data-id="${details.id}" data-title="${details.title} "data-price="${details.price}" data-image="${details.image_url}">Add to cart</button>`;

        if(details.image !== null) {
            shoeImage = `<img src="${baseUrl}${details.image.formats.small.url}" alt="${details.image.alternativeText}" />`;
            faveButton = `<button class="fave-button" data-id="${details.id}" data-title="${details.title} "data-price="${details.price}" data-image="${baseUrl}${details.image.formats.small.url}">Add to cart</button>`;
        }

        detailContainer.innerHTML = `<div class="details">
                                        ${shoeImage}
                                        <h3>${details.title}</h3>
                                        <p class="price">$ ${details.price}</p>
                                        ${faveButton}
                                        <p class="description">${details.description}</p>
                                        ${editbutton}
                                    </div>`

        


    } catch(error){
        console.log(error);
    }


};

fetchInfo();

async function getButton() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        const articles = json;

        renderButton(articles);
        
    } catch(error) {
        displayMessage("error", error, ".article-container")

    }
}

getButton();