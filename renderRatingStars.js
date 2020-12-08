const renderRatingStars = rating => {
    let stars = []
    const star = `<i class="fas fa-star stars__in" ></i>`
    const sterHalf = `<i class="fas fa-star-half-alt"></i>`
    const badStar = `<i class="fas fa-star stars__in fas_in" ></i>`

    const firstReview = '<p>Оставьте первый отзыв!</p>'
    if (!rating) {
        return firstReview
    } else if (rating % 10) {
        for (let i = 10; i < rating; i += 10) {
            stars.push(star)
        }
        const fiveStars = getFiveStars(stars)
        return fiveStars.join('')
    } else if (!(rating % 10)) {
        for (let i = 10; i < rating; i += 10) {
            stars.push(star)
        }
        stars.push(sterHalf)
        const fiveStars = getFiveStars(stars)
        return fiveStars.join('')
    }

}


const getFiveStars = (arr) => {
    const arrStars = [
        `<i class="fas fa-star stars__in fas_in" ></i>`,
        `<i class="fas fa-star stars__in fas_in" ></i>`,
        `<i class="fas fa-star stars__in fas_in" ></i>`,
        `<i class="fas fa-star stars__in fas_in" ></i>`,
        `<i class="fas fa-star stars__in fas_in" ></i>`
    ]
    arrStars.splice(0, arr.length, ...arr).reverse()
    return arrStars
}

