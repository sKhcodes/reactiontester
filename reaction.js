
var start= new Date().getTime();

function hiShape() {
    document.getElementById("shape").style.display = "block";
    start= new Date().getTime();
    var rando = Math.random() * 300;
    var width=  Math.random() * 500;
    var radius = Math.random() * 100;
    var randcolor = getRandomColor();
   
    if (Math.random() < 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    }

else {
    document.getElementById("shape").style.borderRadius = 0;
}
    document.getElementById("shape").style.top = rando + "px";
    document.getElementById("shape").style.left = rando + "px"; 
    document.getElementById("shape").style.width = width + "px"; 
    document.getElementById("shape").style.height = width + "px"; 
    document.getElementById("shape").style.background = randcolor;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function appearAfterDelay() {
setTimeout(hiShape, Math.random() * 2000);

}


appearAfterDelay();
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display="none";
    var end = new Date().getTime();
    var timeTaken = (end - start) /1000;
   document.getElementById("YourTime").innerHTML = (timeTaken + " seconds");
   appearAfterDelay();
}
