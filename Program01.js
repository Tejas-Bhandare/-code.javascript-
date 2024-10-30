
let massMark = 78;
let heightMark= 1.69;
let massJohn = 92;
let heightJohn = 1.92;
let BMIMark = 0;
let BMIJohn = 0;
let markHigherBMI = false;

BMIMark = massMark / heightMark;
BMIJohn = massJohn / heightJohn;

if(BMIMark > BMIJohn)
{
    markHigherBMI = true;
}

console.log(BMIMark);
console.log(BMIJohn);
console.log(markHigherBMI)