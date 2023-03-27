function dogOption() {

    dogNumber = document.getElementById('dogSelect').value

    console.log(dogNumber)

    for (i = 0; i < dogNumber; i++) {

        console.log("loadsa dogs")

        document.getElementById('dogImages')

    }
}

let user;

function yourName() {
  user = prompt("What is your name?");
  return document.write(user);
}

function timeOfDay() {
  let time = prompt("Hi " + user + ", what hour is it? (0 - 23)");

  let message;

  if (time < 12) {
    message = "Good morning " + user;
  } else if (time <= 18) {
    message = "Good afternoon " + user;
  } else if (time < 24) {
    message = "Good night " + user;
  } else {
     time = prompt("hi " + user + ' please use real time'); 
  }
  console.log(message);
  return message;
}


