import React from "react";
import "./CreditItem.css";

const CardItem = ({ item }) => {
  const creditCard = item.creditCards.map((card) => (
    <div className="card" key={card.id}>
      <div className="card-inner">
        <div className="card-front">
          <img src={card.thumbnailURL}></img>
        </div>
        <div className="card-back">
          <h4>{card.cardName}</h4><br/>
          <ul>
            <li>Annual fee: ${card.annualFee}</li>
            <li>Provider: {card.provider}</li>
            <li>
              Purchase Interest rate:{" "}
              {card.purchaseInterest ? `${((card.purchaseInterest)*100).toFixed(2)}%` : `${((card.purchaseInterestRange[0])*100).toFixed(2)}% - ${((card.purchaseInterestRange[1])*100).toFixed(2)}%`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));

  return <> {creditCard} </>;
};

export default CardItem;
