const btn = document.querySelector('#button')
const dic = []
btn.addEventListener('click', () => {
  const wordTag = document.querySelector('#word')
  const word = wordTag.textContent
  const inputTag = document.querySelector('#input')
  const input = inputTag.value
  const errorTag = document.querySelector('#error')
  const error = errorTag.textContent
  if (input) {
    if (dic.includes(input)) {
      errorTag.textContent = '중복입니다'
      inputTag.value = ''
      inputTag.focus
    } else {
      if (word[word.length - 1] === input[0]) {
        wordTag.textContent = input
        errorTag.textContent = ''
        inputTag.focus
        dic.push(input)
      } else {
        errorTag.textContent = '땡'
        inputTag.value = ''
        inputTag.focus
      }
    }
  } else {
    errorTag.textContent = ('값을 입력하시오')
    inputTag.focus
  }
})