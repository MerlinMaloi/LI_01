const transactions  = require('./transactions.json')
const newTransaction={
    "transaction_id": "121",
    "transaction_date": "2020-04-28",
    "transaction_amount": 1000.00,
    "transaction_type": "credit",
    "transaction_description": "Studenty for food",
    "merchant_name":"USM",
    "card_type": "Victoria"
}

class TransactionAnalyzer {
    constructor (transactions){
        this.array = transactions
    };
    addTransaction(newTransaction){
        this.array.push(newTransaction);
        
    };
    getAllTransaction(array){
        return(array);
    
    };
    getUniqueTransactionType(array){
        for (const item of array)
    };
    calculateTotalAmount(this.array){
        const sumAllAmount = this.array."transaction_amount".reduce((accumulator, currentValue) => accumulator + currentValue,0);
        return sumAllAmount;
    };
    calculateTotalAmountByDate(year, month, day, array){
        //Массив с классом Date вместо Sting-значения "transaction_date" 
        const dateArray1 = array.map(transact => {
            return { ...transact, "transaction_date": new Date(transact.transaction_date) }
    });
        const requesteDate = new Date(year,month,day)
        //Массив заданной даты
        const dateArray2 = dateArray1.filter( )

    }
}   