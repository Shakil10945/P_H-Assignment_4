function calculateMoney(ticketSale) {
    if (ticketSale>=0){
        remainingMoney= (ticketSale *120) - (500 + (8*50));
        return remainingMoney;
    }
    else{
        return 'Invalid Number';
    }
}

console.log(calculateMoney(93));