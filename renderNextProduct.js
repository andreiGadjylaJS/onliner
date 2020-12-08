const inputNextProduct = document.querySelector('.input__next')

inputNextProduct.addEventListener('click', showNewPage)

function showNewPage() {
    current++
    urlNextPage ? requestURL = `${urlNextPage}&page=${current}` : requestURL = requestURL + `&page=${current}`
    clearPage()
    sendRequest(requestURL)
}


