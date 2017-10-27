console.log("hello world")

///////////////////////////////////////////////////////////////////////////////
//HTML ELEMENTS
///////////////////////////////////////////////////////////////////////////////
const header      = document.getElementById('header');
const col1        = document.getElementById('col-1');
const col2        = document.getElementById('col-2');
const col3        = document.getElementById('col-3');
const footer      = document.getElementById('footer');
const formInput   = document.getElementById('input').value;
const systemText  = document.getElementById('systemText');
const letterIcons = document.getElementsByClass('letterIcon');
const resetti     = document.getElementById('resetBtn');
const ul          = document.getElementById('ul')

// class Game{
//   constructor(wordLibrary, letterPool, currentPlayer)
// }


///////////////////////////////////////////////////////////////////////////////
//GAME FUNCTIONS//
///////////////////////////////////////////////////////////////////////////////
function startGame(){
  /////////////////////////////////////////////////////////////////////////////
  //GAME DATA VARIABLES INITIALIZE//
  /////////////////////////////////////////////////////////////////////////////
  let playerOne                 = true;
  let wordLibrary               = [];
  let letterPool                = [];
  
  header.style.background-color = '#222';
  col1.style.background-color   = '#3c3c3c';
  col2.style.background-color   = '#303133';
  col3.style.background-color   = '#3c3c3c';
  footer.style.background-color = '#222';
  resetti.style.display         = 'none';

  while (playerOne === true){
    systemText.innerHTML = "Player One";
  }
  while (playerOne === false){
    systemText.innerHTML = "Player Two";
  }
  /////////////////////////////////////////////////////////////////////////////
}
function formVerify(){
  libraryCheck();
}
function libraryCheck(){
  for (let i = 0; i <= wordLibrary.length - 1; i++){
    if (formInput = wordLibrary[i]) {
      setWordLose();
      } else {
        letterCheck();
      }
      // else {}
    }
  }
function letterCheck(){
  for (let i = 0; i <= letterPool.length - 1; i++){
    if (formInput[0] = letterPool[i]){
    setLetterLose();
  } else {
    deadEndCheck();
  }
  }
}
function deadEndCheck(){
  if (formInput.length -1 === letterPool.length -1){
    setDeadEndLose();
  } else {
    wordLibrary.push(formInput);
    letterPool.push(formInput[0]);
    ul.appendChild(formInput);
    playerOne = !playerOne;
  }
  }
}
function resetAlphabet(){
  if (letterPool.length === 26) {
    var letterPool = 0;
    //Remove all letterPool HTML X Icons
    letterIcons.style.display = 'none';
  }
}

function playerFlip(){
  systemText.innerHTML = 'Player One';
}
function setWordLose(){
  systemtext.innerHTML              = "Repeat Word, ! You Lose! Try again?";
  header.style.background-color = '#efefef';
  col1.style.background-color   = '#efefef';
  col2.style.background-color   = '#efefef';
  col3.style.background-color   = '#efefef';
  footer.style.background-color = '#efefef';
  resetti.style.display         = 'inherit';
}
function setLetterLose(){
  systemtext.innerHTML              = "Repeat Leader Letter! You Lose! Try again?";
  header.style.background-color = '#efefef';
  col1.style.background-color   = '#efefef';
  col2.style.background-color   = '#efefef';
  col3.style.background-color   = '#efefef';
  footer.style.background-color = '#efefef';
  resetti.style.display         = 'inherit';
}
function setDeadEndLose(){
  systemtext.innerHTML              = "Opponent has no legal moves, You Lose! Try again?";
  header.style.background-color = '#efefef';
  col1.style.background-color   = '#efefef';
  col2.style.background-color   = '#efefef';
  col3.style.background-color   = '#efefef';
  footer.style.background-color = '#efefef';
  resetti.style.display         = 'inherit';
}
function setTimeLose(){
  systemtext.innerHTML              = 'Out of Time! You Lose! Try again?';
  header.style.background-color = '#efefef';
  col1.style.background-color   = '#efefef';
  col2.style.background-color   = '#efefef';
  col3.style.background-color   = '#efefef';
  footer.style.background-color = '#efefef';
  resetti.style.display         = 'inherit';
}
function resetGame(){
  header.style.background-color = '#222';
  col1.style.background-color   = '#3c3c3c';
  col2.style.background-color   = '#303133';
  col3.style.background-color   = '#3c3c3c';
  footer.style.background-color = '#222';
  resetti.style.display         = 'none';
  let playerOne                 = true;
}
///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//Event Listeners
///////////////////////////////////////////////////////////////////////////////
formInput.addEventListener('submit', function(){
  libraryCheck();
}){

}
///////////////////////////////////////////////////////////////////////////////

startGame();
