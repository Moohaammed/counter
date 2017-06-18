// This Is A Mesbahah .. Used in counting the number of praises
//Take A Look At This Link .. https://codepen.io/abomostafacobra/full/ZLROKP
// I wanted to remake this idea .. and I made some modifications
// Thanks Alot To Mahmoud Hakem


var num = 0;
var click = document.querySelector(".click");
var oops = document.querySelector(".oops");
var span = document.querySelector(".span1");
var reset = document.querySelector(".reset");
var score = document.querySelector(".score");
var high = document.querySelector(".high");
var Scores = ["0"];

//styles
score.style.fontSize = "larger";
score.style.margin = "auto";
score.style.width = "100%";
score.style.fontFamily = "sans-serif";
score.style.textAlign = "center";
high.style.fontSize = "larger";
high.style.margin = "30px 4.5%";
high.style.border = "2px solid #fff";
high.style.borderRadius = "5px";
high.style.textAlign = "center";
high.style.width = "90%";
high.style.fontFamily = "cursive";


click.onclick = function () {  
  num += 1;
  span.innerHTML = num;
};

oops.onclick = function () {  
  if (Scores[Scores.length - 1] != 0) {  
    num = Scores[Scores.length - 1];
  }
  span.innerHTML = num;
};

reset.onclick = function () {   
  score.innerHTML = "Your Score is " + num ;
  Scores.push(num);
  high.innerHTML = "Your High Score is " + Math.max(...Scores);

  // this is a failed attempt .. because it will give you the biggest number between the last tow numbers
  /* if (Scores[Scores.length - 1] > Scores[Scores.length - 2]) {
  
    high.innerHTML = "Your High Score is " + Scores[Scores.length - 1];

  } */
  
  num = 0;  
  span.innerHTML = num;
};
