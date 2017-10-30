console.log("hello world")

///////////////////////////////////////////////////////////////////////////////
//HTML ELEMENTS
///////////////////////////////////////////////////////////////////////////////
const header      = document.getElementById('header');
const col1        = document.getElementById('col-1');
const col2        = document.getElementById('col-2');
const col3        = document.getElementById('col-3');
const footer      = document.getElementById('footer');
const formInput   = document.forms[0];
const systemText  = document.getElementById('sysText');
const letterIcons = document.getElementsByClassName('letterIcon');
const resetti     = document.getElementById('resetBtn');
const ul          = document.getElementById('ul');
const timer       = document.getElementById('timer');

var playerState, safetyState, wordLibrary, letterPool, lastLetter;
var wordLibrary = [];
var letterPool = [];
var lastLetter = [];
var timeLimit, terminus, distance, seconds;
var inputStr;
var input;
var count;
var counter;
var timeout;
safetyState = true;
///////////////////////////////////////////////////////////////////////////////
//GAME FUNCTIONS//
///////////////////////////////////////////////////////////////////////////////
function initGame(){
  /////////////////////////////////////////////////////////////////////////////
  //GAME DATA VARIABLES INITIALIZE//
  /////////////////////////////////////////////////////////////////////////////
  var playerState    = true;
  var safetyState    = true;
  wordLibrary.length =    0;
  letterPool.length  =    0;
  lastLetter.length  =    0;
  let timeLimit;
  var terminus       =    0;
  var distance       = timeLimit - terminus;
  var seconds        = Math.floor((distance % (1000 * 60)) / 1000);
  var count;
  const systemText   = document.getElementById('sysText');

  systemText.innerHTML          =          'Get Ready!';
  header.style.backgroundColor  =                '#222';
  col1.style.backgroundColor    =             '#3c3c3c';
  col2.style.backgroundColor    =             '#303133';
  col3.style.backgroundColor    =             '#3c3c3c';
  footer.style.backgroundColor  =                '#222';
  resetti.style.display         =                'none';
  ul.innerHTML = ""

  if (playerState === true){
    systemText.innerHTML = "Player One";
  }
  if (playerState === false){
    systemText.innerHTML = "Player Two";
  }
  // console.log("Game Init: playerState = " + playerState + ", safetyState = " + safetyState + ", wordLibrary = " + wordLibrary + ", letterPool = " + letterPool);
  setTurnTimer();
  setDecrementTimer();
}
/////////////////////////////////////////////////////////////////////////////
function setTurnTimer() {
    timeout = setTimeout(setTimeLose, 15000);
}
function setDecrementTimer(){
  var count = 15;
  let counter = setInterval(decrementTimer, 1000);
  function decrementTimer(){
    count = count - 1
    if (count < 0){
      clearInterval(counter);
      return;
    }
    timer.innerHTML = count;
  }
}
function stopTimer() {
    clearTimeout(timeout);
    clearInterval(counter);
}
function formVerify(){
  var input = formInput.name.value;
  var inputStr = input.toString();
  libraryCheck();
}
function libraryCheck(){

  var input = formInput.name.value;
  var inputStr = input.toString();

  for (let i = 0; i <= wordLibrary.length - 1; i++){
    if (inputStr === wordLibrary[i]) {
      setWordLose();
      }
    }
    leaderCheck();
  }
function leaderCheck(){

  var input = formInput.name.value;
  var inputStr = input.toString();

  // for (let i = 0; i <= letterPool.length - 1; i++){
  if (safetyState === false){
    followCheck()}

  if (inputStr.charAt(0) === letterPool[0]){
    setLeaderLose();
  } else {
    deadEndCheck();
  }
  }
function followCheck(){

    var input = formInput.name.value;
    var inputStr = input.toString();

    if (inputStr.charAt(0) != lastLetter[0]){
      setFollowLose();
    } else {
    }
  }
function deadEndCheck(){

  var input = formInput.name.value;
  var inputStr = input.toString();
  if (letterPool[0] === inputStr.charAt(inputStr.length -1)){
    setDeadEndLose();
  } else {
    wordLibrary.push(input);
    letterPool.unshift(inputStr.charAt(0));
    lastLetter.unshift(inputStr.charAt(inputStr.length -1))
    var node = document.createElement('li');
    var textnode = document.createTextNode(inputStr);
    node.appendChild(textnode);
    ul.appendChild(node);
    playerState = !playerState;
    if (playerState === true){
      systemText.innerHTML = "Player Two";
    }
    if (playerState === false){
      systemText.innerHTML = "Player One";
    }
    safetyState  = false;
    formInput.reset();
stopTimer();
setTurnTimer();
setDecrementTimer();
  }
  }
function resetLetterPool(){
  if (letterPool.length === 26) {
    var letterPool = [];
    //Remove all letterPool  HTML X Icons
    letterIcons.style.display = 'none';
  }
}
function setWordLose(){
  systemText.innerHTML          = "Repeat Word, You Lose! Try again?";
  header.style.backgroundColor  = '#c10303';
  col1.style.backgroundColor    = '#c10303';
  col2.style.backgroundColor    = '#c10303';
  col3.style.backgroundColor    = '#c10303';
  footer.style.backgroundColor  = '#c10303';
  resetti.style.display         = 'inherit';
  // clearTimer();
}
function setFollowLose(){
  systemText.innerHTML          = "You didn't follow your opponent, You Lose! Try again?";
  header.style.backgroundColor  = '#c10303';
  col1.style.backgroundColor    = '#c10303';
  col2.style.backgroundColor    = '#c10303';
  col3.style.backgroundColor    = '#c10303';
  footer.style.backgroundColor  = '#c10303';
  resetti.style.display         = 'inherit';
  // clearTimer();
}
function setLeaderLose(){
  systemText.innerHTML          = "Illegal letter, You Lose! Try again?";
  header.style.backgroundColor  = '#c10303';
  col1.style.backgroundColor    = '#c10303';
  col2.style.backgroundColor    = '#c10303';
  col3.style.backgroundColor    = '#c10303';
  footer.style.backgroundColor  = '#c10303';
  resetti.style.display         = 'inherit';
  // clearTimer();

}
function setDeadEndLose(){
  systemText.innerHTML          = "Opponent has no legal moves, You Lose! Try again?";
  header.style.backgroundColor  = '#c10303';
  col1.style.backgroundColor    = '#c10303';
  col2.style.backgroundColor    = '#c10303';
  col3.style.backgroundColor    = '#c10303';
  footer.style.backgroundColor  = '#c10303';
  resetti.style.display         = 'inherit';
  // clearTimer();

}
function setTimeLose(){
  systemText.innerHTML          = 'Out of Time! You Lose! Try again?';
  header.style.backgroundColor  = '#c10303';
  col1.style.backgroundColor    = '#c10303';
  col2.style.backgroundColor    = '#c10303';
  col3.style.backgroundColor    = '#c10303';
  footer.style.backgroundColor  = '#c10303';
  resetti.style.display         = 'inherit';
  // clearTimer();
}

///////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////
//Event Listeners
///////////////////////////////////////////////////////////////////////////////
formInput.onsubmit = function(e) {
  e.preventDefault();
  // clearTimer();
  formVerify();
}
// formInput.addEventListener('submit', function(){
//
// });
resetti.addEventListener('click', function(){
  safetyState = true;
  stopTimer();
  initGame();
});
///////////////////////////////////////////////////////////////////////////////

initGame();
