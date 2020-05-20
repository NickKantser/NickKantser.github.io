check.onclick = checking;
again.onclick = tryingAgain;

function tryingAgain() {
  for(var i = 0; i < pady.length; i++) {
    for(var j = 0; j < pady[i].length; j++) {
      pady[i][j].parentElement.classList.remove("wrong", "corectly");
      pady[i][j].value = "";
      pady[i][j].classList.remove("italic");
    }
  }
}

function checking() {
  for(var i = 0; i < pady.length; i++) {
    for(var j = 0; j < pady[i].length; j++) {
      if(pady[i][j].value.replace(/\s+/g,'') == PADY[i][j] || pady[i][j].value == "městě") {
        pady[i][j].parentElement.classList.add("corectly");
      } else {
        pady[i][j].parentElement.classList.remove("corectly");
        pady[i][j].parentElement.classList.add("wrong");
        pady[i][j].classList.add("italic");
        // pady[i][j].value = PADY[i][j];
      }
    }
  }
}

var PADY = [GEN, DAT, ACC, LOK, INSTR];

var gen = document.getElementsByClassName("gen");
var dat = document.getElementsByClassName("dat");
var acc = document.getElementsByClassName("acc");
var lok = document.getElementsByClassName("lok");
var instr = document.getElementsByClassName("instr");
var pady = [gen, dat, acc, lok, instr];
