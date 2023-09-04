import { elements } from "./base.js";

export const clearInput = () => {
    elements.searchInput.value = ''
}
export const clearResults = () => {
    elements.searchResults.innerHTML = ''
}


export const displayResults = data => {
    data.forEach(movie => {
        console.log(movie.name);
        elements.searchResults.innerHTML += `
        <li class="media">
                <img class="mr-3" src="https://tr.web.img4.acsta.net/pictures/bzp/01/27070.jpg " style="width: 150px;"
                    alt="Generic placeholder image">
                <div class="media-body">
                  <a href ="#${movie.name}">${movie.name}</a>
                    <p>${movie.directors}</p>
                    <p>${movie.description}</p>

                </div>
            </li>`
    })
}
