//
// Task-1 Declare variable with let and const 
const firstName = 'Sanjida';
const secondName = 'Nasrin';
const lastName = 'Tanju';
let address = 'Chittagong';
address = 'Dhaka';
//console.log(firstName,secondName,  lastName, address);

//
//Task-2 Make templete string and set previous decleared variable in this string dinamicly and decleare an object and set set two property of this object in this templete string
const myInfo = {
    phone:'Nokia Phone',
    laptop:'PakerdBell laptop',
    keyboard:'havic keyboard'
};
const myData = `
My name is ${firstName} ${secondName} ${lastName}. I am a student. I used ${myInfo.phone}, ${myInfo.laptop} and ${myInfo.keyboard}.Now i am learning web development.
`;
//console.log(myData);

//
//Task-3.1 Declare a arrow function with parameter and return the value of parameter dividing by 5
const division = x => x / 5;
const A = division(50);
//console.log(A);

//
//Task-3.2  Declare a arrow function with two parameters and add two each parameter and then multify them
const multiplication = (a, b) => (a + 2) * (b + 2);
const M = multiplication(4, 5);
//console.log(M);

//
//Task-3.3  Declare a arrow function with three parameters and multify them
const mmultiplication = (a, b, c) => a * b * c;
const m = mmultiplication(4, 5, 15);
//console.log(m);

//
//Task-3.4 Declare a arrow function with two parameters and add two each parameter and then multify them
const arrow = (a, b) => {
    const sum1 = a + 2;
    const sum2 = b + 2;
    const Multify = sum1 * sum2;
    return Multify;
}
const multi = arrow(3, 8);
//console.log(multi);

//
//Task-4  [Homework] Search in google that what is the deifference between javascript function declearation and arrow function

//[Complete]


//
//Task-4.5  [Homework] Search in google that what is the deifference between javascript var, let, const

//[Complete]


//
//Task-5 Make an array of many numbers. Multify all the element of the array with 5 and put the result in an another array by using map. Do this task in one line
const array1 = [23, 43, 76, 80, 23, 20, 45, 58, 39, 24];
const calculation = array1.map(number => number * 5);
//console.log(calculation);

//
//Task-6[Challenging] Make an array of many numbers. Use filter to get all the odd number form the array
const array2 = [23, 43, 76, 80, 23, 20, 45, 58, 39, 24];
const filterOdd = array2.filter( A => A % 2 == 1);
//console.log(filterOdd);

//
//Task-7 Make an array of many numbers.Use find to get the object with the price 5000taka the array
const items = [
    {phone: 'symphony', price: 3000, model: 'abc34', color: 'black'},
    {watch: 'iphone', price: 5000, model: 'def564', color: 'gray'},
    {laptop: 'dell', price: 33000, model: 'ghi32', color: 'white'},
    {tv: 'walton', price: 15000, model: 'jkl4958', color: 'black'},
    {camera: 'samsung', price: 26000, model: 'mno8458', color: 'red'},
];
const findAmount = items.find(value => value.price == 5000);
//console.log(findAmount);

//
//Task-7.5 [Extra] Write a summary about the javascript array property map, forEach, filter, find

//map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. in order. map() does not execute the function for empty elements. map() does not change the original array.

//forEach
//JavaScript Array provides the forEach() method that allows you to run a function on every element. The forEach() method iterates over elements in an array and executes a predefined function once per element.

//difference between map() and foreach()
//The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

//filter
//The JavaScript filter array function is used to filter an array based on specified criteria. After filtering it returns an array with the values that pass the filter. The JavaScript filter function iterates over the existing values in an array and returns the values that pass.

//find
//The find() method returns the value of the array element that passes a test (provided by a function). ... If it finds an array element where the function returns a true value, find() returns the value of that array element (and does not check the remaining values) Otherwise it returns undefined.

//Difference between find and filter
//The find() method is used to find all the descendant elements of the selected element. ... The only difference is the filter() method search through all the elements while find() method search through all the child elements only.

//
//Task-8 Use destructuring to declare a javascript object property as a variable
const student = {
    name:'Mina', age: 10, id: 4, livesIn: 'Bangladesh', hobby: 'gardening'
}
const  {hobby} = student;
//console.log(hobby);

//
//Task-9 [Challenging] Take the element of third position of an array, destructuring it and put it in a variable named 'three'[incomplete]
const array5 = [ 1,2,3,4,4];
const [,, number3] = array5;
const third = number3
//console.log(third);

//
//Task-10 Write a function of three parameter.Add the three paramere and return it. The default value of third parameter is 7.
const addition = (first, second, third = 7) => first + second + third;
const addit = addition(7,3);
//console.log(addit);

//
//Task-11 Declare a nested object.From this object, show a property as an array
const products = {
    bottle: {
        height: 'tall', weight: 5, color: 'cyan', price: 30
    },
    furniture: {
        table: { leg: 4, head: 'no', height: 'tall', color: 'black' },
        chair: {leg: 6, design: 'good', color: 'yellow', height: 'small' }
    },
    name: 'mouse', color: 'green', price: 250, work: 'computer'
}
//console.log(products.furniture.chair.design);

//
//Task-12 Make optional chaining by using '?' in above object
console.log(products?.bottle?.color);