/* eslint-disable no-unused-vars */

var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://goo.gl/Q7X6VB'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: {
    items: []
  },
  checkout: {
    items: null
  }
}

function createCard(item) {
  var $card = document.createElement('div')
  $card.classList.add('card')

  $card.setAttribute('data-item-id', item.itemId)

  var $image = document.createElement('img')
  $card.appendChild($image)
  $image.classList.add('card-img-top')
  $image.setAttribute('src', item.imageUrl)
  $image.classList.add('images')

  var $cardBody = document.createElement('div')
  $card.appendChild($cardBody)
  $cardBody.classList.add('card-body')

  var $brand = document.createElement('h5')
  $cardBody.appendChild($brand)
  $brand.classList.add('card-title')
  $brand.textContent = item.brand

  var $name = document.createElement('h5')
  $cardBody.appendChild($name)
  $name.classList.add('card-title')
  $name.textContent = item.name

  var $price = document.createElement('h5')
  $cardBody.appendChild($price)
  $price.classList.add('card-title')
  $price.textContent = item.price

  return $card
}

function createGridAndHeading(allItems) {
  var $grid = document.createElement('div')
  $grid.classList.add('container')

  var $header = document.createElement('h1')
  $grid.appendChild($header)
  $header.textContent = 'Jamazon'
  $header.classList.add('header-text')

  var $row1 = document.createElement('div')
  $row1.classList.add('row')
  $grid.appendChild($row1)

  for (var i = 0; i < allItems.length; i++) {
    var $cardDiv = document.createElement('div')
    $cardDiv.classList.add('col-md-3')
    $row1.appendChild($cardDiv)
    var $newCard = createCard(allItems[i])
    $cardDiv.appendChild($newCard)
  }
  return $grid
}

var $catalog = document.querySelector("div[data-view='catalog']")
var $details = document.querySelector("div[data-view='details']")
var $cart = document.querySelector("div[data-view='cart']")
var $checkout = document.querySelector("div[data-view='checkout']")
var $cartCounterContainer = document.querySelector('.cart-count-container')

function renderAppState() {
  if (app.view === 'catalog') {
    $catalog.innerHTML = ''
    $cart.innerHTML = ''
    var i = createGridAndHeading(app.catalog.items)
    $catalog.appendChild(i)
    addHiddenClass('details')
  }
  if (app.view === 'details') {
    $details.innerHTML = ''
    var k = createFullDetailsCard(app.details.item)
    $details.appendChild(k)
    addHiddenClass('catalog')
  }
  if (app.view === 'cart') {
    $cart.innerHTML = ''
    $catalog.innerHTML = ''
    $details.innerHTML = ''
    $checkout.innerHTML = ''
    var j = renderCartPage(app.cart.items)
    $cart.appendChild(j)
  }
  if (app.view === 'checkout') {
    $cart.innerHTML = ''
    var n = createCheckOutFormPage(app.cart.items)
    $checkout.appendChild(n)
  }

  $cartCounterContainer.innerHTML = ''
  var $cartCount = cartCount(app.cart)
  $cartCounterContainer.appendChild($cartCount)
}
renderAppState()

function createFullDetailsCard(item) {
  var $largeCard = document.createElement('div')
  $largeCard.classList.add('container')

  var $largeCardImageContainer = document.createElement('div')
  $largeCardImageContainer.classList.add('large-card-image-container')
  $largeCard.appendChild($largeCardImageContainer)

  var $largeImage = document.createElement('img')
  $largeCardImageContainer.appendChild($largeImage)
  $largeImage.setAttribute('src', item.imageUrl)
  $largeImage.classList.add('large-card-image')

  var $largeCardBody = document.createElement('div')
  $largeCard.appendChild($largeCardBody)
  $largeCardBody.classList.add('lrg-card-div')

  var $largeCardTextContainer = document.createElement('div')
  $largeCardBody.appendChild($largeCardTextContainer)
  $largeCardTextContainer.classList.add('lrg-card-text-container')

  var $largeCardBrand = document.createElement('h5')
  $largeCardTextContainer.appendChild($largeCardBrand)
  $largeCardBrand.classList.add('card-title')
  $largeCardBrand.textContent = item.brand

  var $largeCardName = document.createElement('h5')
  $largeCardTextContainer.appendChild($largeCardName)
  $largeCardName.classList.add('card-title')
  $largeCardName.textContent = item.name

  var $largeCardPrice = document.createElement('h5')
  $largeCardTextContainer.appendChild($largeCardPrice)
  $largeCardPrice.classList.add('card-title')
  $largeCardPrice.textContent = item.price

  var $largeCardDescription = document.createElement('h3')
  $largeCardTextContainer.appendChild($largeCardDescription)
  $largeCardDescription.classList.add('card-text')
  $largeCardDescription.textContent = item.description

  var $largeCardDetails = document.createElement('p')
  $largeCardTextContainer.appendChild($largeCardDetails)
  $largeCardDetails.classList.add('card-text')
  $largeCardDetails.textContent = item.details

  var $largeCardOrigin = document.createElement('h3')
  $largeCardTextContainer.appendChild($largeCardOrigin)
  $largeCardOrigin.classList.add('card-text')
  $largeCardOrigin.textContent = item.origin

  var $largeCardItemId = document.createElement('p')
  $largeCardTextContainer.appendChild($largeCardItemId)
  $largeCardItemId.classList.add('card-text')
  $largeCardItemId.textContent = item.itemId

  var $buttonContainer = document.createElement('div')
  $largeCardTextContainer.appendChild($buttonContainer)

  var $addToCartButton = document.createElement('a')
  $buttonContainer.appendChild($addToCartButton)
  $addToCartButton.classList.add('btn', 'btn-primary')
  $addToCartButton.textContent = 'Add to Cart'

  $addToCartButton.addEventListener('click', renderCart)
  function renderCart() {
    app.cart.items.push(app.details.item)
    renderAppState()
  }

  var $keepShoppingButton = document.createElement('a')
  $buttonContainer.appendChild($keepShoppingButton)
  $keepShoppingButton.classList.add('btn', 'btn-primary')
  $keepShoppingButton.textContent = 'Keep Shopping'

  $keepShoppingButton.addEventListener('click', returnToCatalog)

  function returnToCatalog() {
    app.view = 'catalog'
    renderAppState()
  }
  return $largeCard
}

function getItemObject(clickedCardItemId, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    if (parseInt(clickedCardItemId, 10) === catalogItems[i].itemId) {
      return catalogItems[i]
    }
  }
}

$catalog.addEventListener('click', displayLargeCard)

function displayLargeCard() {
  var clickedCard = event.target.closest('.card')
  var clickedCardItemId = clickedCard.getAttribute('data-item-id')
  app.view = 'details'
  var itemObject = getItemObject(clickedCardItemId, app.catalog.items)
  app.details.item = itemObject
  renderAppState()
}

function addHiddenClass(viewName) {
  if (viewName === 'details') {
    $catalog.classList.remove('hidden')
    $details.classList.add('hidden')
    $cart.classList.remove('hidden')
    $checkout.classList.remove('hidden')
  }
  if (viewName === 'catalog') {
    $catalog.classList.add('hidden')
    $details.classList.remove('hidden')
    $cart.classList.remove('hidden')
    $checkout.classList.remove('hidden')
  }
  if (viewName === 'cart') {
    $catalog.classList.remove('hidden')
    $details.classList.remove('hidden')
    $cart.classList.add('hidden')
    $checkout.classList.remove('hidden')
  }
  if (viewName === 'checkout') {
    $catalog.classList.remove('hidden')
    $details.classList.remove('hidden')
    $cart.classList.remove('hidden')
    $checkout.classList.add('hidden')
  }
}

function cartCount(cart) {
  var $cartCount = document.createElement('div')
  $cartCount.classList.add('cart-count')
  $cartCount.textContent = 'Cart (' + cart.items.length + ')'
  return $cartCount
}

var $cartCounter = document.querySelector('.cart-count-container')
$cartCounter.addEventListener('click', openTheCart)

function openTheCart() {
  app.view = 'cart'
  renderAppState()
}

function createCartItem(item) {
  var $cartListContainer = document.createElement('div')
  $cartListContainer.classList.add('container')

  var $cartItemsContainer = document.createElement('div')
  $cartItemsContainer.classList.add('container', 'cart-items-container')
  $cartListContainer.appendChild($cartItemsContainer)

  var $cartItemDiv = document.createElement('div')
  $cartItemDiv.classList.add('container')
  $cartItemsContainer.appendChild($cartItemDiv)

  var $cartImageContainer = document.createElement('div')
  $cartImageContainer.classList.add('.large-card-image-container')
  $cartItemDiv.appendChild($cartImageContainer)

  var $cartImage = document.createElement('img')
  $cartImageContainer.appendChild($cartImage)
  $cartImage.setAttribute('src', item.imageUrl)
  $cartImage.classList.add('cart-image')

  var $cartTextImageContainer = document.createElement('div')
  $cartItemDiv.appendChild($cartTextImageContainer)
  $cartTextImageContainer.classList.add('cart-text-image-container')

  var $cartItemName = document.createElement('h5')
  $cartTextImageContainer.appendChild($cartItemName)
  $cartItemName.textContent = item.name

  var $cartItemBrand = document.createElement('h5')
  $cartTextImageContainer.appendChild($cartItemBrand)
  $cartItemBrand.textContent = item.brand

  var $cartItemPrice = document.createElement('h5')
  $cartTextImageContainer.appendChild($cartItemPrice)
  $cartItemPrice.textContent = item.price

  return $cartListContainer
}

var cartObjects = app.cart.items

function renderCartPage(cartObjects) {
  var $cartHeader = document.createElement('h1')
  var $cartListContainer = document.createElement('div')
  $cartHeader.textContent = 'Cart'
  $cartHeader.classList.add('header-text')
  $cartListContainer.appendChild($cartHeader)

  for (var k = 0; k < cartObjects.length; k++) {
    $cartListContainer.appendChild(createCartItem(cartObjects[k]))
  }

  var $cartTotalContainer = document.createElement('div')
  $cartTotalContainer.classList.add('container', 'cart-total-container')
  $cartListContainer.appendChild($cartTotalContainer)

  var sum = 0
  for (var i = 0; i < cartObjects.length; i++) {
    sum += cartObjects[i].price
  }

  var $priceTotal = document.createElement('h4')
  $priceTotal.textContent = 'Total: $' + sum
  $cartTotalContainer.appendChild($priceTotal)

  var $itemTotal = document.createElement('h4')
  $itemTotal.textContent = cartObjects.length + ' Item(s)'
  $cartTotalContainer.appendChild($itemTotal)

  var $cartContinueShoppingContainer = document.createElement('div')
  $cartContinueShoppingContainer.classList.add('container', 'cart-total-container')
  $cartListContainer.appendChild($cartContinueShoppingContainer)

  var $continueShoppingButton = document.createElement('a')
  $cartContinueShoppingContainer.appendChild($continueShoppingButton)
  $continueShoppingButton.classList.add('btn', 'btn-primary')
  $continueShoppingButton.textContent = 'Continue Shopping'

  $continueShoppingButton.addEventListener('click', returnToCatalog)

  function returnToCatalog() {
    app.view = 'catalog'
    renderAppState()
  }

  var $checkOutButton = document.createElement('a')
  $cartContinueShoppingContainer.appendChild($checkOutButton)
  $checkOutButton.classList.add('btn', 'btn-primary')
  $checkOutButton.textContent = 'Check Out'

  $checkOutButton.addEventListener('click', goToCheckOut)

  function goToCheckOut() {
    app.view = 'checkout'
    renderAppState()
  }

  return $cartListContainer
}

function createCheckOutFormPage(cartObjects) {
  var $checkOutPageContainer = document.createElement('div')
  $checkOutPageContainer.classList.add('container')

  var $checkOutHeader = document.createElement('h1')
  $checkOutHeader.textContent = 'Checkout'
  $checkOutHeader.classList.add('header-text')
  $checkOutPageContainer.appendChild($checkOutHeader)

  var $checkOutFormContainer = document.createElement('div')
  $checkOutFormContainer.classList.add('container')
  $checkOutPageContainer.appendChild($checkOutFormContainer)

  var $formNameDiv = document.createElement('div')
  $formNameDiv.classList.add('form-group', 'row')
  $checkOutFormContainer.appendChild($formNameDiv)

  var $formNameLabel = document.createElement('label')
  $formNameLabel.classList.add('col-2', 'col-form-label')
  $formNameLabel.setAttribute('for', 'example-text-input')
  $formNameLabel.textContent = 'Name'
  $formNameDiv.appendChild($formNameLabel)

  var $formNameInputDiv = document.createElement('div')
  $formNameInputDiv.classList.add('col-10')
  $formNameDiv.appendChild($formNameInputDiv)

  var $formNameInput = document.createElement('input')
  $formNameInput.classList.add('form-control')
  $formNameInput.setAttribute('type', 'text')
  $formNameInput.setAttribute('value', '')
  $formNameInput.setAttribute('id', 'example-text-input')
  $formNameInputDiv.appendChild($formNameInput)

  var $formAddressDiv = document.createElement('div')
  $formAddressDiv.classList.add('form-group', 'row')
  $checkOutFormContainer.appendChild($formAddressDiv)

  var $formAddressLabel = document.createElement('label')
  $formAddressLabel.classList.add('col-2', 'col-form-label')
  $formAddressLabel.setAttribute('for', 'example-text-input')
  $formAddressLabel.textContent = 'Address'
  $formAddressDiv.appendChild($formAddressLabel)

  var $formAddressInputDiv = document.createElement('div')
  $formAddressInputDiv.classList.add('col-10')
  $formAddressDiv.appendChild($formAddressInputDiv)

  var $formAddressInput = document.createElement('input')
  $formAddressInput.classList.add('form-control')
  $formAddressInput.setAttribute('type', 'text')
  $formAddressInput.setAttribute('value', '')
  $formAddressInput.setAttribute('id', 'example-text-input')
  $formAddressInputDiv.appendChild($formAddressInput)

  var $formCreditCardDiv = document.createElement('div')
  $formCreditCardDiv.classList.add('form-group', 'row')
  $checkOutFormContainer.appendChild($formCreditCardDiv)

  var $formCreditCardLabel = document.createElement('label')
  $formCreditCardLabel.classList.add('col-2', 'col-form-label')
  $formCreditCardLabel.setAttribute('for', 'example-number-input')
  $formCreditCardLabel.textContent = 'Credit Card Number'
  $formCreditCardDiv.appendChild($formCreditCardLabel)

  var $formCreditCardInputDiv = document.createElement('div')
  $formCreditCardInputDiv.classList.add('col-10')
  $formCreditCardDiv.appendChild($formCreditCardInputDiv)

  var $formCreditCardInput = document.createElement('input')
  $formCreditCardInput.classList.add('form-control')
  $formCreditCardInput.setAttribute('type', 'number')
  $formCreditCardInput.setAttribute('value', '')
  $formCreditCardInput.setAttribute('id', 'example-number-input')
  $formCreditCardInputDiv.appendChild($formCreditCardInput)

  var $checkoutTotalContainer = document.createElement('div')
  $checkoutTotalContainer.classList.add('container', 'cart-total-container')
  $checkOutFormContainer.appendChild($checkoutTotalContainer)

  var sum = 0
  for (var i = 0; i < cartObjects.length; i++) {
    sum += cartObjects[i].price
  }

  var $priceTotal = document.createElement('h4')
  $priceTotal.textContent = 'Total: $' + sum
  $checkoutTotalContainer.appendChild($priceTotal)

  var $itemTotal = document.createElement('h4')
  $itemTotal.textContent = cartObjects.length + ' Item(s)'
  $checkoutTotalContainer.appendChild($itemTotal)

  var $payButtonDiv = document.createElement('div')
  $checkoutTotalContainer.appendChild($payButtonDiv)

  var $payButton = document.createElement('a')
  $payButtonDiv.appendChild($payButton)
  $payButton.classList.add('btn', 'btn-primary', 'pay-button')
  $payButton.setAttribute('type', 'submit')
  $payButton.textContent = 'Pay'

  $payButton.addEventListener('click', showAlert)

  function showAlert() {
    var $payButtonDiv = document.createElement('div')
    $checkoutTotalContainer.appendChild($payButtonDiv)
    $payButtonDiv.classList.add('alert', 'alert-success')
    $payButtonDiv.setAttribute('role', 'alert')

    var $strongAlert = document.createElement('strong')
    $strongAlert.textContent = 'Thank you. Your order has been placed.'
    $payButtonDiv.appendChild($strongAlert)
  }
  return $checkOutPageContainer
}
