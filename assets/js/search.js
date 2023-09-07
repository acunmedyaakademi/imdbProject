export default class Search {
    constructor(keyword) {
        this.keyword = keyword
    }

    async getResult() {
        const response = await fetch(
            'https://qvrzjkrzegjeagmsdgvq.supabase.co/rest/v1/movies'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cnpqa3J6ZWdqZWFnbXNkZ3ZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzU4MzM2MiwiZXhwIjoyMDA5MTU5MzYyfQ.s4EaHKOWe-13WSOhbztlN3M-_ADvzByda5rV-jN1M3g",
                    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2cnpqa3J6ZWdqZWFnbXNkZ3ZxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5MzU4MzM2MiwiZXhwIjoyMDA5MTU5MzYyfQ.s4EaHKOWe-13WSOhbztlN3M-_ADvzByda5rV-jN1M3g'
                }
            })
        this.data = await response.json()


    }
}