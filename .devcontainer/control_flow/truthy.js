const userEmail = []
 
if(userEmail){

    console.log("GOt user Email");
} else {
    console.log("Dont have user email");
}



// falsy values

// false, 0, -0, Bigint 0n, "", null, undefiend,NaN

//truthy value
// "0" ,"false", "" , [], {}, function(){}
// if (userEmail.lenth === 0){
// console.log('Array is empty');

// }
//const emptyObj = {}

// if (Object.keys(emptyObj).lenth === 0){
 //    console.log("Object is empty");
// }

// Nullish Coalsecing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15 
 val1 = null ?? 10 ?? 20 


console.log(val1);



// Terniary Operator

// condition ? true : false 

const iceTeaprice = 100
isTeaprice >= 80 ? console.log("less than 80") : console.log("more than 80")