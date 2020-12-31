// 147. Write a JavaScript program to compute the sum of all digits that occur in a given string.  Go to the editor

var arr = "1234";

var n = parseInt(arr);

var res=0;

for(; n!= 0;){
  res = res + n%10;
  n = parseInt(n/10);
}

console.log(res)    