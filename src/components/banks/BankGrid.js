import React from 'react';
import BankItem from './BankItem';
import Spinner from '../ui/Spinner';

const BankGrid = ({ items, isLoading }) => {
    return isLoading ? (<Spinner />) : (<section className="cards">
        {items.map((item) => (
            <>
            <BankItem key={item.id} item={item}></BankItem>
            </>
        ))}
    </section>)
}

export default BankGrid
