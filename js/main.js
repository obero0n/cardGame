// recuperation de board
var board = document.getElementById('board');


var colors = ["red","purple","orange","yellow","lightblue","pink","white","red","purple","orange","yellow","lightblue","pink","white"];
// trie le tableau de façon random
var randomColor = colors.sort(function(a,b){return 0.5 - Math.random()});

var choice = [];

// creation d'un loop pour 14 card et ajout a board
for (let i = 0; i < colors.length; i++) {

  var div = document.createElement("div");

  board.appendChild(div);

  div.classList.add("Card");

  div.style.backgroundColor = div.classList;

  div.onclick = function(){
    this.style.backgroundColor = randomColor[i];
    choice.push(this);
    if (choice.length == 2) {
      if (choice[0].style.backgroundColor === choice[1].style.backgroundColor) {
        choice = [];
      }
      else {
        function timeCard(){
          choice[0].style.backgroundColor = "#8159C3";
          choice[1].style.backgroundColor = "#8159C3";
          choice = [];
          // alert("Try again");
        }
        setTimeout(timeCard,400);
      }
    }
  }
}
