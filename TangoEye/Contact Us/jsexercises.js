// 126. Write a JavaScript program to get the largest even number from an array of integers. Go to the editor

var arr = [1,2,3,4,5,6];

var test = []

var longest = 0;

for(i=0; i < arr.length; i++){
  if(arr[i] % 2 == 0){
     if(arr[i] > longest){
       longest = arr[i];
     }
  }
 }