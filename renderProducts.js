const renderProducts = products => {

    let str = ''
    const product = document.createElement('div')
    product.classList = 'product'

    if (!products.length) {
        str = `<p class='noProducts'>Упс! У нас нет таких товаров, попробуйте изменить условия поиска.</p>`
    } else {
        products.forEach(
            item => {
                str += `
                         <div class='products-position'>
                         <a href='${item.urlDescription}'><img src='https:${item.images.header}' alt="" width='130px'></a>
                             <div class='product__description'>
                             <a href='${item.urlDescription}'>${item.name_prefix}</a>
                                <p>${item.description}</p>
                                <div class = "wrapper--star">
                        ${renderRatingStars(item.rating)}
                        <div class="reviews"><a href='${item.urlReviews}'> ${getWordDeclineReview(item.count)}</a></div>
                             </div>
                            </div>
                            <p class='price'> <a href="${item.urlPrice}">от ${Math.trunc(item.price_min)} р.</a></p>
                            <div class="wrapper__button product__btn"><a href='${item.urlPrice}'> ${getWordDeclineOffers(item.offers)}</a></div>
                        </div>
                        ${renderColorOptions(item.children)}
                        
                       
                     `;
            })

    }

    product.innerHTML = str
    document.querySelector('.content').append(product)
}


const renderPrices = url => {
    sendRequest(url)
}

const getWordDeclineOffers = num => {
    const words = ['предложение', 'предложения', 'предложений']
    let word = inclinesWord(words, num)
    return num + ' ' + word
}

const renderColorOptions = options => {
    if (options) {
        return options.map((i, index) => {
            if (index < 3) {
                return `<div class='wrapper--product-children'>
            <div class="wrapper--img"><a href ="${i.html_url}"><img src='https:${i.images.header}' alt="" width='60px' height="60px"> <a>
            <p class='children--name'><a href ="${i.html_url}">${i.extended_name}<a></p>
            </div> 
            <div class="wrapper--price"> <p><a href="${i.prices.html_url}">от ${Math.trunc(i.prices.price_min.amount)} р.</a></p>
             <a href='${i.prices.html_url}'> ${getWordDeclineOffers(i.prices.offers.count)}</a></div>
             </div><div class="border"></div>`}
        }).join('')
    }
    return ''

}
const getWordDeclineReview = num => {
    const words = ['отзыв', 'отзыва', 'отзывов']
    if (!num) { return '' }
    let word = inclinesWord(words, num)
    return num + ' ' + word
}

const inclinesWord = (arr, num) => {
    let count = num % 100
    if (count >= 5 && count <= 20) {
        return result = arr[2]
    } else {
        count = num % 10
        if (count == 1) {
            return result = arr[0]
        } else if (count >= 2 && count <= 4) {
            return result = arr[1]
        } else {
            return result = arr[2]
        }
    }
}