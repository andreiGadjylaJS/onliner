document.querySelector('.filter').addEventListener('click', e => {
    if (e.target.classList[1] === 'js-check') {
        filtersProducts(e.target)
    }
    console.log(filterValues)
})

const filtersProducts = (target) => {
    const groupId = target.dataset.groupId
    target.addEventListener('input', () => {
        if (target.classList[3] === 'from') {
            filterValues.find(item => {
                if (item.groupId === groupId) {
                    item.from = target.value
                    return
                }
            })
        }
        if (target.classList[3] === 'to') {
            console.log('to')
            filterValues.find(item => {
                if (item.groupId === groupId) {
                    item.to = target.value
                    return
                }
            })
        }
        const params = filterValues.map((group, index) => {
            if (group.from === '' && group.to === '') {
                return
            } else if (group.from && group.to) {
                return `${group.groupId}[from]=${group.from}&${group.groupId}[to]=${group.to}`
            } else if (group.from) {
                return `${group.groupId}[from]=${group.from}`
            } else if (group.to) {
                return `${group.groupId}[to]=${group.to}`
            }
        })
            .filter(item => item)
            .join('&')

        let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`
        console.log(requestURL)
        clearPage()
        sendRequest(requestURL)
    })


}


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



const filtersProducts = (target) => {
    const groupId = target.dataset.groupId
    if (target.checked) {
        filterValues.map(group => {
            if (group.groupId === groupId) {
                group.state = true
            }
        })
        const params = filterValues.map((group, index) => {
            if (group.state === true) {
                return `${group.groupId}=1`
            }
        })
            .filter(item => item)
            .join('&')

        let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`
        clearPage()
        sendRequest(requestURL)
    }

    if (!target.checked) {
        filterValues.map(group => { if (group.groupId === groupId) { group.state = false } })

        const params = filterValues.map(group => {
            if (group.state === true) {
                return `${group.groupId}=1`
            }
        })
            .filter(item => item)
            .join('&')

        let requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?${params}`
        clearPage()
        sendRequest(requestURL)

    }

}




























































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
