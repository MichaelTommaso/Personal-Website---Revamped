import { getImputDirection } from './input.js'
import { GRID_SIZE } from './grid.js'
import { EXPANSION_RATE } from './food.js'

export const SNAKE_SPEED = 5
const snakeLength = document.querySelector('[data-winning-snake-text]')
const foodCollected = document.querySelector('[data-winning-food-text]')
const gridSize = GRID_SIZE * GRID_SIZE
const snakeBody = [
  { x: 11, y: 11 }
]
let newSegments = 0
let snakeSize = 1

export function update () {
  addSegments()

  const inputDirection = getImputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }

  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function draw (gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  })
}

export function expandSnake (amount) {
  newSegments += amount
}

export function onSnake (position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
    return equalPosition(segment, position)
  })
}

export function getSnakeHead () {
  return snakeBody[0]
}

export function snakeIntersection () {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPosition (pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments () {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] })
    snakeSize++
    snakeLength.innerHTML = 'Snake Length: ' + snakeSize
    const foodEated = Math.floor(snakeSize / EXPANSION_RATE)
    foodCollected.innerHTML = 'Food Collected: ' + foodEated
  }
  newSegments = 0
}

export function snakeFillGrid () {
  if (snakeSize >= gridSize) return true
}
