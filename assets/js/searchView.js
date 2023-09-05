import { elements } from "./base.js";

export const clearInput = () => {
    elements.searchInput.value = ''
}
export const clearResults = () => {
    elements.searchResults.innerHTML = ''
}


export const displayResults = (data, keyword) => {
    const filteredData = data.filter(movie => {
        return movie.name.toLowerCase().includes(keyword.toLowerCase()) ||
            movie.description.toLowerCase().includes(keyword.toLowerCase());
    });

    filteredData.forEach(movie => {
        //console.log(movie.name);
        // elements.searchResults.innerHTML += `
        // <li class="media">
        //         <img class="mr-3" src="https://tr.web.img4.acsta.net/pictures/bzp/01/27070.jpg " style="width: 150px;"
        //             alt="Generic placeholder image">
        //         <div class="media-body">
        //           <a href ="#${movie.id}">${movie.name}</a>
        //             <p>${movie.directors}</p>
        //             <p>${movie.description}</p>
        //              <p>Kategori: <a href ="#">${movie.category}</a> </p>

        //         </div>
        //     </li>`;
        elements.searchResults.innerHTML += `
        <div class="card col-md-4">
        <img class="moviePic" src="https://m.media-amazon.com/images/M/MV5BODQ0OWJiMzktYjNlYi00MzcwLThlZWMtMzRkYTY4ZDgxNzgxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg" alt="">
        <div>
            <button class="movieCardCategory">Action</button> <!-- servise kategori eklenecek -->
            <button class="movieCardCategory">Sci-fi</button>
        </div>
        <div class="movieRating">
            <img src="assets/icons/285661_star_icon.png" alt=""> <!--Rating Star-->
            <span>8.9</span>
        </div>
        <a href="#${movie.id}"><h3 class="mt-3">${movie.name}</h3></a>
        <div class="cardButton">
            <button class="mb-2 mt-2">Add Watchlist</button><br>
            <button>Trailer</button>
        </div> 
    </div>
    `
    });
}