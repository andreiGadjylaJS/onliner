// let filterValues = [];
document.querySelector('.filter').addEventListener('click', e => {
    if (e.target.classList[1] === 'js-check') {
        filtersProducts(e.target)
    }
})


const filtersProducts = (target) => {
    const groupId = target.dataset.groupId
    const itemId = target.dataset.itemId
    if (target.checked) {
        filterValues.map(item => {
            if (item.groupId === groupId) {
                item.itemIds.push(itemId)
            } return
        })
    } else if (!target.checked) {
        filterValues.map(item => {
            item.itemIds = item.itemIds.filter(item => item !== itemId)
        })
    }

    const params = filterValues.map((group, index) => {
        if (group.itemIds.length === 0) {

        } else {
            return group.itemIds.map((item, index) => `${group.groupId}[${index}]=${item}`).join('&')
        }

    })
        .filter(item => item)
        .join('&')


    const requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`
    console.log(requestURL)
    clearPage()
    sendRequest(requestURL)
}
















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
// }













// const filtersProducts = (data) => {
//     if (data.checked) {
//         checkProductsTypeBoolean.push(data.value + '=1')
//         requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?` + `${checkProductsTypeBoolean.join('&')}`
//         clearPage()
//         sendRequest(requestURL)
//     }
//     if (!data.checked) {
//         checkProductsTypeBoolean.splice((checkProductsTypeBoolean.indexOf(data.value + '=1')), 1)
//         requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?` + `${checkProductsTypeBoolean.join('&')}`
//         clearPage()
//         sendRequest(requestURL)

//     }
// }











