

export function rankByInterestRate(data) {
    //Taking the whole response object and flatten it so that we can the list of card object in single array. 
    const creditCardsArray = data.map((bank) => bank.creditCards.flat()).flat();
    //Sorth the card by interset rate
    creditCardsArray.sort((a, b) => a.purchaseInterest ? a.purchaseInterest - b.purchaseInterest : a.purchaseInterestRange[0] - b.purchaseInterest);
    
    return creditCardsArray;
}

export function rankByAnnualFee(data) {
    const creditCardsArray = data.map((bank) => bank.creditCards.flat()).flat();
    //Sort the cards by annual fee
    creditCardsArray.sort((a, b) => a.annualFee - b.annualFee);
    return creditCardsArray;
}
