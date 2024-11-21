const rootSign = document.getElementById('math')
const container = document.getElementById('con')
const input = document.getElementById('num')
let div

input.focus()

window.addEventListener('keydown', e => {
  if (e.key == ' ') {
    div.remove()
    input.value = ''
  }
  if (e.key != 'Enter') return
  const num = Math.round(Math.sqrt(input.value))
  div = document.createElement('div')
  const textNode = document.createTextNode('= ' + num)
  div.classList.add('equal')
  div.appendChild(textNode)
  container.appendChild(div)
})
