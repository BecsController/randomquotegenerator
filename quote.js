document.addEventListener('DOMContentLoaded', start)

function start() {

var reset = document.getElementById("new");
var colors = ['#669999','#669973','#667399','#996699','#996666','#cc0000','#66cc00','#00cccc'];
var newAuthor = document.getElementsByClassName("author")[0];
var newQuotes = document.getElementsByClassName("quote")[0];

reset.addEventListener("click", newQuote);

function newQuote (){
newQuotes.innerHTML = "The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence.";
newAuthor.innerHTML = "Charles Bukowski";
document.getElementsByClassName("color").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
  }
}
