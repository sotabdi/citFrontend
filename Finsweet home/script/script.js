const cars = ["Toyota", "Hunday", "BMW"];

let Clenth = cars.length;
let text = "<ul>"

for (i = 0; i < Clenth; i++) {
    text += "<li>" + cars[i] + "<li/>";
}
text += "</ul>"
document.getElementById("demo").innerHTML = text;