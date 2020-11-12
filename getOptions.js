let getOptions = products => {
    return products.map(item => {
        return {
            id: item.id,
            name_prefix: item.extended_name,
            images: item.images,
            description: item.description,
            offers: item.prices.offers.count,
            price_min: item.prices.price_min.amount
        }
    })
}