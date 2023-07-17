// console.log("hello jee kaise hoo");
// let lastName="babbar";


// let firstName=new String('love');

// let message="this is shashaank";
// let words = message.split(' ');
// console.log(words);


// let messages=`this is
//  shivam and ${lastName};
// he is good
//  boy`
//  console.log(messages);


// let date() = new Date(dat);
// console.log(date);

// let date = new Date();
// console.log(date);



// let numbers=[10,20,30];
// console.log(numbers);

// numbers.push(9);
// console.log(numbers);

// numbers.unshift(20);
// console.log(numbers);

// numbers.splice(2,0,'b','c');
// console.log(numbers);

// console.log(numbers.indexOf(9));
// console.log(numbers.indexOf(10));

// console.log(numbers.includes(1))

//objests wala array banaya hai.

// let courses=[
//     {no:1,naam:'love'},
//     {no:2,naam:"babbar"}

// ];
// console.log(courses);

// let course=courses.find(function(course){
//     return course.name="love";
    

// })

// console.log(course);


//using the arrow functions
// let courses=[
//     {no:1,naam:'love'},
//     {no:2,naam:"babbar"}

// ];
// console.log(courses);
// let course=courses.find(course => course.naam==="love");
// console.log(course);


//removing the elemtns from the array

// let numbers=[1,2,3,4,5,6];
// console.log(numbers);
// numbers.pop();//remove the element from the last.
// console.log(numbers);
// numbers.shift();//remove the element from the first.
// console.log(numbers);

// numbers.splice(2,1);
// console.log(numbers);//remove the element from the middle.



//empty the array
// let numbers=[10,20,30,40,50];
// let numbers2=numbers;
// console.log(numbers);
// numbers.length=0;
// console.log(numbers2);




//cobing the arraysss
// let first=[10,20,30,40];
// let second=[4,5,6];
// let combined=first.concat(second);
// let sliced=combined.slice(2,4);
// console.log(sliced);

// combined.slice(2,3);

// repeated values repeat hotyi hai isme

// let number1=[1,2,34,55];
// let number2=[8,9,0,7,55];
// let jodo=number1.concat(number2);
// console.log(jodo)

//concatenate using the spread operator;

// let first=[1,2,3];
// let second=[4,5,6];

// let combined=[...first,'a',false,...second];
// console.log(combined);
// 
// interate in the array
//  let arr=[10,20,30,40];
// for(let value of arr){
//     console.log(value);
// }

// console.log();

// //using the for each lopps to run the code
// arr.forEach(function(numbers){
// console.log(numbers);
// })


// joinig the arrays

// let numbers=[10,20,30,40];
// const joined=numbers.join(',');
// console.log(joined);


//sort the arrays
// .sort();




//filter the arrays
// let numbers=[1,2,-1,-2];
// let filterd=numbers.filter(function(value){//predicate function ko lagaye hai isme ham...
//     return value >=0;//callback function ko lagaye hai isme ham
// });
// console.log(filterd);


// //using the arrow functions 

// let filtered = numbers.filter(value => value>=0);

// console.log(filtered);


// let numbers =[7,8,9,10];

// let items = numbers.map(function(value){
//     return 'student_no'+ value;
// })
// console.log(items);

let numbers=[1,2,-6,-9];
let items=numbers.filter(value=>value >= 0).map(num  => {value:num});
console.log(items);          