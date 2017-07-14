/*Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output an array, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills.

  giveChange(365) // =>  [0,1,1,0,1,3]  */

function giveChange(amount){
  var change=[0,0,0,0,0,0];
  while (amount > 0){
    if (amount > 100){
    amount= amount - 100;
    change[5]= change[5]+ 1;
  }else if (amount > 50){
    amount= amount - 50;
    change[4]= change[4]+ 1;
  }else if (amount > 20){
    amount= amount - 20;
    change[3]= change[3]+ 1;
  }else if (amount > 10){
    amount= amount - 10;
    change[2]= change[2]+ 1;
  }else if (amount > 5){
    amount= amount - 5;
    change[1]= change[1]+ 1;
  }else  
    amount= amount - 1;
    change[0]= change[0]+ 1;
  };
  
};