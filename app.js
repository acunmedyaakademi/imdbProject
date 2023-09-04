import Search from "./search.js";
import { elements } from "./base.js";
import * as searchView from "./searchView.js"


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