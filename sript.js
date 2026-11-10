const name = document.querySelector('#username')
const pswrd = document.querySelector('#password')
const msg = document.querySelector('#errorMsg')
const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let user = name.value
    let parol = pswrd.value

    if (user === 'sarik' && parol === '1234') {
        msg.innerHTML = `Xush kelibsiz ${user}!`
    } else {
        msg.innerHTML = 'Notogri parol yoki username kiritildi!'
    }
})
