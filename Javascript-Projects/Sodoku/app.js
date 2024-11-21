const CLASS_1 = 'fa-solid fa-1 fa-2x'
const CLASS_2 = 'fa-solid fa-2 fa-2x'
const CLASS_3 = 'fa-solid fa-3 fa-2x'
const CLASS_4 = 'fa-solid fa-4 fa-2x'
const CLASS_5 = 'fa-solid fa-5 fa-2x'
const CLASS_6 = 'fa-solid fa-6 fa-2x'
const CLASS_7 = 'fa-solid fa-7 fa-2x'
const CLASS_8 = 'fa-solid fa-8 fa-2x'
const CLASS_9 = 'fa-solid fa-9 fa-2x'
const NUM_ARRAY = [
  [0, 1, 2, 9, 10, 11, 18, 19, 20],
  [3, 4, 5, 12, 13, 14, 21, 22, 23]
]
const cellElements = document.querySelectorAll('[data-cell]')
const numElements = document.querySelectorAll('[data-num]')
//const setSpan = document.getElementsByTagName('span')
const board = document.getElementById('board')
const color1 = 'rgba(0, 136, 204, .3)'
const color2 = 'white'
let numclass = CLASS_1
let bacColor

startGame()

function startGame () {
  console.log(NUM_ARRAY.length)
  numElements.forEach(num => {
    num.addEventListener('click', numClick)
  })
  cellElements.forEach(cell => {
    const cellDiv = document.createElement('div')
    const cellI = document.createElement('i')
    cell.appendChild(cellDiv)
    cellDiv.appendChild(cellI)
    cell.addEventListener('click', setBoardHover)
    cell.addEventListener('click', cell => {
      if (!checknum()) {
        cellDiv.style.color = 'red'
        cellI.setAttribute('class', numclass)
      } else {
        cellI.setAttribute('class', numclass)
      }
    })
  })
}

function numClick (e) {
  const cell = e.target
  console.log(cell.className)
  if (cell.className == CLASS_1) {
    //changeColor(true)
    numclass = CLASS_1
    return numclass
  } else if (cell.className == CLASS_2) {
    //changeColor(true)
    numclass = CLASS_2
    return numclass
  } else if (cell.className == CLASS_3) {
    //changeColor(3)
    numclass = CLASS_3
    return numclass
  } else if (cell.className == CLASS_4) {
    //changeColor(4)
    numclass = CLASS_4
    return numclass
  } else if (cell.className == CLASS_5) {
    //changeColor(5)
    numclass = CLASS_5
    return numclass
  } else if (cell.className == CLASS_6) {
    //changeColor(6)
    numclass = CLASS_6
    return numclass
  } else if (cell.className == CLASS_7) {
    //changeColor(7)
    numclass = CLASS_7
    return numclass
  } else if (cell.className == CLASS_8) {
    //changeColor(8)
    numclass = CLASS_8
    return numclass
  } else if (cell.className == CLASS_9) {
    //changeColor(9)
    numclass = CLASS_9
    return numclass
  }
}

function checknum () {
  /* return NUM_ARRAY.some(combination => {
    return combination.every(index => {
      return cellElements[index].
    })
  }) */
  return true
}

function setBoardHover (e) {
  const cell = e.target
  if (checkCellElements(cell)) {
    NUM_ARRAY[0].forEach(index => {
      console.log(index)
      cellElements[index].classList.add('backcolor')
    })
  }
}

function checkCellElements (cell) {
  return NUM_ARRAY[0].some(index => {
    return cell == index
  })
}

/* function changeColor (boolColor) {
  if (boolColor == true) {
    numElements.classList.add('backcolor')
  }
} */
