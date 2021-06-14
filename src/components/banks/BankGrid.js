import React from "react";
import BankItem from "./BankItem";
import Spinner from "../ui/Spinner";
import RankedCards from "./RankedCards";

//This component is the main grid that containds "cards" container which is configured in the App.css

const BankGrid = ({ items, isLoading, selection }) => {
  
  //While the data is being fetched it will show spinner gif.

    return isLoading ? (
    <Spinner />
  ) : selection === "showAll" ? (
    <section className="cards">
      {items.map((item) => (
        <>
          <BankItem
            item={item}
            items={items}
            selection={selection}
          ></BankItem>
        </>
      ))}
    </section>
  ) : (
    <section className="cards">
      <RankedCards RESPData={items} selection={selection} />
    </section>
  );
};

export default BankGrid;
