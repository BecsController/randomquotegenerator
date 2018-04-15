document.addEventListener('DOMContentLoaded', start)

function start() {
  var whatPeopleSay = [
    ['"Injustice anywhere is a threat to justice everywhere."', 'Martin Luther King, Jr.'],
    ['"The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence."', 'Charles Bukowski'],
    ['"A feminist is any woman who tells the truth about her life."', 'Virginia Woolf'],
    ['"Be yourself; everyone else is already taken."', 'Oscar Wilde'],
    ['"You only live once, but if you do it right, once is enough."', 'Mae West'],
    ['"Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."', 'Maya Angelou'],
    ['"Without music, life would be a mistake."', 'Friedrich Nietzsche'],
    ['"Tonight I can write the saddest lines, I loved her, and sometimes she loved me too."', 'Pablo Neruda']
    ['"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty."', 'Winston Churchill'],
    ['"Whether You Think You Can Or Think You Can’t, You’re Right."', 'Henry Ford'],
    ['"Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing."', 'Helen Keller'],
    ['"The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today."', 'Franklin D. Roosevelt']
];

var reset = document.getElementById("new");
var colors = ['#669999','#669977','#667799','#996699','#996666','#cc0000','#66cc00','#00cccc'];
var newAuthor = document.getElementsByClassName("author")[0];
var newQuotes = document.getElementsByClassName("quote")[0];
var authorFade = $(".author");
var quoteFade = $(".quote");

reset.addEventListener("click", fade);

function fade(){
quoteFade.fadeOut("slow");
authorFade.fadeOut("slow", newQuote);
}

function newQuote (){
var createNewQuote = whatPeopleSay[Math.floor(Math.random() * 11)];
var newColor = colors[Math.floor(Math.random() * 8)];
newQuotes.innerHTML = createNewQuote[0];
newAuthor.innerHTML = createNewQuote[1];
document.body.style.backgroundColor = newColor;
quoteFade.fadeIn();
authorFade.fadeIn();
  }
}
