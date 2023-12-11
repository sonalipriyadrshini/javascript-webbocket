//for in 
//it returns index of the array
const array1=[1,2,3,4]
for(let keys in array1)
console.log(keys);

//for of
//it return the element of array
for(let values of array1)
console.log(values);
//for each
const language=['c','c++','java','.net']
const values=language.forEach((item)=>{
    //return item;
    console.log(item);
})
//console.log(values);
//filter method
const numberArray=[2,4,0,9,8,6,5,9,3]
//const updatedArray= numberArray.filter((data)=>{
  //  return data>4
//})
//console.log(updatedArray);

const updatedArray=[]
 numberArray.forEach((data)=>{
    if (data>4){
        updatedArray.push(data);
    }
})
console.log(updatedArray)