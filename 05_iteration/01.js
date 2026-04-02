// For loop, break , continue

for (let i = 0; i <= 10; i++){
    const element = i;
    //console.log(element);
}




// multiple for loop

for (let i = 0; i <= 10 ; i++) {
    //console.log(`Outer Loop ${i}`);
    
    for (let j = 0; j <= 10 ; j++) {
        //console.log(`Inner loop ${j} and Outer Loop ${i}`);

        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}


// break and continue

for (let index = 1; index <= 20 ; index++) {
    if(index == 8){
        console.log("8 is detacted");
        //continue; // on continue block of code
        break; // break the code
    }
    console.log(`Index is ${index}`);
}