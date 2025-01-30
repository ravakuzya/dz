export const Price = ({textName}) => {
    return <p>{textName}</p>
}

export const PriceTovar = ({tovarName}) => {
    return <p>{tovarName}</p>
}

export const PriceFirst = ({priceFirst,priceSecond}) => {
    return <span className="span-in-span">{priceFirst} <span>{priceSecond}</span></span>
}
