import { gridBody } from './checker.js'

export const GRID_SIZE = 21
const color = 'lightGreen'

export function randomGridPosition () {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1
  }
}

export function outsideGrid (position) {
  return (
    position.x < 1 || position.x > GRID_SIZE ||
    position.y < 1 || position.y > GRID_SIZE
  )
}

export function gridColor (gameBoard) {
  gridBody.forEach(grid => {
    const gridElement = document.createElement('div')
    gridElement.style.gridRowStart = grid.y
    gridElement.style.gridColumnStart = grid.x
    gridElement.style.backgroundColor = color
    gameBoard.appendChild(gridElement)
  })
}
