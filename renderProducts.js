
let renderProducts = products => {
    products.forEach(
        item => {
            let product = document.createElement('div')
            product.classList = 'product'
            product.innerHTML = `
                <img src='https:${item.images.header}' alt="коврик">
    
                <div class='product__discription'>
                    <h2>${item.name_prefix}</h2>
                    <p>${item.description}</p>
                </div>
            
                <p class='price'>от ${Math.trunc(item.price_min)} р.</p>
            
                <input type="button" value='${item.offers} предложения' class='product__btn'>
            `;

            document.querySelector('.content').append(product)
        })
    current++
}


let renderFilter = response => {
    let contentFilter = document.createElement('div')

    contentFilter.classList = 'wrapper__filter_block'

    contentFilter.innerHTML = `
        <label><input type="checkbox" class='checkbox'>${facets.general.items[1].name}</label>
        <label><input type="checkbox">${facets.general.items[2].name}</label>
        <p class='filter__name'>${facets.general.items[3].name}</p>
     `

    for (let i = 0; i < dictionaries.mfr.length; i++)
        contentFilter.innerHTML += `<label><input type="checkbox" class='checkbox'>${dictionaries.mfr[i].name}</label>`

    document.querySelector('.filter').append(contentFilter)

    document.querySelector('.wrapper__filter_block').addEventListener('click', event => {
        if (event.target.classList[0] === 'checkbox') { console.log('hello'); filterProducts(e.target) }
    })

}


function filterProducts(item) {
    console.log(item)
}





