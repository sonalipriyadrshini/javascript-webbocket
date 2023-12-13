if(true){
    let a = 10;
     const b = 20;
     var c = 30;
     console.log(a);
     console.log(b);
     }
      c=300;
     console.log(c);
    // function parentFunction(username){

       /* function childFunction(location,num1,num2){
         console.log(`currently I'm at office location is ${location}.`);
         return num1+num2;
          }
          console.log(`Hello Everybody ${username}`);
          sum = childFunction("Kolathia",10,20);
           console.log(sum);
         }
         parentFunction("Ajay");*/
// Arrow function (fat arrow function)
 
const sumTwoNos = (num1,num2) => {
 //body
return num1+num2;
console.log("hello");
 }
const sum =sumTwoNos(4,8);
console.log(sum);

const message = (msg ="good evening") => {
     console.log(msg)
     }
     message("string" );
     const summation = (number1=10,number2=20) =>
 {
     return number1 + number2;
 }

const result = summation();
console.log(result);

const addition = (num1,num2) => num1 + num2;
console.log(addition(4,6));

const obj1 = {
         name : "abc",
          id : 101,
         location : "bbsr",
         functionName : function(){
             console.log(`hello username is ${this.name}`);
             console.log(this);
         }
     };
     console.log(`hello ${this.name}`);
     obj1.functionName();
    
     console.log(this);

     oneCount(5);
function oneCount (count){
    console.log(count+1);
}

//in arrow function never call afunction before function defintion. Otherwise it will behave like hoisting.
  twoCount(10);    
 const twoCount = (count) =>{
 console.log(count + 2)
 }


// let a;
// console.log(a);
// a =10;

//IIFE(Immediate involved function execution)

//(function fetchingData () {
   // console.log("Data fetched from database");
//})();       //if we are defining more than one iife function then we need to properly closed the first function by using semi colon ";".

//((name) => {
  //  console.log(`database fetched from this table ${name}`)
//})("Student_information")

