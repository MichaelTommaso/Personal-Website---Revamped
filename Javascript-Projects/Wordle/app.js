import { wordArray } from './random.js'

const text = Array.from(document.querySelectorAll('[data-text]'))
const randomNum = Math.floor(Math.random() * wordArray.length)
const word = wordArray[randomNum].toLocaleUpperCase()
const textArray = [
  [text[0], text[1], text[2], text[3], text[4]],
  [text[5], text[6], text[7], text[8], text[9]],
  [text[10], text[11], text[12], text[13], text[14]],
  [text[15], text[16], text[17], text[18], text[19]],
  [text[20], text[21], text[22], text[23], text[24]],
  [text[25], text[26], text[27], text[28], text[29]]
]
let currentCell = -1
let letter = ' '

console.log(word)


start(currentCell)

function start (currentCell) {
  window.addEventListener('keydown', e => {
    const str = `${e.key}`
    letter = str.toLocaleUpperCase()
    text.forEach(index => index.classList.remove('current-cell'))
    if (e.key == 'Backspace') {
      //if (currentCell === 4 || currentCell === 9 || currentCell === 14 || currentCell === 19 || currentCell === 24) return
      text[currentCell].removeChild(text[currentCell].firstChild)
      text[currentCell].classList.remove('filled-cell')
      currentCell -= 1
      console.log(currentCell)
    } else if (e.key === 'Enter' && currentCell === 4) {
      if (hasFiveLetters()) {
        checkWord1()
        checkWord2()
        checkWord3()
        checkWord4()
        checkWord5()
        checkWord6()
        checkLetter()
      }
    } else if (e.keyCode >= 65 && e.keyCode <= 90 ) {
      currentCell += 1
      const cell = text[currentCell]
      console.log(currentCell)
      const celldiv = document.createElement('div')
      const textNode = document.createTextNode(letter)
      cell.classList.add('filled-cell')
      cell.classList.add('current-cell')
      celldiv.classList.add('text-style')
      celldiv.appendChild(textNode)
      cell.appendChild(celldiv)
    }
  })
}

function hasFiveLetters () {
  for (let i = 0; i < 6; i++) {
    return textArray[i].every(index => index.hasChildNodes())
  }
}

function checkLetter () {
  if (text[0] == word[1]) {
    text[0].style.backgroundColor = 'yellow'
  }
}

function checkWord1 () {
  console.log(word[0])
  console.log(text[0].textContent)
  for (let i = 0; i < 5; i++) {
    switch (text[i].textContent) {
      case word[i]:
        text[i].style.backgroundColor = 'green'
        break
    }
  }
}

function checkWord2 () {
  for (let i = 0; i < 5; i++) {
    const x = i + 5
    switch (text[x].textContent) {
      case word[i]:
        text[x].style.backgroundColor = 'green'
        break
    }
  }
}

function checkWord3 () {
  for (let i = 0; i < 5; i++) {
    const x = i + 10
    switch (text[x].textContent) {
      case word[i]:
        text[x].style.backgroundColor = 'green'
        break
    }
  }
}

function checkWord4 () {
  for (let i = 0; i < 5; i++) {
    const x = i + 15
    switch (text[x].textContent) {
      case word[i]:
        text[x].style.backgroundColor = 'green'
        break
    }
  }
}

function checkWord5 () {
  for (let i = 0; i < 5; i++) {
    const x = i + 20
    switch (text[x].textContent) {
      case word[i]:
        text[x].style.backgroundColor = 'green'
        break
    }
  }
}

function checkWord6 () {
  for (let i = 0; i < 5; i++) {
    const x = i + 25
    switch (text[x].textContent) {
      case word[i]:
        text[x].style.backgroundColor = 'green'
        break
    }
  }
}
