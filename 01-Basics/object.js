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

//object constructor
const user={};
user.userid=5635;
user.username="smruti";
user.userstatus="active";
user.isloggedin=true;
console.log(user)
console.log(Object.entries(user))
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(person.hasOwnProperty("isLoggedin"))
console.log(person.hasOwnProperty("gender"))

//nested objects
const userName={
    userDetails:{
        usserFullName:{
            lname:"malik"
            ,fname:"smruti"
        }
    }
}
console.log(userName)
console.log(userName.userDetails.usserFullName.fname)

//assign method(it joins the two object)
const obj1={a:1,b:2}
const obj2={c:3,d:5}
const obj3={e:6,f:7}
const obj4={obj1,obj2,obj3}
//console.log(obj4)
const spread={...obj1,...obj2,...obj3}
//console.log(spread)
const obj=Object.assign({},obj1,obj2,obj3)
console.log(obj)

//Objects in array
const arrayObj=[
    {
        id:101,
        location:"bbsr"
    },
    {
        id:102,
        location:"cuttack"
    },
    {
        id:103,
        location:"puri"
    },
    {
        id:104,
        location:"paradeep"
    }
]
console.log(arrayObj);
console.log(arrayObj[2])

//object de-structuring
const courseDetails={
    courseName:"javascript",
    courseFee:"4000",
    proviedBy:"web_bocket"
};
//console.log(courseDetails);
const {proviedBy:pd}=courseDetails;
console.log(pd)
//pb="Bocket_lamp";
//we can only print the values by destructring technique but can't change the values of key by de structring technque
//console.log(pb)