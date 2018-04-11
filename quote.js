document.addEventListener('DOMContentLoaded', start)

function start() {
  var whatPeopleSay = [
    'Injustice anywhere is a threat to justice everywhere.',
    'The problem with the world is that the intelligent people are full of doubts while the stupid ones are full of confidence.',
    'A feminist is any woman who tells the truth about her life.',
    'Be yourself; everyone else is already taken.',
    'You only live once, but if you do it right, once is enough.',
    'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.',
    'Without music, life would be a mistake.',
    'Tonight I can write the saddest lines, I loved her, and sometimes she loved me too.'
  ];

  var thePeopleWhoSayThem= [
    'Martin Luther King, Jr.',
    'Charles Bukowski',
    'Virginia Woolf',
    'Oscar Wilde',
    'Mae West',
    'Maya Angelou',
    'Friedrich Nietzsche',
    'Pablo Neruda'
  ];
var reset = document.getElementById("new");
var colors = ['#669999','#669973','#667399','#996699','#996666','#cc0000','#66cc00','#00cccc'];
var newAuthor = document.getElementsByClassName("author")[0];
var newQuotes = document.getElementsByClassName("quote")[0];

reset.addEventListener("click", newQuote);

function newQuote (){
newQuotes.innerHTML = whatPeopleSay[Math.floor(Math.random() * 8)];
newAuthor.innerHTML = "Charles Bukowski";
document.getElementsByClassName("color").style.backgroundColor = colors[Math.floor(Math.random() * 8)];
  }
}
