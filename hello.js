//function declaration
// function run(){
//     console.log('running');
// }
// run()

// // Named function assignment
// let stand=function walk(){
//     console.log('walking');//isme function declaration nieche hi hoga upar nahi ja skta hai.
// };
// stand();

// let jump=stand;
// jump();

// //anonymous function assigment
// let stand2=function(){
//     console.log('walking');
// };
// stand2();


// function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     return total;
// }
// let ans =sum(1,2,3,4,5);
// console.log(ans);



// function mul(a,b){
//     return a-b;
// }
// console.log(mul(1,2));

// function sum(...args){
//     console.log(args);
// }
// sum(1,2,3,4,5);

//rest parameter

// function sum(num,value,num2,...args){
//     console.log(args);
// }
// sum(1,2,3,4,5);

//defualt parameter--->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// function interst(p,r=5,y=20){
//     return p*r*y/100;
// }

// console.log(interst(1000))



// function ko call kro


// let person={
//     fName:"love",
//     lName:"babbar"
// };
// console.log(person);

// function fullName(){
//     return `${person.fName}     ${person.lName}`;

// }
// console.log(fullName());
  let person={
    fName:'love',
    lName:'babbar',
    get fullName(){
        return `${person.fName} ${person.lName}`;
    },
    set fullName(value){
        let parts =value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
  };

//   console.log(person);

person.fullName='shashank mishra'
console.log(person.fullName());