import React from "react";
import "./CreditItem.css";
import {
    rankByInterestRate,
    rankByAnnualFee
} from '../../helpers/RankingCards';

const RankedCards = ({ RESPData }) => {
    const data = rankByAnnualFee(RESPData);

    const creditCard = data.map((card) => (
    <div className="card" key={data.id}>
      <div className="card-inner">
        <div className="card-front">
          <img src={data.thumbnailURL}></img>
        </div>
        <div className="card-back">
          <h4>{data.cardName}</h4><br/>
          <ul>
            <li>Annual fee: ${data.annualFee}</li>
            <li>Provider: {data.provider}</li>
            <li>
              Purchase Interest rate:{" "}
              {data.purchaseInterest ? `${((card.purchaseInterest)*100).toFixed(2)}%` : `${((card.purchaseInterestRange[0])*100).toFixed(2)}% - ${((card.purchaseInterestRange[1])*100).toFixed(2)}%`}
            </li>
          </ul>
        </div>
      </div>
    </div>
  ));

  return <> {creditCard} </>;
};

export default RankedCards;