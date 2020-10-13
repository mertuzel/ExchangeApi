const amount = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency");
const secondCurrency = document.getElementById("secondCurrency");
const outputFirst = document.getElementById("outputFirst");
const outputSecond = document.getElementById("outputSecond");

const ui = new UI(firstCurrency,secondCurrency,amount,outputFirst,outputSecond);
const currency = new Currency("USD","TRY",amount.value);

EventListeners();

function EventListeners(){
    amount.addEventListener("input",exchange);
}
firstCurrency.onchange  = function () {
    currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent);
    ui.changeFirstCurrency();
    
    exchange();
}
secondCurrency.onchange = function () {
    currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent);
    ui.changeSecondCurrency();
    exchange();
}



function exchange(){
    currency.changeAmount(amount.value);
    currency.exchange()
    .then(total=>{
        ui.changeResult(total);
    })
    
   
}

