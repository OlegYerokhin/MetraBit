// Tabs

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

// Price & quantity

const decrementBtn = document.getElementById('decrement')
const incrementBtn = document.getElementById('increment')
const quantity = document.getElementById('quantity')
let quantityValue = quantity.value 
const productPrice = document.getElementById('price')
const productPriceValue = productPrice.textContent
const totalPrice = document.getElementById('final-price')

const infoQuantity = document.getElementById('product-quantity')
const infoTotalPrice = document.getElementById('amount')

incrementBtn.onclick = function(event) {
  incrementBtn ? quantityValue++ : quantityValue
  quantity.value = quantityValue
  quantity.value = quantityValue < 1 ? 1 : quantityValue
  let finalPrice = productPrice.textContent * quantityValue
  finalPrice = finalPrice < productPriceValue ? productPriceValue : finalPrice 
  totalPrice.textContent = `${finalPrice}`

  infoQuantity.textContent = `${quantity.value}`
  infoTotalPrice.textContent = `${finalPrice}`
}

decrementBtn.onclick = function(event) {
  decrementBtn ? quantityValue-- : quantityValue
  quantity.value = quantityValue
  quantity.value = quantityValue < 1 ? 1 : quantityValue
  let finalPrice = productPrice.textContent * quantityValue
  finalPrice = finalPrice < productPriceValue ? productPriceValue : finalPrice 
  totalPrice.textContent = `${finalPrice}`
  infoQuantity.textContent = `${quantity.value}`
  infoTotalPrice.textContent = `${finalPrice}`
}

// Contact

const contactsInput = document.getElementsByClassName('form-input')

for(let i = 0; i < contactsInput.length; i++) {
  let contactInput = contactsInput[i]

  contactInput.onchange = function(event) {
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value 
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let address = document.getElementById('address').value

    if(name === undefined || name === '' || name === ' ') {
      name = 'Введите имя!'
    }

    if(surname === undefined || surname === '' || surname === ' ') {
      surname = 'Введите фамилию!'
    }

    if(email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      email = 'Введите корректный e-mail!'
    }

    if(isNaN(+phone)) {
      phone = 'Введите корректный номер телефона!'
    }

    if(address === undefined || address === '' || address === ' ') {
      address = 'Введите фамилию!'
    }

    let infoName = document.getElementById('info-name')
    infoName.textContent = `${name}`

    let infoSurname = document.getElementById('info-surname')
    infoSurname.textContent = `${surname}`

    let infoEmail = document.getElementById('info-email')
    infoEmail.textContent = `${email}`

    let infoPhone = document.getElementById('info-phone')
    infoPhone.textContent = `${phone}`

    let infoAddress = document.getElementById('info-address')
    infoAddress.textContent = `${address}`
  }
}
