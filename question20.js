
// Question 1: Closure-Based Counter


function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },

    decrement: function () {
      count--;
      console.log("Current count:", count);
    }
  };
}

// Example Usage:
const counter = createCounter();
counter.increment();   
counter.increment();   
counter.decrement();   



// Question 2: Simulating Private Variables with Closures

function createBankAccount() {
  let balance = 0; // private variable
  let transactionHistory = []; // bonus feature

  return {
    deposit: function (amount) {
      balance += amount;
      transactionHistory.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },

    withdraw: function (amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
        transactionHistory.push("Failed withdrawal");
      } else {
        balance -= amount;
        transactionHistory.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      }
    },

    checkBalance: function () {
      console.log(`Current balance: ${balance}`);
    },

    getTransactionHistory: function () {
      console.log("Transactions:", transactionHistory);
    }
  };
}


const account = createBankAccount();
account.deposit(500);     
account.withdraw(200);    
account.withdraw(400);    
account.checkBalance();   
account.getTransactionHistory();
