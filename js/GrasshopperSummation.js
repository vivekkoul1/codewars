/*Write a program that finds the summation of every number from 1 to num. 
The number will always be a positive integer greater than 0.*/

function summation(num) {

    if(num > 0) return num + summation(num-1);
    else return 0;
  }

  console.log(summation(3));