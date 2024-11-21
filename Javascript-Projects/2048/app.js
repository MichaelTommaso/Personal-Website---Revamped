const board = document.getElementById('board')
const cellArray = Array.from(document.querySelectorAll('[data-cell]'))
let loopError = 2

startGame()

function startGame () {
  for (let i = 0; i < 2; i++) {
    const textNode = document.createTextNode('2')
    let random = Math.floor(Math.random() * cellArray.length)
    const cell = cellArray[random]
    if (cell.hasChildNodes()) {
      undrawArray()
      i -= 1
    }
    cell.classList.add('block')
    cell.appendChild(textNode)
  }
}

function undrawArray () {
  const filterArray = cellArray.filter(cell => cell.classList.contains('block'))
  filterArray.forEach(cell => {
    cell.classList.remove('block')
    cell.innerText = ''
  })
}

function undraw (cell) {
  cell.classList.remove('block')
  cell.innerText = ''
}

function draw (cell) {
  cell.classList.add('block')
  cell.innerText = '2'
}

window.addEventListener('keydown', e => {
  const cell = e.key
  switch (cell) {
    case 'w':
      pushUp()
      break
    case 's':
      pushDown()
      break
    case 'a':
      pushLeft()
      break
    case 'd':
      pushRight()
      break
  }
})

function pushDown () {
  const index = cellArray.findIndex(cell => cell.classList.contains('block'))
  if (cellArray[index].classList.contains('taken')) return
  // const filterArray = cellArray.filter(cell => cell.classList.contains('block'))
  undraw(cellArray[index])
  let indexPOS = index + 4
  draw(cellArray[indexPOS])
}
