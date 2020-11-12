
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







