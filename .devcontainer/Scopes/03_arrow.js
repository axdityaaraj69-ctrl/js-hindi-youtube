const user = { 
    usernaame: "raj",
    price: 999,
    welcomeMesseage: function() { 
        console.log('${Raj} , welcome to website');
        console.log(this);
        
    }
}
// user.welcomeMesseage()
// user.username = "raj"
// user.welcomeMesseage()

// console.log(this);

// function chai() { 
  //   let username = "raj"
  //   console.log(this.username);
// }


// const chai =  () => {
   //  let username = "raj"
   //  console.log(this);

// }






// chai()

 // const addTwo =  (num1,num2) => num1 + num2 


 // const addTwo = (num1, num2) => (num1 + num2)

 const addTwo = (num1,num2) => ({username: "raj"})

 
 console.log(addTwo(3,4))



 const myArray = [2,5,6,7]

 // myArray.forEach()