import React from 'react'

const BankGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {items.map((item) => (
            <>
            {/* <h1 key={item.name}>{item.name}</h1> */}
            <h2 key={item.id}>{item.creditCards.map((card) => card.cardName)}</h2>
            </>
        ))}
    </section>)
}

export default BankGrid
