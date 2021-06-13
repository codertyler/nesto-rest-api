import React from "react";
import CardItem from "./CardItem";
import "./BankItem.css";

const BankItem = ({ item }) => {
  return (
    <div className="bank-item-container">
      <div className="bank-item-title">
        <h2>{item.name}</h2>
        <img src={item.bankLogo}></img>
      </div>
      <CardItem item={item}></CardItem>
    </div>
  );
};

export default BankItem;
