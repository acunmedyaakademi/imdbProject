import { elements } from "./base.js";

export const clearResults = () => {
    elements.innerHTML = ''
}

export const displayResults = (data, keyword) => {
    const filteredData = data.filter(movie => {
        return  movie.rating.toLowerCase().includes(keyword.toLowerCase());
    })};

    filteredData.forEach(movie => {
        const ratingArray = movie.rating.split(' ');
        const ratingHTML = ratingArray.map(rating => `<span>${rating.trim()}<img src="${movie.poster}"></span>`)


        elements.searchResults.innerHTML += `<span>Top 5 Movies <img src="assets/icons/4781843_arrows_chevron_direction_left_move_icon.png" alt=""></span>
        <div>
          <div class="content">
            <h2>${ratingHTML}</h2>
            <span><button>Watch Trailer</button></span>
          </div>
        </div>
        <div>
          <div class="content">
            <h2>Inception</h2>
            <span><button>Watch Trailer</button></span>
          </div>
        </div>
        <div>
          <div class="content">
            <h2>Interstellar</h2>
            <span><button>Watch Trailer</button></span>
          </div>
        </div>
        <div>
          <div class="content">
            <h2>The Dark Knight</h2>
            <span><button>Watch Trailer</button></span>
          </div>
        </div>
        <div>
            <div class="content">
              <h2>Fight Club</h2>
               <span><button>Watch Trailer</button></span>
            </div>
          </div>`
    });