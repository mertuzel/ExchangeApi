class Currency{
    constructor(firstCurrency,secondCurrency,amount){
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount=amount;
        this.url = "https://api.exchangeratesapi.io/latest?base=";
    }
    
    exchange(){
            return new Promise ((resolve,reject)=>{

           
            fetch(this.url + this.firstCurrency)
            .then(response=>response.json())
            .then(data=>{
                const curr = data.rates[this.secondCurrency];
                const total = curr * (Number(this.amount));
                resolve(total);
               
                
              
           
        })
        .catch(err=>reject(err));
    })
    }

    changeAmount(newamount){
        this.amount = newamount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency=newSecondCurrency;
    }
}