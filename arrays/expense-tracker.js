const account = {
    name: 'Andrew Mead',
    expenses: [],
    income: [],
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0
        let totalIncome = 0
        this.expenses.forEach(function(expense){
            totalExpenses += expense.amount
        })
        this.income.forEach(function(income) {
            totalIncome += income.amount
        })
        const balance = totalIncome - totalExpenses
        return `${this.name} has $${balance} in balance.$${totalIncome} in income. $${totalExpenses} in expenses`
    }
}

account.addExpense('Rent', 950)
account.addExpense('Coffee', 2)
account.addIncome('Job', 1000)
console.log(account.getAccountSummary())