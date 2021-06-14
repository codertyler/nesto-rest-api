import React from "react";
import CardItem from "./CardItem";
import "./BankItem.css";

//This component will show all the available bank cards with bank name on top.

const BankItem = ({ item, items, selection }) => {
  return (
    <div className="bank-item-container">
      <div className="bank-item-title">
        <h2>{item.name}</h2>
        <img src={item.bankLogo} alt={item.name}></img>
      </div>
      {selection === 'showAll' ? <CardItem item={item} /> : null}    
    </div>
  );
};

export default BankItem;
