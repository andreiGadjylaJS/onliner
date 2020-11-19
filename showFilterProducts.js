const showFilterProducts = (response) => {
    const facetsItems = response.facets.general.items.slice(1)
    const dictionaries = response.dictionaries
    facetsItems.forEach(item => {
        switch (item.type) {
            case 'dictionary': renderDictionaryFilter(item, dictionaries)
                break;

            case 'boolean': renderBooleanFilter(item)
                break;

            case 'number_range': renderNumberRangeFilter(item)
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
    const nameParameter = dictionaries[facetsItems.parameter_id]
    str = `<h4 class='filter__heading'>${facetsItems.name}</h4>`

    nameParameter.forEach((item, index) => {
        if (index < 5) {
            str += `<label><input type='checkbox' class='filter__checkbox js-check' data-group-id='${facetsItems.parameter_id}' data-item-id='${item.id}' data-type='${facetsItems.type}'>${nameParameter[index].name}</label>`;
        }
    })
    contentFilter.push(str)
}

const renderBooleanFilter = facetsItems => {
    str = `<label><input type='checkbox' class='filter__checkbox js-check checkbox--typeBoolean' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}'>${facetsItems.name}</label>`
    contentFilter.push(str)
}

const renderNumberRangeFilter = facetsItems => {
    let newStr = ``
    if (facetsItems.predefined_ranges) {
        facetsItems.predefined_ranges.forEach(item => {
            newStr += `<label><input type='checkbox' class='filter__checkbox js-check checkbox--typeBoolean' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}'>${item.name}</label>`
        })
    }
    str = `
        <h4 class='filter__heading'>${facetsItems.name}</h4>
        <div class='wrapper__number_range'>
            <input type='number' class='filter__checkbox js-check input--number_range from' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' value=''  >
            <input type='number' class='filter__checkbox js-check input--number_range to' data-group-id='${facetsItems.parameter_id}' data-type='${facetsItems.type}' value=''>   
        </div>` + newStr

    console.log(str)
    contentFilter.push(str)
}



























































