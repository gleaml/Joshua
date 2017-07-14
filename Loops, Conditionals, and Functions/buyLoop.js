//We want to spend $1000
/*Keep track of the balance
While balance is more than 0, continue prompting "what are you going to buy"

"Example of a While Loop"
while (Condition - something is true){
    do something here
}
*/
var prompt = require('prompt-sync')();
var balance = 1000;
while (balance>0){
    var item = prompt("What do you want to buy?");
    var cost = prompt("What is the item's cost?");
    while (cost > balance){
        item = prompt("That costs too much. Your balance is " + balance + ".  Choose a cheaper item.");
        cost = prompt("What is the item's cost?");
    }
    balance = balance - cost;
    if (balance>0){
        console.log("Your balance is " + balance);
    }else{
        console.log("You have spent all your money!")
    }
    
    
}