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
        this.array = transactions.map(transact => {
            return { ...transact, transaction_date: new Date(transact.transaction_date) }
    });
        
    };
    addTransaction(newTransaction){//1
        this.array.push(newTransaction);
        
    };
    getAllTransaction(){//2
        return array;
    
    };
    getUniqueTransactionType(type){//3
       

    };

    
    calculateTotalAmount(){//4
        const sumAllAmount = array.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount,0);
        return sumAllAmount;
    };
    
    getTransactionByType(type){//6
        return array.filter(transaction => transaction.transaction_type === type);
    };
    getTransactionsByMerchant(merchantName){//8
        return array.filter(transaction => transaction.merchant_name === merchantName);
    };
        
    calculateAverageTransactionAmount(){//9
        const sumAverageAmount = array.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount,0);
        const lentghArray = array.length - 1;//- 1 так как в JS выделяется свободный индекс
        return sumAverageAmount / lenghtArray;
    };
    getTransactionsByAmountRange(minAmount, maxAmount) {//10
        return array.filter(array => array.transaction_amount >= minAmount && array.transaction_amount <= maxAmount);
    };
    calculateTotalDebitAmount(){//11
        const debitArray = array.filter(transaction => transaction.type ==="debit");
        const debitTotal = debitArray.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount,0);
        return debitTotal;
    };
    mostTransactionTypes(){//14
        const {creditTotal, debitTotal} = array.reduce((accum, transact) => {
            if (transact.type === 'debit') {
                accum.debitTotal += transact.transaction_amount;
            } else {
                accum.creditTotal += transact.transaction_amount;
            } return accum;
            ;},{debitTotal:0,
            creditTotal:0});
        if (debitTotal < creditTotal) {
            return "credit"
        }
        else if (debitTotal > creditTotal) {
            return "debit"
         }
        else{return "equal"}
            
    };
    getTransactionsBeforeDate(date){//16
        const transBefore = array.filter(dateTrans => dateTrans.transaction_date < date);
        return transBefore;
    };

    findTransactionById(id){//17
        return array.find(obj => obj.transaction_id === id)
    };

    mapTransactionDescriptions(){//18
        const transactionDescription = array.map(({transaction_description})=> transaction_description);

    };








    findMostDebitTransactionMonth(){
        const debitArray = array.filter(transaction => transaction.type ==="debit");
        debitArray.forEach(transaction => {
            const month = new Date(transaction.transaction_date).getMonth();
            transactionCount[month] = (transactionCount[month]) + 1;
        });
        };

    calculateTotalAmountByDate(year, month, day){//5
      
        const requesteDate = new Date(year,month,day)
        array.reduce()

    };
}   
