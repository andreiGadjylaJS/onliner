const showFilterProducts = (response) => {
    const facetsItems = response.facets.general.items
    const dictionaries = response.dictionaries
    let str = ''

    facetsItems.forEach(item => {
        switch (item.type) {
            case 'dictionary': renderDictionaryFilter(item, dictionaries)
                break;

            case 'boolean': renderBooleanFilter(item)
                break;

            case 'number_range': renderNumber_rangeFilter(item)
                break;

            default: break
        }
    })
    const checkboxFilter = document.createElement('div')
    checkboxFilter.classList = 'filter__block_wrapper checkbox-boolean'
    checkboxFilter.innerHTML = `${contentFilter.join('')}`
    document.querySelector('.filter').append(checkboxFilter)

}

const renderDictionaryFilter = (item, dictionaries) => {
    const nameParameter = dictionaries[item.parameter_id]
    str = `<h4 class='filter__heading'>${item.name}</h4>`
    nameParameter.forEach((item, index) => {
        if (index < 5) {
            str += `<label><input type='checkbox' class='filter__checkbox js-check'>${nameParameter[index].name}</label>`;
        }
    })
    contentFilter.push(str)
}

const renderBooleanFilter = item => {
    str = `<label><input type='checkbox' class='filter__checkbox js-check'>${item.name}</label>`
    contentFilter.push(str)
}

const renderNumber_rangeFilter = item => {
    str = `
        <h4 class='filter__heading'>${item.name}</h4>
        <input type='text' class='filter__checkbox js-check input--number_range'  >
        <input type='text' class='filter__checkbox js-check input--number_range'>       `
    contentFilter.push(str)
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



































