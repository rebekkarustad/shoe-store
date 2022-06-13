import { getUsername } from "../../utils/storage.js";
import logoutButton from "./ui/logoutButton.js";

export default function adminMenu() {
    // const { pathname } = document.href;

    const container = document.querySelector(".admin-wrap");

    const username = getUsername();

    let authLink = `<a href="/login.html">Admin</a>`;

    if (username) {
        authLink = `<a href="add.html">Add Product</a>
                    <button id="logout">Logout</button>`;
    }

    container.innerHTML = `<div class="menu">${authLink}</div>`

    logoutButton();                            
}