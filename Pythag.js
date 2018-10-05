//let's get all required elements
var x = 0;
var y = 0;
var z = 0;
var times = 0;
var body = document.querySelector("body");
var mess = document.querySelector("#message");
var weather = document.querySelector("#weather");
var Temp = document.querySelector("button");
var Apple = document.querySelector("#Apple");
var Ban = document.querySelector("#Ban");
var Can = document.querySelector("#Can");
var choice;
//Drop down message
giveMessage = function () {
    choice = weather.value;
    if (choice == "CA") {
        z = Math.sqrt(Math.pow(x, 2) - y * y);
        Apple.textContent = 'Hypotonuse: ' + x
        Ban.textContent = 'Leg 1: ' + y
        Can.textContent = 'Leg 2: ' + z
    }
    if (choice == "AB") {
        z = Math.sqrt(x * x + y * y);
        Apple.textContent = 'Hypotonuse: ' + z
        Ban.textContent = 'Leg 1: ' + x
        Can.textContent = 'Leg 2: ' + y
    }
}
weather.onchange = function () {
    giveMessage();
}
Temp.onclick = function () {
    choice = weather.value;
    if (choice == "CA") {
        x = parseInt(prompt("Input Hypotonuse"));
    } else if (choice == "AB") {
        x = parseInt(prompt("Input Leg 1"));
    }

    y = parseInt(prompt("Input Leg 2"));
    giveMessage();
}
body.onclick = function () {
    times++;
    if (times == 3) {
        mess.textContent = "You miscliked nerd!"
    }
    if (times == 5) {
        mess.textContent = "Man, you're bad at clicking..."
    }
    if (times >= 8) {
        mess.textContent = "Ok, you've clicked " + times + " times now, settle down"
    }

}
