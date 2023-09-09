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
            // movie.rating.toLowerCase().includes(keyword.toLowerCase());
    });

    filteredData.forEach(movie => {
        //Her modal için Id atıyoruz
        const modalId = `myModal${movie.id}`;
        //Kategorileri stringden arraye çevirip gösteriyouz
        const genresArray = movie.genres.split(',');
        const genresHTML = genresArray.map(genre => `<button class="movieGenres" href="#">${genre.trim()}</button>`);
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

        // const ratingArray = movie.rating.split(' ');
        // const ratingHTML = ratingArray.map(rating => `<span>${rating.trim()}<img src="${movie.poster}"></span>`)


        // elements.topMovies.innerHTML +=` 
        // <span>Top 5 Movies <img src="assets/icons/4781843_arrows_chevron_direction_left_move_icon.png" alt=""></span>
        // <div>
        //   <div class="content">
        //     <h2></h2>
        //     <!-- <span>UI & UX Designer</span> -->
        //   </div>
        // </div>
        // <div>
        //   <div class="content">
        //     <h2>Inception</h2>
        //     <!-- <span>CEO Expert</span> -->
        //   </div>
        // </div>
        // <div>
        //   <div class="content">
        //     <h2>Interstellar</h2>
        //     <!-- <span>Web Designer</span> -->
        //   </div>
        // </div>
        // <div>
        //   <div class="content">
        //     <h2>The Dark Knight</h2>
        //     <!-- <span>Marketing Coordinator</span> -->
        //   </div>
        // </div>
        // <div>
        //     <div class="content">
        //       <h2>Fight Club</h2>
        //       <!-- <span>Marketing Coordinator</span> -->
        //     </div>
        //   </div>`

        elements.searchResults.innerHTML += `
        <div class="card col-md-4">
        <a href ="#"><img class="moviePic" src="${movie.poster}" data-toggle="modal" data-target="#${modalId}" alt="">
        </a>
        <div>
            <h6> ${genresHTML.join(' ')}</h6>
        </div>
        <h3>${movie.name}</h3>
        <div class="movieRating">
            <img src="assets/icons/285661_star_icon.png" alt=""> <!--Rating Star-->
            <span>${movie.rating}</span>
        </div>
        <a href="#${movie.id}"><button type="button" class="modalBtn btn btn-primary movie-button" data-toggle="modal" data-target="#${modalId}">
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

           <button type="button" class="close modalClose" data-dismiss="modal">×</button>
          </div>


         <div class="modal-body">
         <div class="container-fluid mb-5">
         <div class="row">
         <div class="col-md-6">
         <img src = "${movie.poster}" style ="width:150px">
         </div>
         <div class="col-md-6">
         <h5>Description</h5>
         <p>${movie.description}</p>
         </div>
         </div>
         </div>
         
         <h5>Genres</h5>
         <div class="container-fluid">
         <div class="row">
         ${genresHTML.join(' ')}
         </div>
         </div>
         <h5>Directors</h5>
         ${directorsHTML.join(', ')}
         <h5>Stars</h5>
         ${starsHTML.join(', ')}
         <h5>Casts</h5>
         ${castHTML.join(', ')}
         <h5>Writers</h5>
         ${writersHTML.join(', ')}
         <div>
         <h5>Like This Movie</h5>
            <div class="container-fluid">
                <div class="row">
                <div class="modalCard">
                    <h4 class="mt-3">${movie.name}</h4>
                    <img style ="width:130px" src="${movie.poster}">
                    <span><button class="trailerBtn mt-3">Watch Trailer</button></span>
                </div>
                <div class="modalCard">
                    <h4 class="mt-3">${movie.name}</h4>
                    <img style ="width:130px" src="${movie.poster}">
                    <span><button class="trailerBtn mt-3">Watch Trailer</button></span>
                </div>
                </div>
            </div>
        </div>
        
         
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger modalClose" data-dismiss="modal">Close</button>
         </div>

       </div>
      </div>
     </div>

   </div>
    `
    });
}