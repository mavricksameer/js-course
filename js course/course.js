// // //if statement

// // //  syntax
// // // if(condition){
// // //     console.log()
// // // }else{
// // //     console.log()
// // // }

// // // let Age = 18
// // // if (Age>=18){
// // //     console.log("You Are ready to take soso");
// // // }else {
// // //     console.log("You are not 18");

// // // }

// // // let time = 20
// // // if(time>18){
// // //     console.log("Alarm is RInging");

// // // }else {
// // //     console.log("Silent");

// // // }

// // // let player = 14
// // // if (player>=18){
// // //     console.log("lets play");

// // // }else {
// // //     console.log("sorry ");

// // // }

// // // let Me = 19
// // // if (Me>=18){
// // //     console.log("Nikah confirm");

// // // }else {
// // //     console.log("thodi dair oe intizr karo");

// // // }

// // // let c = 3
// // // if (c % 2 ==0){
// // //     console.log("this is an even number");
// // // }
// // // else {
// // //     console.log("This is an odd number");

// // // }

// // // let x = 7
// // // if (x % 4 == 0){
// // //     console.log("this is an even number")
// // // }
// // // else {
// // //     console.log("this is an odd number");

// // // }

// // // let a = prompt("enter a number", 3)
// // // if (a % 3 == 0)
// // // {
// // //     alert ("this is an number divided by 3")
// // // }
// // // else {
// // //     alert ("this can not be divided by 3")
// // // }


// // Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).

// // Write a program that determines if a year is a leap year.

// // Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.
// // Write a program that calculates the Body Mass Index (BMI) and categorizes it. The formula for BMI is: weight / (height * height).

// // //answer no 1
// // // let a = prompt ("greater number ")
// // let a = 50
// // let b = 20
// // let c = a  b
// // console.log(c);




// }
// let time = 1;
// let asas;
// switch (time) {
//   case 1:
//     asas = "good morning";
//     break;

//   case 2:
//     asas = " good evening";
//     break;
//     case 3 :
//         asas = "good night"
//         break;
        
// } 
// console.log(asas);


// let g = "goodmorning"
// console.log(g)
// let b = "goodevening"
// console.log(b)
// let f = "good night"
// console.log(f)


//   let a =  prompt ("grade") 
//   if (a > 100)
//     {
//        alert ("invalid number")
//     }
       
//    else if (a>=90)
//   {
//     alert ("you got A+")
//   } 
//   else if (a >= 70)
//   {
//     alert ("you got A grade")
//   }
//   else if (a >= 60){
//     alert ("you got b grade")
//   }
//   else if ( a >= 50)
//  {
//     alert ("you got c grade")
//  }
//  else if ( a >= 40 ){
//     alert ("you got d")
//  } else if (a < 40){
//     alert ("sorry you are fail")
//  }
 
//  Write a program that greets the user based on the time of day. Display  good morning, good afternnon or good evening based on the time of day when you run the code.


// let prom = prompt ("display Time")
// if (prom >= 13)
// {
// alert ("invalid number")
// }
// else if (prom >= 8)
// {
//   alert ("Good night guys")
// }
// else if (prom >= 5)
// {
//   alert ("Good evening guys")
// }
// else if (prom >= 1 )
// {
// alert ("Good Morning guys")
// }
// else {
//   alert ("write a number")
// }
  

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

// let game = prompt ("Write a simple number gussing game")

// if (game>8)
// {
//   alert ("you guss the higher number")
// }
// else if (game == 7)
// {
//   alert ("You Win")
// }
// else if (game > 1) {
//   alert ("You guss the lower number")
// }
// else {
//   alert ("Guss a number")
// }



// Write a program to determine the greater of two numbers.

//  let a = prompt ("First number")
//  let b = prompt ("second number")
//  if (a>b)
//     alert ("A is greater then b")
// else if (b>a)
//     alert ("B is greater then a")
// else if (a==b)
//     alert ("both are equal")


// for (let numbers = 0; numbers<=100; numbers++)
// {
//     if (numbers % 2 ===0 )
//     {
//         alert(numbers);
        
//     }
// }

// let num = prompt ("input a number")
// let a = 10
// for (let a=0; a*10; )
// {
//     console.log(a);
    
// }


// let num = prompt("enter a number")
// if (num)
//     {
//     // console.log(`multipication table for ${num}`);
//     for(let i = 1; i<=10; i++){
//         document.write (`${num}x ${i} = ${num*i} <br>`)
//     }
     
// }else ("enter a valid number")


// Write a program that asks the user to input 5 numbers, one at a time. For each number, check if it is even or odd and print a message like:
// "The number 4 is even."
// "The number 7 is odd."
// Use a loop to get all 5 numbers and an if statement to determine if the number is even or odd.

let num = prompt ("enter a number")
for (let i = 1; i<=10;) {
    document.write(`${num} is ${i} ${num%i} <br>`)
}
