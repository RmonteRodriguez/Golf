var insertPars = prompt("Enters Pars");
var insertStrokes = prompt("Enter Strokes");
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {

if (strokes == 1){
  document.getElementById("demo").innerHTML = "Hole-in-one!";
} else if (strokes <= par - 2){
    document.getElementById("demo").innerHTML = "Eagle";
} else if (strokes == par - 1){
    document.getElementById("demo").innerHTML = "Birdie";
} else if (strokes == par){
    document.getElementById("demo").innerHTML = "Par";
} else if (strokes == par + 1){
    document.getElementById("demo").innerHTML = "Bogey";
} else if (strokes == par + 2){
    document.getElementById("demo").innerHTML = "Double Bogey";
} else if (strokes >= par + 3){
    document.getElementById("demo").innerHTML = "Go Home!"
}

  return "Change Me";
}

golfScore(insertPars, insertStrokes);