document.addEventListener('DOMContentLoaded', start)

function start() {

var reset = document.getElementById("new");

reset.addEventListener("click", newQuote);

function newQuote (){
var backgrounds = document.getElementsByClassName("color").style.backgroundColor;
var colors = ['#669999','	#669973','#667399','#996699','#996666','#cc0000','#66cc00','#00cccc'];

backgrounds = colors[Math.floor(Math.random() * colors.length)];

}

}
