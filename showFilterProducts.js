const showFilterProducts = (response) => {
    let facetsItems = response.facets.general.items
    let facetsDictionaries = response.dictionaries
    console.log(response)
    facetsItems.forEach(item => {
        switch (item.type) {
            case 'dictionary': renderDictionaryFilter(item, response)
                break;

            case 'boolean': renderBooleanFilter(item)
                break;

            case 'number_range': renderNumber_rangeFilter(item)
                break;

            default: break
        }
    })
}


const renderDictionaryFilter = (item, response) => {
    let current = 0
    let checkboxFilter = document.createElement('div')
    checkboxFilter.classList = 'filter__block_wrapper'
    if (item.name) { checkboxFilter.innerHTML = ` <h4 class='filter__heading'>${item.name}</h4>` }
    for (let i = 0; i < response.dictionaries[item.parameter_id].length; i++) {
        if (current > 4) break
        checkboxFilter.innerHTML += `<label><input type='checkbox' class='filter__checkbox js-check'>${response.dictionaries[item.parameter_id][i].name}</label>`
        document.querySelector('.filter').append(checkboxFilter)
        current++
    }


}


const renderBooleanFilter = item => {
    let checkboxFilter = document.createElement('div')
    checkboxFilter.classList = 'filter__block_wrapper checkbox-boolean'
    checkboxFilter.innerHTML = `<label><input type='checkbox' class='filter__checkbox js-check'>${item.name}</label>`
    document.querySelector('.filter').append(checkboxFilter)

}

const renderNumber_rangeFilter = (item) => {
    let checkboxFilter = document.createElement('div')
    checkboxFilter.classList = 'filter__block_wrapper '
    checkboxFilter.innerHTML = `<div class='wrapper__input--number_range'><h4 class='filter__heading'>${item.name}</h4>
    <input type='text' class='filter__checkbox js-check input--number_range'  ><input type='text' class='filter__checkbox js-check input--number_range'></div>`
    document.querySelector('.filter').append(checkboxFilter)
}
























// let newrequestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?`
// let urlFilter
// document.querySelector('.wrapper__filter').addEventListener('click', e => {

//     if (e.target.classList[0] === 'filter__name') { filterProducts(e.target) }

// })



// function filterProducts(item) {

//     if (item.checked) {
//         arrCheckProducts.push(item.value)
//         urlFilter = newrequestURL + arrCheckProducts.map((item, index) => {
//             if (index > 0) { return `&mfr[${index}]=${item}` }
//             return `mfr[${index}]=${item}`
//         }).join('')

//         clearPage()
//         sendRequest(urlFilter)
//     }
//     if (!item.checked) {
//         arrCheckProducts.splice((arrCheckProducts.indexOf(item.value)), 1)
//         urlFilter = newrequestURL + arrCheckProducts.map((item, index) => {
//             if (index > 0) { return `&mfr[${index}]=${item}` }
//             return `mfr[${index}]=${item}`
//         }).join('')
//         clearPage()
//         sendRequest(urlFilter)

//     }
//     if (arrCheckProducts.length === 0) {
//         clearPage()
//         sendRequest(requestURL)
//     }
//     current--
// }



































