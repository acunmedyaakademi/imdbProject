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
        //Her modal için Id atıyoruz
        const modalId = `myModal${movie.id}`;
        //Kategorileri stringden arraye çevirip gösteriyouz
        const genresArray = movie.genres.split(',');
        const genresHTML = genresArray.map(genre => `<a href="#">${genre.trim()}</a>`);
        //Oyuncuları stringden arraye çevirip gösteriyoruz
        const starsArray = movie.stars.split(',');
        const starsHTML = starsArray.map(star => `<a href="#">${star.trim()}</a>`);
        //Bazılarında iki yönetmen olduğu için onlarıda dinamik bir yapıya alıp aynı işlemi yapıyoruz
        const directorsArray = movie.directors.split(',');
        const directorsHTML = directorsArray.map(director => `<a href="#">${director.trim()}</a>`);
        //Cast içinde aynı işlemi yapıyoruz
        const castArray = movie.cast.split(',');
        const castHTML = castArray.map(cast => `<a href="#">${cast.trim()}</a>`);

        //Cast içinde aynı işlemi yapıyoruz
        const writersArray = movie.writers.split(',');
        const writersHTML = writersArray.map(writers => `<a href="#">${writers.trim()}</a>`);


        elements.searchResults.innerHTML += `
        <div class="card col-md-4">
        <a href ="#"><img class="moviePic" src="${movie.poster}" data-toggle="modal" data-target="#${modalId}" alt="">
        </a>
        <div>
            <button class="movieCardCategory"> ${genresHTML.join(', ')}</button> <!-- servise kategori eklenecek -->

        </div>
        <div class="movieRating">
            <img src="assets/icons/285661_star_icon.png" alt=""> <!--Rating Star-->
            <span>8.9</span>
        </div>
        <a href="#${movie.id}"><button type="button" class="btn btn-primary movie-button" data-toggle="modal" data-target="#${modalId}">
        ${movie.name}
        </button></a>
        <div class="cardButton">
            <button class="mb-2 mt-2">Add Watchlist</button><br>
            <button>Trailer</button>
        </div> 
        </div>
        <!--MODAL OLUŞTURMA -->
        <div class="modal fade" id="${modalId}">
        <div class="modal-dialog">
        <div class="modal-content">


          <div class="modal-header">
           <h4 class="modal-title">${movie.name}</h4>

           <button type="button" class="close" data-dismiss="modal">×</button>
          </div>


         <div class="modal-body">
         <img src = "${movie.poster}" style ="width:150px">
         <h5>Description</h5>
         <p>${movie.description}</p>
         <h5>Genres</h5>
         ${genresHTML.join(', ')}
         <h5>Directors</h5>
         ${directorsHTML.join(', ')}
         <h5>Stars</h5>
         ${starsHTML.join(', ')}
         <h5>Casts</h5>
         ${castHTML.join(', ')}
         <h5>Writers</h5>
         ${writersHTML.join(', ')}
        
         
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
         </div>

       </div>
      </div>
     </div>

   </div>
    `
    });

}

