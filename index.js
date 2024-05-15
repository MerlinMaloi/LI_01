class TransactionAnalyzer {
    /**
     * Создает экземпляр TransactionAnalyzer.
     * @param {Array} transactions - Массив транзакций.
     */
    constructor(transactions) {
        /**
         * Массив транзакций.
         * @type {Array}
         */
        this.array = transactions.map(transact => ({
            ...transact,
            transaction_date: new Date(transact.transaction_date)
        }));
    };

    /**
     * Добавляет новую транзакцию в массив.
     * @param {Object} newTransaction - Новая транзакция для добавления.
     */
    addTransaction(newTransaction) {
        this.array.push(newTransaction);
    };

    /**
     * Возвращает все транзакции.
     * @returns {Array} - Массив транзакций.
     */
    getAllTransaction() {
        return this.array;
    };

    /**
     * Возвращает уникальные типы транзакций.
     * @returns {Array} - Массив уникальных типов транзакций.
     */
    getUniqueTransactionType() {
        const uniqueTypes = new Set();
        for (const item of this.array) {
            uniqueTypes.add(item.transaction_type);
        }
        return Array.from(uniqueTypes);
    };

    /**
     * Вычисляет общую сумму всех транзакций.
     * @returns {number} - Общая сумма транзакций.
     */
    calculateTotalAmount() {
        return this.array.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
    };

    /**
     * Возвращает транзакции по указанному типу.
     * @param {string} type - Тип транзакции.
     * @returns {Array} - Массив транзакций указанного типа.
     */
    getTransactionsByType(type) {
        return this.array.filter(transaction => transaction.transaction_type === type);
    };
    /**
     * Вычисляет среднюю сумму транзакций.
     * @returns {number} - Средняя сумма транзакций.
     */
    calculateAverageTransactionAmount() {
        const sumAmount = this.array.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
        return sumAmount / this.array.length;
    };

    /**
     * Возвращает транзакции в заданном диапазоне суммы.
     * @param {number} minAmount - Минимальная сумма транзакции.
     * @param {number} maxAmount - Максимальная сумма транзакции.
     * @returns {Array} - Массив транзакций в заданном диапазоне суммы.
     */
    getTransactionsByAmountRange(minAmount, maxAmount) {
        return this.array.filter(transaction => transaction.transaction_amount >= minAmount && transaction.transaction_amount <= maxAmount);
    };

    /**
     * Вычисляет общую сумму дебетовых транзакций.
     * @returns {number} - Общая сумма дебетовых транзакций.
     */
    calculateTotalDebitAmount() {
        return this.array.filter(transaction => transaction.transaction_type === "debit")
            .reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
    };

    /**
     * Определяет тип наиболее частых транзакций (кредит или дебет).
     * @returns {string} - Тип наиболее частых транзакций: "credit", "debit" или "equal".
     */
    mostTransactionTypes() {
        const { creditTotal, debitTotal } = this.array.reduce((accum, transact) => {
            if (transact.transaction_type === 'debit') {
                accum.debitTotal += transact.transaction_amount;
            } else {
                accum.creditTotal += transact.transaction_amount;
            }
            return accum;
        }, { debitTotal: 0, creditTotal: 0 });
        if (debitTotal < creditTotal) {
            return "credit";
        } else if (debitTotal > creditTotal) {
            return "debit";
        } else {
            return "equal";
        }
    };


    /**
     * Возвращает транзакции, совершенные до указанной даты.
     * @param {Date} date - Дата, до которой нужно вернуть транзакции.
     * @returns {Array} - Массив транзакций, совершенных до указанной даты.
     */
    getTransactionsBeforeDate(date) {
        return this.array.filter(dateTrans => dateTrans.transaction_date < date);
    };

    /**
     * Находит транзакцию по её идентификатору.
     * @param {string} id - Идентификатор транзакции для поиска.
     * @returns {Object|null} - Найденная транзакция или null, если транзакция не найдена.
     */
    findTransactionById(id) {
        return this.array.find(obj => obj.transaction_id === id);
    };

    /**
     * Возвращает массив описаний транзакций.
     * @returns {Array} - Массив описаний транзакций.
     */
    mapTransactionDescriptions() {
        return this.array.map(({ transaction_description }) => transaction_description);
    };

    /**
     * Вычисляет общую сумму транзакций до указанной даты.
     * @param {number} year - Год.
     * @param {number} month - Месяц (от 0 до 11).
     * @param {number} day - День месяца (от 1 до 31).
     * @returns {number} - Общая сумма транзакций до указанной даты.
     */
    calculateTotalAmountByDate(year, month, day) {
        const requestDate = new Date(year, month, day);
        const transactionsBeforeDate = this.array.filter(transaction => transaction.transaction_date < requestDate);
        return transactionsBeforeDate.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
    };


    /**
     * Возвращает массив уникальных типов транзакций.
     * @returns {Array} - Массив уникальных типов транзакций.
     */
    getUniqueTransactionType() {
        const uniqueTypes = new Set();
        for (const item of this.array) {
            uniqueTypes.add(item.transaction_type);
        }
        return Array.from(uniqueTypes);
    };

    /**
     * Возвращает массив транзакций определенного типа.
     * @param {string} type - Тип транзакции.
     * @returns {Array} - Массив транзакций указанного типа.
     */
    getTransactionsByType(type) {
        return this.array.filter(transaction => transaction.transaction_type === type);
    };

    /**
     * Возвращает массив транзакций для указанного магазина (торговца).
     * @param {string} merchantName - Название магазина (торговца).
     * @returns {Array} - Массив транзакций для указанного магазина.
     */
    getTransactionsByMerchant(merchantName) {
        return this.array.filter(transaction => transaction.merchant_name === merchantName);
    };

    /**
     * Вычисляет общую сумму транзакций до указанной даты.
     * @param {number} year - Год.
     * @param {number} month - Месяц (от 0 до 11).
     * @param {number} day - День месяца (от 1 до 31).
     * @returns {number} - Общая сумма транзакций до указанной даты.
     */
    calculateTotalAmountByDate(year, month, day) {
        const requestDate = new Date(year, month, day);
        const transactionsBeforeDate = this.array.filter(transaction => transaction.transaction_date < requestDate);
        return transactionsBeforeDate.reduce((accumulator, currentValue) => accumulator + currentValue.transaction_amount, 0);
    };
}
