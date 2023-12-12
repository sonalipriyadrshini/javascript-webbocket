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

//const mybooks=books.filter((bg)=>bg.edition===1989)
//console.log(mybooks);
//const filterbook =books.filter((fb)=>{return fb.edition===1989 && fb.publisher>=1987})
//console.log(filterbook);

//map method
const mapArray=[2,6,8,9,4,5]
const newArray= mapArray.map((num)=>{
    return num+1;
})
console.log(mapArray)
console.log(newArray)

//chaining
const sArray=[2,4,6,7,4,6]
const chainingArray =mapArray.map((data)=>data+2)
                            .map((data)=>data*10)
                            .filter((data)=>data>40)
    console.log(chainingArray);
    //reduce method
    const arrayNum=[2,3,4,5,6]
    const reduceMethod=arrayNum.reduce(function(accumulator,currentvalue){
        console.log('accumulator ${accumulator} and ${currentvalue}')
        return accumulator+currentvalue
    },0)
    console.log(reduceMethod);
    //reduce method using arrow function
    const redMethod= arrayNum.reduce((acc,cval)=>acc+cval,3)
    console.log(redMethod)
    //set method
    //Q. how to create a set
    const myset= new set();
    console.log(myset)
    //add some value in the set
    myset.add(2);
    myset.add(7);
    myset.add(5)
    console.log(myset);

    //check the size of the set
    const sizeset=myset.size;
    console.log(sizeset);

    //check if the value is exist or not
    console.log(myset.has(10));

    //remove a values from the set
    const deletedItem=(myset.delete(2))
    console.log(deletedItem);
    console.log(myset);
    //iterate over the values from the set 
    for(let values of myset)
    console.log(values)