// let num = 20
// console.log(num);
// console.log(num++);
// console.log(num);
// console.log(num++);
// console.log(num);

// let a = Number(prompt("Enter Number One"))
// let b = Number(prompt("Enter Number Two"))
// alert(a + b)

/* 💻 Challenge: Calculator for a Rectangle

Write a program that:
Asks the user for the width and height of a rectangle.

Calculates:
The area (width × height)
The perimeter (2 × (width + height))
Displays the results using alert() or console.log() */

// let width = Number(prompt("Enter Width "))
// let height = Number(prompt("Enter Height "))

// let area = alert(`The Area Of the Room is ${width * height}`)
// let Perimeter = alert(`The Perimeter of the Room is ${2* (width + height)}`)


// var num = 1;
// var newNum = num++;
// console.log(newNum);
// console.log(newNum);




// let my_name = "Kashifali"
// let reversed = my_name.split('').reverse().join('');
// console.log(reversed)


let user_name = prompt("Enter Your Name")
let maths = +prompt("Enter a Math Marks")
let physics = +prompt("Enter a Physics Marks")
let english = +prompt("Enter a English Marks")

let sum = maths + physics + english
let percentage = sum / 300 * 100

if (percentage >= 80) {
    console.log(`🎉 Hey ${user_name}! Great job — you got an A grade! 💯`);
} else if (percentage >= 70) {
    console.log(`👏 Nice work, ${user_name}! You scored a B — keep it up! 🚀`);
} else if (percentage >= 60) {
    console.log(`👍 Good effort, ${user_name}! You got a C — room to grow! 🌱`);
} else if (percentage >= 50) {
    console.log(`📚 Keep going, ${user_name}! You got a D — just a bit more focus and you'll improve! 💪`);
} else{
    console.log(`💡 Don’t give up, ${user_name}! You got an F, but every failure is a step toward success. Try again! 🔁`);

}

