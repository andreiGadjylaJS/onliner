document.querySelector('.filter').addEventListener('input', e => {
    const classListCheckbox = e.target.classList
    for (let key in classListCheckbox) {
        if (classListCheckbox[key] === 'js-check') {
            showFiltersProducts(e.target)

        }
    }
})

const showFiltersProducts = target => {
    const targetType = target.dataset.type
    const groupId = getGroupTarget(target)
    let paramsUrl

    changeObjectDataFilterValues(target)
    if (targetType === 'dictionary') {
        paramsUrl = createUrlFilterTypeDictionary(filterValues, groupId)
    } else if (targetType === 'boolean') {
        paramsUrl = createUrlFilterTypeBoolean(filterValues, groupId)
    } else if (targetType === 'number_range') {
        paramsUrl = createUrlFilterNumberRange(filterValues, groupId)
    }
    let url = createUrl(paramsUrl, targetType)
    clearPage()
    sendRequest(url)
}

const changeObjectDataFilterValues = (target) => {
    const targetType = target.dataset.type
    switch (targetType) {
        case 'dictionary': changeParamsFilterTypeDictionary(target)
            break;

        case 'boolean': changeParamsFilterTypeBoolean(target)
            break;

        case 'number_range': changeParamsFilterTypeNumberRange(target)
            break;

        default: break
    }
}

const createUrl = (paramsUrl, targetType) => {
    urlParamsFilter.find(item => item.type === targetType).urlType = paramsUrl
    const urlFilter = urlParamsFilter.map(item => item.urlType).filter(item => item).join('&')
    return `${requestURL}${urlFilter}`
}

const changeParamsFilterTypeNumberRange = target => {
    const groupId = getGroupTarget(target)
    const itemId = getItemIdTarget(target)
    const valueTargetFrom = target.value.split(',')[0]
    const valueTargetTo = target.value.split(',')[1]
    const valueFilterFromTo = filterValues.find(item => item.groupId === groupId)
    const classListTarget = target.classList

    for (let key in classListTarget) {
        if (classListTarget[key] === 'from') {
            valueFilterFromTo.from = target.value
        } else if (classListTarget[key] === 'to') {
            valueFilterFromTo.to = target.value
        } else if (classListTarget[key] === 'input--number_range-from-to' && target.checked) {
            valueFilterFromTo.from = valueTargetFrom
            valueFilterFromTo.to = valueTargetTo
        } else if (classListTarget[key] === 'input--number_range-from-to' && !target.checked) {
            valueFilterFromTo.from = ''
            valueFilterFromTo.to = ''
        }
    }
}

const createUrlFilterNumberRange = (paramsFilters, group) => {
    let params = paramsFilters.find(item => item.groupId === group)
    if (params.from && params.to) {
        return `${params.groupId}[from]=${params.from}&${params.groupId}[to]=${params.to}`
    } else if (params.from) {
        return `${params.groupId}[from]=${params.from}`
    } else if (params.to) {
        return `${params.groupId}[to]=${params.to}`
    }
}

const changeParamsFilterTypeDictionary = (target) => {
    const groupId = getGroupTarget(target)
    const itemId = getItemIdTarget(target)
    const group = filterValues.find(item => item.groupId === groupId)
    if (target.checked) {
        group.itemIds.push(itemId)
    } else {
        group.itemIds = group.itemIds.filter(item => item !== itemId)
    }
}

const createUrlFilterTypeDictionary = (paramsFilters, group) => {
    const params = paramsFilters.find(item => item.groupId === group)
    let arr = params.itemIds.map((item, index) => `${params.groupId}[${index}]=${item}`).join('&')
    return arr
}

const changeParamsFilterTypeBoolean = target => {
    const groupId = getGroupTarget(target)
    if (target.checked) {
        filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId).state = true
    } else {
        filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId).state = false
    }
}

const createUrlFilterTypeBoolean = paramsFilters => {
    return paramsFilters.filter(item => item.state).map(item => `${item.groupId}=1`).join('&')
}

const getGroupTarget = target => target.dataset.groupId
const getItemIdTarget = target => target.dataset.itemId























// let paramsUrlBoolean = ''
// let paramsUrlDictionary = ''
// let paramsUrlNumberRange = ''


// document.querySelector('.filter').addEventListener('input', e => {
//     const classListCheckbox = e.target.classList
//     for (let key in classListCheckbox) {
//         if (classListCheckbox[key] === 'js-check') {
//             showFiltersProducts(e.target)
//         }
//     }
// })

// const showFiltersProducts = target => {
//     // const targetType = target.dataset.type
//     // switch (targetType) {
//     //     case 'dictionary': paramsUrlDictionary = changeParamsFilterTypeDictionary(target)
//     //         break;

//     //     case 'boolean': paramsUrlBoolean = changeParamsFilterTypeBoolean(target)
//     //         break;

//     //     case 'number_range': paramsUrlNumberRange = changeParamsFilterNumberRange(target)
//     //         break;

//     //     default: break
//     // }
//     changeObjectDataFilterValues(target)
//     const url = createUrl(paramsUrlBoolean, paramsUrlDictionary, paramsUrlNumberRange)
//     clearPage()
//     sendRequest(url)
// }



// const changeObjectDataFilterValues = (target) => {
//     const targetType = target.dataset.type
//     const groupId = getGroupTarget(target)

//     switch (targetType) {
//         case 'dictionary': paramsUrlDictionary = changeParamsFilterTypeDictionary(target)
//             break;

//         case 'boolean': paramsUrlBoolean = changeParamsFilterTypeBoolean(target)
//             break;

//         case 'number_range': paramsUrlNumberRange = changeParamsFilterTypeNumberRange(target)
//             break;

//         default: break
//     }
// }

// const createUrl = (params1, params2, params3) => {
//     let urlParamsFilter = [params1, params2, params3].filter(item => item).join('&')
//     return `${requestURL}${urlParamsFilter}`
// }

// const changeParamsFilterTypeNumberRange = target => {
//     const groupId = getGroupTarget(target)
//     const itemId = getItemIdTarget(target)
//     const valueTargetFrom = target.value.split(',')[0]
//     const valueTargetTo = target.value.split(',')[1]
//     const valueFilterFromTo = filterValues.find(item => item.groupId === groupId)
//     const classListTarget = target.classList

//     for (let key in classListTarget) {
//         if (classListTarget[key] === 'from') {
//             valueFilterFromTo.from = target.value
//         } else if (classListTarget[key] === 'to') {
//             valueFilterFromTo.to = target.value
//         } else if (classListTarget[key] === 'input--number_range-from-to' && target.checked) {
//             valueFilterFromTo.from = valueTargetFrom
//             valueFilterFromTo.to = valueTargetTo
//         } else if (classListTarget[key] === 'input--number_range-from-to' && !target.checked) {
//             valueFilterFromTo.from = ''
//             valueFilterFromTo.to = ''
//         }
//     }
//     return createUrlFilterNumberRange(filterValues, groupId)
// }

// const createUrlFilterNumberRange = (paramsFilters, group) => {
//     let params = paramsFilters.find(item => item.groupId === group)
//     console.log(params.from, params.to)
//     if (params.from && params.to) {
//         return `${params.groupId}[from]=${params.from}&${params.groupId}[to]=${params.to}`
//     } else if (params.from) {
//         return `${params.groupId}[from]=${params.from}`
//     } else if (params.to) {
//         return `${params.groupId}[to]=${params.to}`
//     }
// }
// const getGroupTarget = target => target.dataset.groupId
// const getItemIdTarget = target => target.dataset.itemId

// const changeParamsFilterTypeDictionary = (target) => {
//     const groupId = getGroupTarget(target)
//     const itemId = getItemIdTarget(target)
//     const group = filterValues.find(item => item.groupId === groupId)
//     if (target.checked) {
//         group.itemIds.push(itemId)
//     } else {
//         group.itemIds = group.itemIds.filter(item => item !== itemId)
//     }
//     createUrlFilterTypeBooleanDictionary(filterValues, groupId)
//     return createUrlFilterTypeBooleanDictionary(filterValues, groupId)
// }
// const createUrlFilterTypeBooleanDictionary = (paramsFilters, group) => {
//     const params = paramsFilters.find(item => item.groupId === group)
//     return params.itemIds.map((item, index) => `${params.groupId}[${index}]=${item}`).join('&')
// }
// const changeParamsFilterTypeBoolean = target => {
//     const groupId = getGroupTarget(target)
//     if (target.checked) {
//         filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId).state = true
//     } else {
//         filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId).state = false
//     }
//     return createUrlFilterTypeBoolean(filterValues)
// }

// const createUrlFilterTypeBoolean = paramsFilters => {
//     return paramsFilters.filter(item => item.state).map(item => `${item.groupId}=1`).join('&')
// }






















        // }
            // const params = filterValues.map((group, index) => {
            //     if(group.state === true) {
            //         return `${group.groupId}=1`
            //     }
            // })

        // })
        // .filter(item => item)
        // .join('&')
        // let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`
        // clearPage(requestURL)
        // sendRequest(requestURL)


// }
    // if (!target.checked) {
    //     checkProductsTypeBoolean.splice((checkProductsTypeBoolean.indexOf(target.value + '=1')), 1)
    //     requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?` + `${checkProductsTypeBoolean.join('&')}`
    //     clearPage()
    //     sendRequest(requestURL)
    // }



// // const group = filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === groupId);
// // group.state = target.checked ? true : false;

 // // const changeParamsFiltersTypeBoolean = (target) => {
////     filterValues.find(itemTypeBoolean => itemTypeBoolean.groupId === getGroupTarget(target)).state = target.checked
////     return createUrlFilterTypeBoolean(filterValues)
//// }






// const filtersProducts = (target) => {
//     const groupId = target.dataset.groupId
//     const itemId = target.dataset.itemId
//     const selectedFilter = filterValues.find(item => item.groupId === groupId)
//     if (!selectedFilter) {
//         filterValues.push({ groupId, itemIds: [itemId] })
//     } else {
//         if (target.checked) {
//             selectedFilter.itemIds.push(itemId)
//         } else if (!target.checked) {
//             selectedFilter.itemIds = selectedFilter.itemIds.filter(item => item !== itemId)
//         }
//     }

//     const params = filterValues.map(group => {
//         return group.itemIds.map((item, index) => `${group.groupId}[${index}]=${item}`).join('&')
//     })
//         .filter(f => f)
//         .join('&')

//     const requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`

//     clearPage()
//     sendRequest(requestURL)
