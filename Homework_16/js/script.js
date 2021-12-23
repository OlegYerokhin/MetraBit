// Задача 1

class Product {
  constructor(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller) {
    this.productId = productId
    this.ProductName = productName
    this.productPrice = productPrice
    this.productQuantity = productQuantity
    this.productBrand = productBrand
    this.productDiscount = productDiscount
    this.productSeller = productSeller
    this.changePrice = function(newPrice) {
      if(newPrice < 0) {
        return 'Price can\'t be negative'
      }
      this.productPrice = newPrice
      return 'Price has been changed'
    }
  }
  get productDiscountPrice() {
    return this.productPrice - this.productDiscount
  }

  set productDiscountPrice(productPrice) {
    this.productPrice = productPrice - this.productDiscount
  }
  
  static addNewMethod(methodName, func) {
    Product.prototype[methodName] = func
  }
  
}

// Задача 2

class User {
  constructor(name, surname, email, password, birthday) {
    this.name = name,
    this.surname = surname,
    this.email = email,
    this.password = password,
    this.birthday = birthday,
    this.changePassword = function(newPassword) {
      if(newPassword.length < 8) {
        return 'New password is too short'
      }
    
      if(!newPassword.match(/[A-Z]/g)) {
        return 'New password hasn\'t any uppercase letters'
      }
      this.password = newPassword
      return 'Your password has been changed'
    }

    this.changeEmail = function(newEmail) {
      if(!newEmail.match('@')) {
        return 'New email is wrong'
      }
      this.email = newEmail
      return 'Your email has been changed'
    }

    this.calculateAge = function() {
      if(!birthday) {
        return 'This user hasn\'t any information about birthday'
      }

      const userBirthday = new Date(this.birthday).getFullYear()
      return new Date().getFullYear() - userBirthday
    }
  }
}

// Задача 3

class Customer extends User {
  constructor(name, surname, email, password, birthday, cardNumber, wishList = [], cart = []) {
    super(name, surname, email, password, birthday)

    this.cardNumber = cardNumber,
    this.wishList = wishList,
    this.cart = cart

    this.addProductToWishList = function(product) {
      if(!product instanceof Product) {
        return 'This is not a product'
      }

      wishList.push(product)
      return 'This product has been added to the wish list'
    }

    this.addProductToCart = function(product) {
      if(!product instanceof Product) {
        return 'This is not a product'
      }
    
      cart.push(product)
      return 'This product has been added to the wish list'
    }
  }
}

// Задача 4

class Seller extends User {
  constructor(name, surname, email, password, birthday, shopName, phoneNumber, workingHours, productList = []) {
    super(name, surname, email, password, birthday)

    this.shopName = shopName
    this.phoneNumber = phoneNumber
    this.workingHours = workingHours
    this.productList = productList

    this.addProductToProductList = function(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller) {
      let newProduct = new Product(productId, productName, productPrice, productQuantity, productBrand, productDiscount, productSeller)
      productList.push(newProduct)
    }

    this.removeProductFromProductList = function(productId) {
      const ownProduct = this.productList.filter((item) => item.ProductId === productId)

      if(!ownProduct) {
        return 'There is no such product in the product list'
      }

      this.productList.splice(this.productList.indexOf(ownProduct), 1)
      return 'Product has been removed'
    }

    this.changeWorkingHours = function(hours) {
      if(!hours.length || hours === ' ') {
        return 'New value can’t be an empty string'
      }

      this.workingHours = hours
      return 'New working hours have been successfully set'
    }
  }
}