document.querySelector('.filter').addEventListener('input', e => {
    const classListCheckbox = e.target.classList
    for (let key in classListCheckbox) {
        if (classListCheckbox[key] === 'js-check') {
            showsFilteredProducts(e.target)
        }
    }
})

const showsFilteredProducts = target => {
    const targetType = target.dataset.type
    const groupId = getGroup(target)
    changeObjectDataFilterValues(target)
    urlNextPage = `https://catalog.onliner.by/sdapi/catalog.api/search/smartwatch?${getChangeFilterValues()}&group=1`
    clearPage()
    sendRequest(urlNextPage)
}

const changeObjectDataFilterValues = target => {
    const targetType = target.dataset.type
    switch (targetType) {
        case 'dictionary': changeParamsFilterTypeDictionary(target)
            break;
        case 'boolean': changeParamsFilterTypeBoolean(target)
            break;
        case 'number_range': changeParamsFilterTypeNumberRange(target)
            break;
        // case 'dictionary_range': changeParamsFilterTypeDictionaryRange(target)
        default: break
    }
}

const getChangeFilterValues = () => {
    return filterValues.map(i => {
        switch (i.type) {
            case 'dictionary': return getParamsForDictionary(i);
            case 'boolean': return getParamsForBoolean(i);
            case 'number_range': return getParamsForNumberRange(i);
        }
    }).filter(f => f).join('&')
}

const getParamsForDictionary = i => {
    return i.itemIds.length
        ? i.itemIds.map((f, pos) => `${i.groupId}[${pos}]=${f}`).join('&')
        : ''
}

const getParamsForBoolean = i => {
    return i.state ? `${i.groupId}=1` : ''
}

const getParamsForNumberRange = i => {
    const from = i.from ? `${i.groupId}[from]=${i.from}` : ''
    const to = i.to ? `${i.groupId}[to]=${i.to}` : ''
    return [from, to].filter(f => f).join('&')
}

const changeParamsFilterTypeNumberRange = target => {
    const groupId = getGroup(target)
    const valueFrom = target.value.split(',')[0]
    const valueTo = target.value.split(',')[1]
    const filterFromTo = filterValues.find(itemTypeNumberRange => itemTypeNumberRange.groupId === groupId)
    const classListTarget = target.classList

    for (let key in classListTarget) {
        if (classListTarget[key] === 'from') {
            filterFromTo.from = target.value
        } else if (classListTarget[key] === 'to') {
            filterFromTo.to = target.value
        } else if (classListTarget[key] === 'input--number_range-from-to' && target.checked) {
            filterFromTo.from = valueFrom
            filterFromTo.to = valueTo
            changeValueNumberRangeTypeNumber(target, valueFrom, valueTo)
        } else if (classListTarget[key] === 'input--number_range-from-to' && !target.checked) {
            filterFromTo.from = ''
            filterFromTo.to = ''
            changeValueNumberRangeTypeNumber(target)
        }
    }
}

const changeValueNumberRangeTypeNumber = (target, valueFrom = '', valueTo = '') => {
    target.parentNode.parentNode.querySelector('.from').value = valueFrom
    target.parentNode.parentNode.querySelector('.to').value = valueTo
}

const changeParamsFilterTypeDictionary = target => {
    const groupId = getGroup(target)
    const itemId = getItemIdTarget(target)
    const group = filterValues.find(itemTypeDictionary => itemTypeDictionary.groupId === groupId)
    target.checked ? group.itemIds.push(itemId) : group.itemIds = group.itemIds.filter(item => item !== itemId)
}

const changeParamsFilterTypeBoolean = target => {
    const groupId = getGroup(target)
    const dataState = filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId)
    target.checked ? dataState.state = true : dataState.state = false
}

const getGroup = target => target.dataset.groupId
const getItemIdTarget = target => target.dataset.itemId



