//What is function ?
//Function is a piece of code. if we want to use it in the same file or another file we dont need to write again and again. It gives the reusability feature so it decreases redundancy and space.

// Function definition : where we define the function by using function keyword.
// Function  body starts and ends with {}(curly braces) .
// Without function call we cannot execute the function. so for executing the function we must call the function.

function sayMyName() {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("E");
    console.log("A");
    console.log("Y");
}

sayMyName();
// sayMyName();
// sayMyName();
// sayMyName();

function addTwoNos(){   //function definition
    let a =10;
    let b=20;
    console.log(a+b);
}
addTwoNos();    //function call

//Difference between parameter and argument 

function addNos (num1,num2) {   //function parameter
    console.log("Sum of two no is : " , num1+num2);
}
addNos(10,20);      //function argument

// function addingNos (num1,num2) {     //this code will give an error 
//     sum = num1 + num2;
//     console.log(sum);
// }
// const sum = addingNos(10,20);
// console.log(sum); 

function addingNos (num1,num2) {
    return num1 + num2;
    console.log("Hello");
 }
 const sum = addingNos(10,20);
 console.log(sum); 

function user (username){
    if(username === undefined){
        console.log(`${username}, please enter a valid username`);
        return
    }
    console.log(`${username}:, Hello guys good evening`);
}
user();

function addInYourCart (...rest_values) { //spread operator //rest operator
    // console.log(value);
    // console.log(value2);
    console.log(rest_values);
}
addInYourCart(100,200,300,400);

const user1 = {
    username : "Web_bocket",
    location : "kolathia",
    userMessage : function (){
        console.log(`Hello Everyone. from ${user1.username}`)
    },
    city : "Bhubaneswar" 
}

console.log(user1);
console.log(user1.userMessage());