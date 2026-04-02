/**
   SCOPE

   let =  je scope ma use karu hoy aema j use thy 
        - according specifiying scope

   cons = fix lock

   var = access out of scope
         - usse both local and globle scope
 */


// nested function

function jaimish(){
    const age = 19 ;

    function dhruvi(){
        const weigt = 20;
        console.log(age);
    }
    // console.log(weigt);
    dhruvi()
}
jaimish()