let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

// objects are passed by reference
let addExpense = function(account, amount) {
    // if we access the objects properties by . notation
    // we modify the referenced object (i.e. myAccount) directly
    account.expenses = account.expenses + amount
    console.log(account) // { name: 'Andrew Mead', expenses: 2.5, income: 0 }
}

addExpense(myAccount, 2.50)
console.log(myAccount) // { name: 'Andrew Mead', expenses: 2.5, income: 0 }

// objects are passed by reference
let addExpense2 = function(account, amount) {
    // when an argument (i.e. account) referencing to an object (i.e. myAccount) is re-assigned 
    // to another object (i.e. empty object), the binding of the argument to the original object
    // (i.e. to myAccount object) is broken.
    account = {} 
    console.log(account) // {}
}

addExpense2(myAccount, 2.50)
console.log(myAccount) // { name: 'Andrew Mead', expenses: 2.5, income: 0 }

// Creating a new binding to the same myAccount in memory
let otherAccount = myAccount // changes made in myAccount is reflected to other account and vice versa
otherAccount.account = 1000
console.log(myAccount) // { name: 'Andrew Mead', expenses: 2.5, income: 0, account: 1000 }
