const CardData = (card) => {
    return(
        <div>
            {card.map(items => {
                return(
                    <div key={items.id}>
                    <div className="contentitems">
                        <h2>{items.title}</h2>
                        <p>{items.body}</p>
                    </div>
                </div>
                )     
            })}
        </div>
    )
}

export default CardData