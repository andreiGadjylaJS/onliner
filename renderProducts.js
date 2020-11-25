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
                             <img src='https:${item.images.header}' alt="" width='50px'>
    
                             <div class='product__discription'>
                                <h2>${item.name_prefix}</h2>
                                <p>${item.description}</p>
                            </div>
                
                            <p class='price'>от ${Math.trunc(item.price_min)} р.</p>
                
                            <input type="button" value='${item.offers} предложения' class='product__btn'>
                        </div>
                     `;
            })
    }

    product.innerHTML = str
    document.querySelector('.content').append(product)
}







