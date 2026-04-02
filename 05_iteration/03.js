// for of 

let num = [ 1,2,3,4,5,6]
for (const n of num) {
   // console.log(n);
}

let string = "Jaimish kachariya";
for (const str of string) {
    //console.log(`each char is ${str}`);
}


//for each 

let lan = ['Hindi','Gujrati','Malyali','Tamil','russian'];
//collback function use so not need a function name
lan.forEach(function(item) {
   // console.log(` ${item}  Language`);
    
})
//also
lan.forEach((item) => {
   console.log(` ${item}  Language`);
})


const coding = [
    {
        languageName : 'Java',
        languageAccess : '.java'
    },
    {
        languageName : 'Python',
        languageAccess : '.py'
    },
    {
        languageName : 'JavaScript',
        languageAccess : '.js'
    },
    {
        languageName : 'CSS',
        languageAccess : '.css'
    }
]
coding.forEach( (item) => {

    console.log(`Language Name ${item.languageName} `);
    
})