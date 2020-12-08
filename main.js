let filterValues = []
let urlNextPage = ''
let current = 1
let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/smartwatch?group=1`
let requestFacets = `https://catalog.onliner.by/sdapi/catalog.api/facets/smartwatch`


function sendRequest(url) {
    return fetch(url)
        .then(response => response.json())
        .then(({ products }) => products)
        .then(products => getOptions(products))
        .then(products => renderProducts(products)
        )
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
                } else if (item.type === 'boolean') {
                    return {
                        type: item.type, 'groupId': item.parameter_id, 'state': false
                    }

                }
            })
            return showFilterProducts(response)
        })
}

sendRequest(requestURL)
sendRequestFacets(requestFacets)
const clearPage = () => document.querySelector('.content').innerHTML = ''


const icons = document.querySelector('.header__icon > ul')

icons.addEventListener('mouseover', e => {
    for (let key in e.target.classList) {
        if (e.target.classList[key] === 'fa-angle-up fas') {
            return
        } else if (e.target.classList[key] === 'far') {
            e.target.classList.remove('far')
            e.target.classList.add('fas')
            return
        }
    }
}
)

icons.addEventListener('mouseout', e => {
    for (let key in e.target.classList) {
        if (e.target.classList[key] === 'fa-angle-up fas') {
            return
        } else if (e.target.classList[key] === 'fas') {
            e.target.classList.remove('fas')
            e.target.classList.add('far')
            console.log(1)
        } else {
        }
    }
}
)