/*object:-
1.object are real time entity which have some attribute and characterstics. it is also like a variable where we can store various type of datatypes
 2.in general variable can store one value ex: const car="mustang"
 3.But in object we can store more than one values
 ex:const car={brand:"tata",model:"punch",color:"black"}
 4.so we defined a object inside the curly braces.with pair of key and values separated by colon and need to add comma to add multiple keys*/

 //object Literal
 const person={
    fname:"sonali",
    lname:"behera",
    "fullname":"sonali behera",
    age:22,
    location:"bbsr",
    isloggedin:true,
    loginDay:["monady","tuesday"]
 };
 //console.log(person)
 //console.log(person.fname)
 //console.log(person["fullname"])
 //person.location="cuttack"
 //console.log(person)
 //console.log(Object.freeze(person))
 person.fname="priyanka"
 //console.log(person)
 person.email="sonali@gamail.com";
 console.log(person)
 person.greeting=function(){
    console.log("Hello World")
 }
 person.greetingTwo=function(){
    console.log('good evening,${person.fname}')
 }
 person.greeting()
person.greetingTwo()