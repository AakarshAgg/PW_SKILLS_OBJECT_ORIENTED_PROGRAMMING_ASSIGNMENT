class BankAccount{
    constructor(name,balance){
       this.name=name;
       this._balance=balance
    }

    _isAmountValid=function(check){
        return typeof check === "number" && check >0
     }

    deposit(amount){
        if(this._isAmountValid(amount)){
            this._balance+=amount
            console.log(`Deposited Rs${amount}. New balance :${this._balance}`)
        }else{
            console.log(`Invalid deposit amount. Please enter a positive amount`)
        }
    }

    withdraw(amount){
        if(this._balance <amount){
            console.log(`Insufficient Fund for withdrawal`)
       }else if(this._isAmountValid(amount ) && this._balance>0){
        this._balance-=amount
        console.log(`Withdraw Rs.${amount}, New Balance: Rs${this._balance} `)
       }else{
        console.log("Invalid withdrawal amount. Please enter a postive amount")
       }
    }
    checkBalance(){
         console.log(`Account balance for ${this.name}:Rs${this._balance}`)
    }
   
}


const myAccount= new BankAccount("Mithun S",1000)

myAccount.deposit(500)
myAccount.deposit(-50)

myAccount.withdraw(200)
myAccount.withdraw(1500)
myAccount.withdraw(-500)

myAccount.checkBalance()