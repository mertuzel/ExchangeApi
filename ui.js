class UI{
    constructor(firstCurrency,secondCurrency,amount,outputFirst,outputSecond){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = amount;
        this.outputFirst = outputFirst;
        this.outputSecond = outputSecond;
        this.outputResult=document.getElementById("outputResult");
        
        
    }

    changeFirstCurrency(){
       this.outputFirst.textContent = firstCurrency.options[firstCurrency.selectedIndex].textContent;
    }
    changeSecondCurrency(){
       this.outputSecond.textContent = secondCurrency.options[secondCurrency.selectedIndex].textContent;
    }
    changeResult(total){
        this.outputResult.value=total;
    }
    
}