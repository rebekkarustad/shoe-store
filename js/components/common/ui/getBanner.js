import { baseUrl } from "../../../settings/api.js"

const imgUrl = baseUrl + "/home/";

export async function getBanner() {
    const response = await fetch(imgUrl);
    const json = await response.json();

    const container = document.querySelector(".index-banner");


    container.innerHTML = `<img src="${baseUrl}${json.hero_banner.formats.large.url}" alt="${json.hero_banner.alternativeText}">`
};