/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8], 
  [1, 4, 7],
  [2, 5, 8],
  [0, 3, 6],
  [0, 4, 8],
  [2, 4, 6],
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner, tie



// board = [null, null, null, null, null, null, null, null, null]

// turn = 1
// winner = false
// tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.getElementsByClassName("sqr")
//console.log(squareEls)
const messageEl = document.getElementById("message")
//console.log(messageEl)
const boardEl = document.querySelector(".board")
//console.log(boardEl)
const resetBtnEl = document.getElementById('reset')
/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick) 
  console.log()
//console.log(evt)

resetBtnEl.addEventListener("click", init)



/*-------------------------------- Functions --------------------------------*/
//stores the game state
function init(){
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1 
  winner = false
  tie = false
  messageEl.classList.remove('animate_animated' , 'animate__hinge')
render()
}

//calls init
init()

// console.log(board[0, 1, 2])

function render(){
  updateBoard()
  updateMessage()
//console.log('sanity check2')
}

// displays game state of each x , o , or null 
function updateBoard(){
  //console.log(board)
board.forEach(function(element, index){
  if (element === 1){
   // console.log(element)
    squareEls[index].innerText = "X"
    //console.log(squareEls[index])
  } else if (element === -1){
   // console.log(index)
    squareEls[index].innerText = "O"
    //console.log(squareEls)
    //console.log(squareEls[index])
  } else if (element === null){
    squareEls[index].innerText = " "
  }
} ) 
}

function updateMessage(){
  let person = ' '
  if(turn === -1) person ='Player 2'
  else {person = 'Player 1'};
  if (winner === false && tie === false){
    messageEl.textContent = `It's ${person}'s turn`
    messageEl.classList.add('animate_animated' , 'animate_tada')
  } else if (winner === false && tie === true){
    messageEl.textContent = `It's a tie`
    messageEl.classList.add('animate_animated' , 'animate__hinge')
    
  } else {
  messageEl.textContent = `${person} Wins` 
  confetti.start(1200)
}
}

function handleClick(evt){
  const sqIdx = evt.target.id.at(-1)
  //console.log(sqIdx) 
  if (board[sqIdx] !== null || winner === true){
    return
  }
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()
  render()
}

function placePiece(idx){
  board[idx] = turn
  }

function checkForTie(){
  if (!board.includes(null)) tie = true
}

  function checkForWinner(){
    for (let i = 0; i < winningCombos.length; i++){
  if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3){
    winner = true
  }}}


function switchPlayerTurn(){
  if (winner === true){
    return
  } else {
    turn = turn * -1
  }
}

