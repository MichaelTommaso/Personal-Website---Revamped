import { getSnakeHead, snakeIntersection, update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeFillGrid } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid, gridColor } from './grid.js'
import { isPaused } from './input.js'

const gameBoard = document.getElementById('game-board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restart = document.getElementById('Restart-button')
const pauseMessageElement = document.getElementById('pauseMessage')
let lastRenderTime = 0
let playerLost = false
let playerWon = false

restart.addEventListener('click', () => {
  window.location = '/'
})

function main (currentTime) {
  if (playerLost) {
    endGame(false)
  } else if (playerWon) {
    endGame(true)
  }

  if (isPaused) {
    pauseGame()
  } else {
    unpauseGame()
  }

  window.requestAnimationFrame(main)
  const seconsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (seconsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)

function update () {
  updateSnake()
  updateFood()
  checkWin()
  checkDeath()
}

function draw () {
  gameBoard.innerHTML = ' '
  gridColor(gameBoard)
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

function checkWin () {
  playerWon = snakeFillGrid()
}

function checkDeath () {
  playerLost = outsideGrid(getSnakeHead()) || snakeIntersection()
}

function endGame (boolEndGame) {
  if (boolEndGame) {
    winningMessageTextElement.innerText = 'You win!'
  } else if (!boolEndGame) {
    winningMessageTextElement.innerText = 'You lost!'
  }
  winningMessageElement.classList.add('show')
  SNAKE_SPEED = 0
}

function pauseGame () {
  pauseMessageElement.classList.add('show')
}

export function unpauseGame () {
  pauseMessageElement.classList.remove('show')
}
