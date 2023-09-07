import Search from "./search.js";
import { elements } from "./base.js";
import * as searchView from "./searchView.js"
import * as movieView from "./movieDetails.js"
import { Movie } from "./movie.js";


const state = {}

const searchController = async () => {
    const keyword = elements.searchInput.value

    if (keyword) {
        state.search = new Search()

        await state.search.getResult(keyword)
        searchView.clearInput()
        searchView.clearResults()
        searchView.displayResults(state.search.data, keyword)
    }
    else {
        alert('kelime giriniz')
    }
}


elements.searchForm.addEventListener('submit', function (e) {
    e.preventDefault()
    searchController()
})

//Film içeriğinin hashlere göre gösterilmesi

const movieDetail = async () => {
    const id = window.location.hash.replace('#', '')
    if (id) {
        state.movie = new Movie(id)

        await state.movie.getMovie()
        //console.log(state.movie)
        //movieView.displayMovie(state.movie.data)
    }
}
window.addEventListener('hashchange', movieDetail)

