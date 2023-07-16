// console.log("hello shashank")
// //object literal
// let rectangle = {
//     length: 1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

//factory function is used here. for oops.
// function createRectangle(len,bre){
//     return rectangle = {
//         length: len,
//         breadth:bre,
    
//         draw: function(){
//             console.log('drawing rectangle');
// }
//     };
// }

// let obj=createRectangle(5,8)//function call
// console.log(obj);


//constructor fuction->>Pascal notation follows.
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }
// let rectangleObject = new Rectangle(4,6);//new space provide to the object
// rectangleObject.colour='yellow';//adding a new property to the object
// console.log(rectangleObject);
// delete rectangleObject.colour;
// console.log(rectangleObject);//delete the property in the object


// let a={value:10};
// let b=a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


// let a={value:10};

// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);//iske andar adress or refernced value jati hai.


//usnig the for-in loops--->>>1.
// let rectangle={
//     length:2,
//     breadth:4
// };
// for(let key in rectangle){
//     console.log(key,rectangle[key]);//here we used the bracket notations
// }

//2nd example
// let triangle={
//     length:5,
//     breadtgh:9

// };
// for(let key in triangle){
//     console.log(key,triangle[key]);
// }


//checking the property is exsisits or not..
// let triangle={
//     length:5,
//     breadtgh:9
// };
// if('length'in triangle){
//     console.log('present');
// }
// else{
//     console.log('Absent')
// }

//object cloning 
//1.

// let src={
//     a:10,
//     b:20,
//     c:30
// };
//  let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(dest);

//object clone 2nd method

// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest = Object.assign({},src);
// console.log(dest);
// src.a++;
// console.log(dest);


//object clone 3rd method

let src={
        a:10,
        b:20,
        c:30
    };
    let dest={...src};
    console.log(dest);
    src.a++;
    console.log(dest);


