// 85. Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, 
// and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.  Go to the editor

var input = [1,2,3,4,5,6,7,8,9];
var a1 = [];
var a2 = [];
var final = [];
for(i=0; i < input.length; i++){
  if(i % 2 == 0){
    a1.push(input[i]);
  } else {
    a2.push(input[i]);
  }
}

console.log(a1);
console.log(a2);

var p1 = 0;
var p2 = 0;

for(i=0; i < a1.length; i++){
  p1 = p1 + a1[i];
}
for(i=0; i < a2.length; i++){
  p2 = p2 + a2[i];
}

final.push(p1);
final.push(p2);
console.log(final);

