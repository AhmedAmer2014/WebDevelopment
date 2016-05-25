/*

&  bitwise and  (1 and 1 => 1)
|  bitwise or   (0 and 0 => 0)
^  bitwise xor  (0 and 0 => 0 , 1 and 1 => 1)
~  bitwise bot  revirse any 0 to 1 and any 1 to 0 (011 => 100)
<< leftshift    shifts to the left by n amount 
>> rightshift   shifts to the right by n amount (what gones to the right is gone)

*/

var x = 5; // 101
var y = 4; // 100

console.log('x & y =' + (x & y)); // 101 & 100 => 100

console.log('x | y =' + (x | y)); // 101 | 100 => 101

console.log('x ^ y =' + (x ^ y)); // 101 ^ 100 => 001 like (-) operator

console.log('~x' + (~x)); // ~100 => 011

x = 8; // 1001
y = 2;

/* 
	its like mulitplying by the square of y
	8 * 4 = 32 => 100100
*/
console.log('x << y' + (x << y)); // (1001 << 2) => 100100 => (32)

/*
	its like deviding by the square of y
	8 / 4 => 2 => 01
*/

console.log('x >> y' + (x >> y)); // (1001 >> 2) => 10 => (2) 