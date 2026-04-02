// Objects = { }
// work with key-value
const name2 = Symbol('raja')
const Username = {
    name : 'jaimish',
    [name2] : 'rajaaa',
    age : 19,
    email : "jaimish@microsoft.com",
    islogging : true,
    location : 'Surat',
    study : 'SY'
}

console.log(Username);  // access 
console.log(Username.location);  // single element acees
console.log(typeof('name2')); //symbol convert

Username.name = "Kachariya"
console.log(Username); // change ement:name 
Object.freeze(Username)  // frezz value
Username.name = "kalsariya"
console.log(Username);






