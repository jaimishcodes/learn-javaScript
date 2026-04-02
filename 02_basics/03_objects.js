// field element empty objects
const Users = {}
Users.id = "123xyz";
Users.name = "Jaimish";
Users.isLogged = true;

// console.log(Object.keys(Users)) // only show a key
// console.log(Object.values(Users)) // only have value
//console.log(Users);


// multiple objects
const regularUser = {
    email :"Jaimish@gmail.com",
    fullname : {
        userfullname :{
            Firstname : "Jaimish",
            LastName : "Kachariya",
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.Firstname); // access elemt



// assign and spered

const obj1 = { 1:"a",2:"b"}
const obj2 = { 3:"a",4:"b"}

//const obj3 = {obj1,obj2}
const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

const obj4 = {...obj1,...obj2}
// console.log(obj4);


// List in array

const user = [
    {
        id : "123",
        name : "lalo",
    },
    {

    },
    {

    }
]

// console.log(user);


const aiCourse = {
    month : "January",
    duration : " 5 hours",
    price : 2999,
    proffesor : "Mr.Jaimish"
}

console.log(aiCourse.proffesor);  // regualer for access value/key

const {proffesor} = aiCourse   // direct accesss value/key
console.log(proffesor);
