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
console.log(squareEls)
const messageEl = document.getElementById("message")
console.log(messageEl)
const boardEl = document.querySelector(".board")
console.log(boardEl)

/*----------------------------- Event Listeners -----------------------------*/
boardEl.addEventListener('click', handleClick) 
  console.log()
//console.log(evt)



/*-------------------------------- Functions --------------------------------*/
//stores the game state
function init(){
  board = [1, -1, 1, null, null, -1, null, null, null]
  turn = 1 
  winner = false
  tie = false
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
function upBoard(){
  //console.log(board)
board.forEach(function(element, index){
  if (element === 1){
   // console.log(element)
    squareEls[index].textContent = "X"
    //console.log(squareEls[index])
  } if (element === -1){
   // console.log(index)
    squareEls[index].textContent = "O"
    //console.log(squareEls)
    //console.log(squareEls[index])
  }
} ) 
}

upBoard()

function updateMessage(){
  if (winner === false && tie === false){
  console.log `It's ${turn}'s turn`
  } if (winner === false && tie === true){
    `It's a tie`
  }if (winner === true && tie === false){
  console.log `${turn} Wins`
  }  
}
updateMessage()

function handleClick(evt){
  const sqIdx = evt.target.id.at(-1)
  //console.log(sqIdx)
  placePiece(sqIdx)
  checkForTie()
  checkForWinner()
  switchPlayerTurn()


  if (board[sqIdx] === 1 || board[sqIdx] === -1){
    return
  }
  if (winner === true){
    return
  }
  
  //console.log(sqIdx)
  //console.log('handle click works')
  //console.log(evt)
}

function placePiece(idx){
  board[idx] = turn
  //console.log(board[idx])
  //console.log(turn)
  }

placePiece()

function checkForTie(){
  if (!board.includes("null")) tie = true
}
//console.log(tie)
checkForTie()

//totals the numbers in each arrays array
// if it's 3 , winner
// layer problem, attach this to the board
//math abs is the condition inside if statement
function checkForWinner(){
for (let i = 0; i < winningCombos.length; i++){
if (Math.abs(board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]]) === 3){
  winner = true
}
} console.log(winner)
}

//console.log(board[0, 1, 2])
checkForWinner()

function switchPlayerTurn(){
  if (winner === true){
    return
  } else if (winner === false){
    return turn * -1
  }
} 
switchPlayerTurn()
console.log(turn)