// // // var a = 5;
// // // var a = 'shashank'; 
// // // var a=true//redeclaration in var 
// // // console.log(a);  //var ko kitne baar bhi krlo


// // // const u=12;
// // // console.log(u);

// // // let lastName='shashank';
// // // console.log(lastName);
// // // lastName=5;
// // // console.log(lastName);

// // //arithmatic operator.
// // let num=4;
// // let num1=2;
// // console.log(num+num1);
// // console.log(num-num1);
// // console.log(num*num1);
// // console.log(num/num1)

// // //comparison operator
// // console.log(2>4);
// // console.log(6>8);
// // console.log(3>=3);

// // let number = 2;
// // let str = '2';
// // console.log(number == str);
// // console.log(number === str);// strict equality



// // let x=6
// // console.log(++x);// preincrement


// // let y=6;
// // console.log(y++);//post increment 
// // console.log(y);
// // //ternarry operator
// // // let age =19;
// // // let status=(age>=18)?'can vote':'cant vote';
// // // console.log(status);


// // // let age =17;
// // // let stage=(age>=20)?'can drive':'cant drive';
// // // console.log(stage);


// // let a1=true;
// // let a2=false;
// // let a3=false;
// // let a4=(a1&&a2&&a3);//using the and operator
// // console.log(a4)

// // let a5=(a1||a2||a3||a4);//using the or operator 
// // console.log(a5);



// // //if else statement
// // let marks=98;
// // if(marks>=90){
// // console.log('A grade');
// // }
// // else if(marks>=80){
// // console.log('B grade');

// // }
// // else if(marks>=70){
// // console.log('C grade');
// // }
// // else{
// // console.log('E grade');
// // }


// // console.log();

// // //switch case ;
// // let numberr = 2;
// // switch(numberr){
// // case 1:console.log('A');
// // break;
// // case 2:console.log('B')
// // break
// // case 3:console.log('C')
// // break;
// // default:console.log('D');
// // }


// // //for loops -->>> use kro--
// // for(let i=0;i<5;i++){
// // console.log("shashank is a software developer")
// // }


// // //for loops conditions;
// // for(let i=0;i<5;i++){
// // console.log("i am okey");
// // }



// // //while loops usings;

// // // let j=1;
// // // while(j<7){
// // //   console.log(j);
// // //   j++;
// // // }

// // let k=0;
// // while(k<8){
// // console.log(k);
// // k++;
// // }

// // //while loops
// // let l=0;
// // while(l<=10){
// //     console.log(l);
// //     l++;
// // }


// //do while loops;
// // let i=0;
// // do{
// //     console.log("i am okey");
// //     i++;
// // }while(i<5);

// //do while loops;



// //objects creation;
// let rectange={
//     length:5,
//     breadth:10,
//      draw:function(){
//         console.log("i am okey");

//      }

// }
// console.log(rectange.length);
// console.log(rectange.breadth);
// console.log(rectange.draw());

// //function to create the object;
// // factory function-->>>>>>camplecase is used
// function createRectangle(length,breadth){
//     return rectangle={
//         length,
//         breadth,

//         draw:function(){
//             console.log("draw the function")
//         }   
//     }
// }
// let rectangleobj1=createRectangle(5,6);
// console.log(rectangleobj1)

//constructor function
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("draw the function")
// }
// }
// let reactangleObjec1=new Rectangle(9,11);
// console.log(reactangleObjec1)

//refernce 

// let c={value:10};
// let d=c;
// c.value++
// console.log(c)
// console.log(d)

// primitive hai
// let a = 10;
// let b = a ;
// a++ 
// console.log(a);
// console.log(b);



// let d={value:9};
// let e=d;
// d.value++
// console.log(d)
// console.log(e)//dono ki badhi cozz isme adree jata hai 


//FOR IN LOOPS-->>.(OBJECTS)
//  let rect={
//     length:2,
//     breadth:4,
//  };
//  for(let key in rect){
//     console.log(rect[key])
//  }
//  for ( let key of Object.keys(rect)){  // .entries for value
//     console.log(key)
// }


// if ('color' in rect){
//     console.log("yes")
// }
// else {
//     console.log("No")
// }

// if ('length' in rect){
//     console.log("yes")
// }
// else {
//     console.log("No")
// }

//object cloning -->>

// let src={
//     a:10,
//     b:20,
//     c:30,

// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key]
// }
// console.log(dest);
// src.a++
// console.log(src);
// console.log(dest);
// let source = {
//     a : 10,
//     b : 20,
//     c : 30,
// };

// let source2 = {
//     d : 40 
// }

// let destination = object.assign({}, source , source2);
// console.log(destination);
// source.a++;
// console.log(destination);

//spread cloning={

// let scr1={
//     a:10,
//     b:20,
// };
// let dest1 = {...src1};
// console.log(dest1);
// src1.a++;
// console.log(dest1)
// let src2 = {
//     a : 10,
//     b : 20 ,
//     c : 30 ,
// } ;
//assign cloning 
// let dest2 = {...src2};
// console.log(dest2);
// src2.a++;
// console.log(dest2)
// let source = {
//     a : 10,
//     b : 20,
//     c : 30,
// };

// let source2 = {
//     d : 40 
// }

// let destination = object.assign({}, source , source2);
// console.log(destination);
// source.a++ ;
// console.log(destination);


//spead cloning-->> jo value hai vahi hai...
let src2={
    a:10,
    b:20,
    c:30,
};
let dest2={...src2};
console.log(dest2);
src2.a++;
console.log(dest2)