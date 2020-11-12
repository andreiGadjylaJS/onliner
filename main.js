const arrCheckProducts = []
let current = 1
let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator`
let requestFacets = `https://catalog.onliner.by/sdapi/catalog.api/facets/refrigerator`
const clearPage = () => document.querySelector('.content').innerHTML = ''

function sendRequest(url) {
    return fetch(url)
        .then(response => response.json())
        .then(({ products }) => products)
        .then(products => getOptions(products))
        .then(products => renderProducts(products))
}

function sendRequestFacets(url) {
    return fetch(url)
        .then(response => response.json())
        .then(response => { return { dictionaries, facets, placeholders, segments } = response })
        .then(response => {
            console.log(response)
            return renderFilter(response)
        })

}





sendRequest(requestURL)
sendRequestFacets(requestFacets)



























