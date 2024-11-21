import { unpauseGame } from './app.js'

const borderRadius = '50%'
const unpause = document.getElementById('Unpause-button')
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let borderDirection = 4
export let isPaused = false

unpause.addEventListener('click', unpauseGame)

window.addEventListener('keydown', e => {
  switch (e.key) {
    case 'ArrowUp':
    case 'w':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      /* borderDirection = 1
      setBorderRadius(borderDirection) */
      break
    case 'ArrowDown':
    case 's':
      if (lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      /* borderDirection = 2
      setBorderRadius(borderDirection) */
      break
    case 'ArrowLeft':
    case 'a':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      /* borderDirection = 3
      setBorderRadius(borderDirection) */
      break
    case 'ArrowRight':
    case 'd':
      if (lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      /* borderDirection = 4
      setBorderRadius(borderDirection) */
      break
    case ' ':
      isPaused = !isPaused
      break
  }
})

export function getImputDirection () {
  lastInputDirection = inputDirection
  return inputDirection
}

/* function setBorderRadius (border) {
  if (border === 1) {
    snakeHead.style.borderTopLeftRadius = borderRadius
    snakeHead.style.borderTopRightRadius = borderRadius
  } else if (border === 2) {
    snakeHead.style.borderBottomLeftRadius = borderRadius
    snakeHead.style.borderBottomRightRadius = borderRadius
  } else if (border === 3) {
    snakeHead.style.borderBottomLeftRadius = borderRadius
    snakeHead.style.borderTopLeftRadius = borderRadius
  } else if (border === 4) {
    snakeHead.style.borderTopRightRadius = borderRadius
    snakeHead.style.borderBottomRightRadius = borderRadius
  }
} */
