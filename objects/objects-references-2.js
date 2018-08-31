let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

// objects are passed by reference
let addExpense = function(account, expense) {
    // if we access the objects properties by . notation
    // we modify the referenced object (i.e. myAccount) directly
    account.expenses = account.expenses + expense
}

let addIncome = function(account, income) {
    account.income = account.income + income
}

let resetAccount = function(account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 50)
addExpense(myAccount, 50)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
