// function () {}
function sum(number1 , number2){
    return number1 + number2;
}
// console.log(sum(100,1000))
// return use karva thi stop the next code 

function isLogeing(username){
    if (username === undefined){
        console.log("Please enter a valid name");
        return // jo valid hase to j console perint thase
    }
    return `${username} is loging successfully`
}
// console.log(isLogeing());
 
function calculateItems(num1,num2,...num3){
     return num3;
}
// console.log(calculateItems(2,100,600,4567890,567890));

const User ={
      name : "Jaimish",
      age : 16
}
function handleobjects(anyobjects){
   console.log(`A UserName is ${anyobjects.name} and his Age ${anyobjects.age}, so it's funcking hell.`);
   
}
handleobjects(User)
