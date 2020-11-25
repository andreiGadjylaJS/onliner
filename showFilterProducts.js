const showFilterProducts = (response) => {
    const facetsItems = response.facets.general.items.slice(1)
    const dictionaries = response.dictionaries
    const placeholders = response.placeholders

    facetsItems.forEach(item => {
        switch (item.type) {
            case 'dictionary': renderDictionaryFilter(item, dictionaries)
                break;

            case 'boolean': renderBooleanFilter(item)
                break;

            case 'number_range': renderNumberRangeFilter(item, placeholders)
                break;

            default: break
        }
    })
    const checkboxFilter = document.createElement('div')
    checkboxFilter.classList = 'filter__block_wrapper checkbox-boolean'
    checkboxFilter.innerHTML = `${contentFilter.join('')}`
    document.querySelector('.filter').append(checkboxFilter)

}
const renderDictionaryFilter = (facetsItems, dictionaries) => {
    if (facetsItems.popular_dictionary_values && facetsItems.popular_dictionary_values.length > 1) {
        const nameParameter = dictionaries[facetsItems.parameter_id]

        str = `<h4 class='filter__heading'>${facetsItems.name}</h4>`
        const popularItems = dictionaries[facetsItems.parameter_id].filter(item => facetsItems.popular_dictionary_values.includes(item.id));
        nameParameter.forEach((item, index) => {
            if (index < 5) {
                str += `<label><input type='checkbox' class='filter__checkbox js-check' data-group-id='${facetsItems.parameter_id}' data-item-id='${popularItems[index].id}' data-type='${facetsItems.type}'>${popularItems[index].name}</label>`;

            }
        })
    } else {
        const nameParameter = dictionaries[facetsItems.parameter_id]
        str = `<h4 class='filter__heading'>${facetsItems.name}</h4>`

        nameParameter.forEach((item, index) => {
            if (index < 5) {
                str += `<label><input type='checkbox' class='filter__checkbox js-check' data-group-id='${facetsItems.parameter_id}' data-item-id='${item.id}' data-type='${facetsItems.type}'>${nameParameter[index].name}</label>`;
            }
        })
    }
    contentFilter.push(str)
}

const renderBooleanFilter = facetsItems => {
    str = `<label><input type='checkbox' class='filter__checkbox js-check checkbox--typeBoolean' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}'>${facetsItems.name}</label>`
    contentFilter.push(str)
}

const renderNumberRangeFilter = (facetsItems, placeholders) => {
    let newStr = ``
    if (facetsItems.predefined_ranges) {
        facetsItems.predefined_ranges.forEach((item, index) => {
            newStr += `<label><input type='checkbox' class='filter__checkbox js-check input--number_range-from-to' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' value='${[facetsItems.predefined_ranges[index].from, facetsItems.predefined_ranges[index].to]}'>${item.name}</label>`
        })
        str = `
        <h4 class='filter__heading'>${facetsItems.name}</h4>
        <div class='wrapper__number_range'>
        <div class='wrapper__number_range-entry-field'>
            <input type='number' class='filter__checkbox js-check input--number_range from' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' placeholder='${placeholders[facetsItems.parameter_id].from}' value=''>
            <input type='number' class='filter__checkbox js-check input--number_range to' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' placeholder='${placeholders[facetsItems.parameter_id].to}' value=''>   
        </div>
        ${newStr} </div> 
         `

    } else {
        str = `
        <h4 class='filter__heading'>${facetsItems.name}</h4>
        <div class='wrapper__number_range_minPrice'>
            <input type='number' class='filter__checkbox js-check input--number_range from' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' value=''>
            <input type='number' class='filter__checkbox js-check input--number_range to' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' value=''>   
        </div>`
    }
    contentFilter.push(str)
}



























































