// array

const myArr = [1,2,3,4,5,6]
const myName = ["Raci","Doctor"]

//console.log(myArr[1]);

// Array Mehods

// myArr.push(7) //add kare
// myArr.pop()   //remove kare last koi parameters nay

// myArr.unshift(9) // add in First
// myArr.shift()    // reemove in first

// console.log(myArr.includes(10))  // check thw value // True or false
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // convert kare ke create kare in "String"

// console.log(typeof newArr);

// console.log(typeof myArr);

// slice, splice

// console.log("A ",myArr);

// const newarr2 = myArr.slice(1,3)
// console.log(newarr2);

// console.log("B ",myArr)

// const newarr3 = myArr.splice(1,3)
// console.log("C ",myArr)
// console.log(newarr3);

/*................concat = join,
                spread = destroy ,
                flat = sequnce,
                from/of = convert to array............*/

const group1 = ['jaimish','veer','raja'];
const group2 = ['riya','rochak','siya'];

const common=group1.concat(group2);
// console.log(common);

const group3 = [...group1,...group2];
// console.log(group3);

const group4 = [1,2,3,[4,3,2,1,[7,8],9,10,[1,2,3,4]]]
// console.log(group4.flat());

// console.log(Array.isArray("jaimish"));
// console.log(Array.from("jaimish"));
// console.log(Array.of("jaimish"));
