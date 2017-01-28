var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var userBio = document.getElementById('user-bio')
var email = document.getElementById('email')
var phone = document.getElementById('phone')

var preview = document.getElementById('preview')
var htmlPreview = document.getElementById('html-preview')

function update () {
  var message = '<h1>Hi, My name is ' +
    firstName.value + ' ' +
    lastName.value +
    '!</h1>' +
    '<p>' + userBio.value + '</p>' +
    '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' +
    email.value +
    '" target="_blank">' +
    email.value + '</a>' +
    ' or give me a call at ' +
    '<a href="tel:PHONE_NUMBER" target="_blank">' +
    phone.value + '</a>'
  preview.innerHTML = message
  htmlPreview.textContent = message
}

firstName.addEventListener('input', update)
lastName.addEventListener('input', update)
email.addEventListener('input', update)
phone.addEventListener('input', update)
userBio.addEventListener('input', update)
