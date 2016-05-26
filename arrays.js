/*
	practice on arrays
*/

/*
	for short console logging
*/
function $(message) { console.log(message); }

// temporary array
var temp = [
	'item1', 
	'item2',
	'item3',
	'item4'
];

/*
	array check
	* isArray is a boolean variable
*/

var isArray = ( Array.isArray( temp ) );
	isArray = ( temp instanceof Array );

/*
	short hand if
*/
(isArray) ? $('array') : $('not an array');

/*
array length => (how many items in the array)
*/
var length = temp.length;
$(length);

/*
converting arrays
*/

// to normal string with (,) between each item 
var string = temp.toString();
$(string);

// to local string (a simple form of string)
string = temp.toLocaleString();
$(string);

// array.join(string) replaces the , deafault to anything you want 
string = temp.join('/');
$(string);

/*
operations on arrays
*/

// array.push(item) => adds an item to the end of the array
temp.push('item5');
$(temp);

// array.unshift(item) adds an item to the very start of the array
temp.unshift('item0');
$(temp);

/* 
array.splice(start, count, items)
removes the elements form (start) by count times and them adds the items
index based
*/ 

// go to element number zero remove it and then add item00
temp.splice(0, 1, 'item00');
$(temp);

// remove elements(zero, one, two) and then add item00
temp.splice(0, 3, 'item01');
$(temp);

// go to element number 1 don't remove any thing and add item011 after it
temp.splice(1, 0, 'item011');
$(temp);

// array.pop(); => removes the last element in the array and returns it
var item = temp.pop();
$(item);

// array.shift() => removes the first element in the array and returns it
item = temp.shift();
$(item);
$(temp);

/* 

array.slice(start) => array.slice(start, end)
index based
get the items between the start and the end form left to right
and ignores the end item
it returns a copy of the sliced array

*/

var slicedTemp = temp.slice(0, 2);
$(slicedTemp);

/*

same with negative values
-3 it means count 3 from right to left
-1 it means count 1 from right to left

*/
slicedTemp = temp.slice(-3, -1);
$(slicedTemp);

// array.sort() => it sorts the array
temp.sort();
$(temp);

// array.concat(); => concats an array with another
var list = [
	'item 002', 
	'item 003',
	'item 004'
];

temp = temp.concat(list);
$(temp);

/* 
array.indexOf(item) looks for the item for left to right
if the item was found in the array returns its index
if not return -1
*/

var index = temp.indexOf('item 002');

if ( index !== -1 ) { // always check before doing something
	$('item 002 was found in index: ' + index);
}

/*

array.lastIndexOf(item) looks for the item for right to left
if the item was found in the array returns its index
if not return -1

*/

var index = temp.lastIndexOf('item 002');

if ( index !== -1 ) { // always check before doing something
	$('item 002 was found in index: ' + index);
}

/* done */