let regEx1 = /\d/,
  regEx2 = /[a-z]/,
  regEx3 = /\W/,
  regEx4 = /[A-Z]/

document.querySelector('#password').addEventListener('keyup', function (event) {
  if (event.keyCode != 32 && event.keyCode != 20 && event.keyCode != 16) {
    let check = checkPassword(this.value)
    document.querySelector('.msg').innerText = message(check)
  }
})
function checkPassword(value) {
  let level = 0
  if (value.length > 5) {
    regEx1.test(value) ? ++level : ''
    regEx2.test(value) ? ++level : ''
    regEx3.test(value) ? ++level : ''
    regEx4.test(value) ? ++level : ''
  }

  return level
}
function message(index) {
  let message = [
    'Menor que 6 digitos',
    'Muito Fraca',
    'Fraca',
    'Média',
    'Alta',
    'Forte'
  ]
  return message[index]
}
