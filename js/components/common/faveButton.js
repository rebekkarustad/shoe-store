import { getExistingFaves } from "./ui/faveFunction.js";

export function renderButton() {
    const faveButton = document.querySelectorAll(".fave-button");

    faveButton.forEach((button) => {
        button.addEventListener("click", handleClick);
    });

    function handleClick() {
        const id = this.dataset.id;
        const title = this.dataset.title;
        const price = this.dataset.price;
        const image = this.dataset.image;

        const currentFaves = getExistingFaves();

        const productExists = currentFaves.find(function (fave) {
            return fave.id === id;
        });

        if (productExists === undefined) {
            const product = { id: id, title: title, price: price, image: image };
            currentFaves.push(product);
            saveFaves(currentFaves);
        } else {
            const newFaves = currentFaves.filter(fave => fave.id !== id);
            saveFaves(newFaves);
        }
    };
};

function saveFaves(faves) {
    localStorage.setItem("favorites", JSON.stringify(faves));
};