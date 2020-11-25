const arrCheckProducts = []
const contentFilter = []
let filterValues = []
let urlParamsFilter = []

let current = 1
let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?`
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
        .then(response => {
            filterValues = response.facets.general.items.map(item => {
                if (item.type === 'dictionary') {
                    return {
                        type: item.type, 'groupId': item.parameter_id, 'itemIds': []
                    }
                } else if (item.type === 'number_range') {
                    return {
                        type: item.type, 'groupId': item.parameter_id, 'from': '', 'to': ''
                    }
                } else if ('boolean') {
                    return {
                        type: item.type, 'groupId': item.parameter_id, 'state': false
                    }
                }
            })
            urlParamsFilter = response.facets.general.items.map(item => item.type)
            urlParamsFilter = Array.from(new Set(urlParamsFilter)).map(item => { return { type: item, urlType: '' } })
            return showFilterProducts(response)
        })
}

sendRequest(requestURL)
sendRequestFacets(requestFacets)

