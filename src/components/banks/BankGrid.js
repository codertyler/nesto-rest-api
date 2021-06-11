import React from 'react';
import CardItem from './CardItem';

const BankGrid = ({ items, isLoading }) => {
    return isLoading ? (<h1>Loading...</h1>) : (<section className="cards">
        {items.map((item) => (
            <>
            {/* <h1 key={item.name}>{item.name}</h1> */}
            <CardItem key={item.id} item={item.map}></CardItem>
            </>
        ))}
    </section>)
}

export default BankGrid
