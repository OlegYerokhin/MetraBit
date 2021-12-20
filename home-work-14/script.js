let body = document.querySelector('body')
let error = document.createElement('div')
error.className = 'error-message'
body.appendChild(error)

function createMessage(text, color) {
  if (error.hidden === true) error.hidden = false
  if(error) {
    error.innerHTML = ''
    error.innerHTML = text
    error.className = color
  }
}

// TABS

const tabs = document.getElementById('tab-list')
const tabBtn = tabs.querySelectorAll('.tab-btn')
const tabContent = tabs.querySelectorAll('.inner-content')

for(let i = 0; i < tabBtn.length; i++) {
  let tab = tabBtn[i]
  
  tab.onclick = function(event) {
    for(let i = 0; i < tabBtn.length; i++) {
      let tabButton = tabBtn[i]
        
      tabButton.classList.remove('active-tab')
      tabContent[i].classList.remove('active')
    }
    this.classList.add('active-tab')
    tabContent[i].classList.add('active')
  }
}

// REQUESTS

let response = []

async function getExistingUser() {
  let fetchedResponse
  fetchedResponse = await(await fetch('http://localhost:3000/users')).json()
  for(let i = 0; i < fetchedResponse.length; i++) {
    response.push(fetchedResponse[i])
  }
}

let postResponse

async function postNewUser() {
  postResponse = await (await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      login: `${newLogin.value.toLowerCase()}`,
      password: `${newPassword.value}`
    })
  })).json()
}

// SIGN IN

const signIn = document.getElementById('sign-in-btn')
const registeredLogin = document.getElementById('existing-login')
const registeredPassword = document.getElementById('existing-password')

signIn.onclick = () => {
  function logUserIn() {
    for(let i = 0; i < response.length; i++) {
      if(response[i].login !== registeredLogin.value.toLowerCase()) {
        createMessage('Not existing login!', 'red')
      }

      if(response[i].login === registeredLogin.value.toLowerCase() 
        && response[i].password !== registeredPassword.value) {
        createMessage('Wrong password. Try again!', 'red')
      }

      if(response[i].login === registeredLogin.value.toLowerCase()
          && response[i].password === registeredPassword.value) {
          tabs.hidden = 'hidden'
          createMessage(`Congratulations! You have successfully logged in as user ${registeredLogin.value}`, 'green')
      }
    }
  }
  getExistingUser()
  logUserIn()
}
getExistingUser()

// SIGN UP

const signUp = document.getElementById('sign-up-btn')
const newLogin = document.getElementById('new-login')
const newPassword = document.getElementById('new-password')
const repeatedPassword = document.getElementById('repeated-password')

signUp.onclick = () => {
  let valid

  function validate(newLogin) {
    if(newLogin.value) {
      valid = 'true'
    }
  }
  validate(newLogin)

  if(valid === 'true') {
    function toRegisterNewAccount() {
      let isRegisteredBefore = false
      if(error.hidden === true) {
        error.hidden = false
      }
      for(let i = 0; i < response.length; i++) {
        if(response[i].login.toLowerCase() === newLogin.value.toLowerCase()) {
          createMessage('User with this login exists', 'red')
          isRegisteredBefore = true
        }
      }

      if(!newPassword.value) {
        createMessage('Please enter your password', 'red')
      }

      if(newPassword.value && !repeatedPassword.value) {
        createMessage('Please enter your password again', 'red')
      }

      if(newPassword.value 
        && repeatedPassword.value 
        && newPassword.value !== repeatedPassword.value) {
        createMessage('You entered different passwords. Please edit them and try again', 'red')
      }
      if(!isRegisteredBefore) {
        if(newLogin.value 
          && newPassword.value 
          && repeatedPassword.value 
          && newPassword.value === repeatedPassword.value) {
        
          createMessage('You have successfully registered!', 'green')
          postNewUser()
        }
      }
    }
    toRegisterNewAccount()
  }
  if(valid !== 'true') {
    createMessage('Enter your login please', 'red')
  }
}