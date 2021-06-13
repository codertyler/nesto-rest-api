import React, { useState } from 'react';
import './Preferences.css';

const Preferences = () => {
    
    const[selection, setSelection] = useState('');

    const handleOnChange = (e) => {
        return e.target.value;
    }
    
    return (
        <div className='preferences-container'>
            <h3>User Prefences</h3>
            <div className='prefences-radio-container' onChange={(e) => handleOnChange(e)}>
                <input type="radio" value="showAll" id="radioShowAll" name="cards" />
                <label for="radioShowAll">Show All</label>
                <input type="radio" value="showByAnnualFee" id="radioShowByAnnualFee" name="cards" />
                <label for="radioShowByAnnualFee">Show by Annual Fee</label>
                <input type="radio" value="showByInterestRate" id="radioShowByInterestRate" name="cards" />
                <label for="radioShowByInterestRate">Show by Purchase Interest Rate</label>
            </div>
        </div>
    )
}

export default Preferences
