const getOptions = products => {
    return products.map(item => {
        return {
            id: item.id,
            name_prefix: item.extended_name,
            images: item.images,
            description: item.description,
            offers: item.prices ? item.prices.offers.count : 0,
            price_min: item.prices ? item.prices.price_min.amount : null,
        }
    })
}