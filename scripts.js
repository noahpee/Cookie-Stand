let user = prompt('hi my name is noah what is your name')

let time = prompt("hi" + user + ", what time is it? (0-23)");

let message;

if (time < 12) {
    message = "good morning" + user;
} else {
    message = "good afternoon" + user;
}

console.log(message)


let myName = 'noah'

console.log(myName)

let myAge = 31


const nameAge = 'my name is ' + myName +' and i am ' + myAge

console.log(nameAge)

let x = 5

const y = 'y'

let number = x + y

let answer = "The type is " + typeof number + ". The answer is " + number + '.'

console.log(answer)