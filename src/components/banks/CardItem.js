import React from 'react'

const CardItem = ({item}) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.creditCards.map((card) => card.thumbnailURL)}></img>
                </div>

            </div>
        </div>
    )
}

export default CardItem
