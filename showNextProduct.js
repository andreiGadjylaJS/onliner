const inputNextProduct = document.querySelector('.input__next')

inputNextProduct.addEventListener('click', showNewPage)

function showNewPage() {
    requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?page=${current}`
    clearPage()
    sendRequest(requestURL)
}



























// const inputNextProduct = document.querySelector('.input__next')

// inputNextProduct.addEventListener('click', showNewPage)

// function showNewPage() {

//     if (arrCheckProducts.length === 0) {
//         requestURL = `https://catalog.onliner.by/sdapi/catalog.api/search/refrigerator?page=${current}`
//         clearPage()
//         sendRequest(requestURL)
//     } else {
//         requestURL = urlFilter + `&page=${current}`
//         clearPage()
//         sendRequest(requestURL)
//     }



// }