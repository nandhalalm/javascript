let a = prompt('Please input the the first side (a)');
let b = prompt('Please input the the second side (b)');
let c = prompt('Please input the the third side (c)');

 if ((a > 0 && b >0 && c >0 ) && (a == b && b == c && c == a)){
  console.log("equilateral triangle")
}
else if ((a > 0 && b >0 && c >0 ) && (a == b || b == c || c == a)){
  console.log("isosceles triangle")
}
else {
  console.log("scalene triangle")
}