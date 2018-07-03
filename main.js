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
    item: []
  }
}

// function 1 - create small cards
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

// function 2 - create grids and  heading
function createGridAndHeading(allItems) {
  var $grid = document.createElement('div')
  $grid.classList.add('container')

  var $header = document.createElement('h1')
  $grid.appendChild($header)
  $header.textContent = 'Jamazon'
  $header.classList.add('jamazonText')

  var $row1 = document.createElement('div')
  $row1.classList.add('row')
  $grid.appendChild($row1)

  // loops through allItems, creates a div, render the card and pass it an item, append
  // the div to the grid. append the card into the div
  for (var i = 0; i < allItems.length; i++) {
    var $cardDiv = document.createElement('div')
    $cardDiv.classList.add('col-md-3')
    $row1.appendChild($cardDiv)
    var $newCard = createCard(allItems[i])
    $cardDiv.appendChild($newCard)
  }
  return $grid
}

// Function 3 - Define a function that renders the entire app state and inserts it into the view.
var $catalog = document.querySelector("div[data-view='catalog']")
var $details = document.querySelector("div[data-view='details']")
var $cartContainer = document.querySelector('.cart-container')

function renderAppState() {
  if (app.view === 'catalog') {
    var i = createGridAndHeading(app.catalog.items)
    $catalog.appendChild(i)
    addHiddenClass('details')
  }
  if (app.view === 'details') {
    var k = createFullDetailsCard(app.details.item)
    $details.appendChild(k)
    addHiddenClass('catalog')
  }
  $cartContainer.innerHTML = ''
  var $cart = cartCount(app.cart)
  $cartContainer.appendChild($cart)
}
renderAppState()

// function 4 - creates full details card and renderds a DOM tree
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
  // $buttonContainer.style.border = 'red solid 5px'

  var $addToCartButton = document.createElement('a')
  $buttonContainer.appendChild($addToCartButton)
  $addToCartButton.classList.add('btn', 'btn-primary')
  $addToCartButton.textContent = 'Add to Cart'

  // Add a 'click' event listener to the details view on the page.
  // Determine if the Add to Cart button was clicked and add the app.details.item to the app.cart.
  $addToCartButton.addEventListener('click', renderCart)
  function renderCart() {
    app.cart.item.push(app.details.item)
    app.view = 'cart'
    renderAppState()
  }

  var $keepShoppingButton = document.createElement('a')
  $buttonContainer.appendChild($keepShoppingButton)
  $keepShoppingButton.classList.add('btn', 'btn-primary')
  $keepShoppingButton.textContent = 'Keep Shopping'

  return $largeCard
}

// function 5 - Define a function that takes an itemId and a list of catalog items and
// returns the item Object with the matching itemId.
function getItemObject(clickedCardItemId, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    if (parseInt(clickedCardItemId, 10) === catalogItems[i].itemId) {
      return catalogItems[i]
    }
  }
}

// function 6 - event listener - returns the object for the item that was clicked
$catalog.addEventListener('click', displayLargeCard)

function displayLargeCard() {
  var clickedCard = event.target.closest('.card')
  var clickedCardItemId = clickedCard.getAttribute('data-item-id')
  app.view = 'details'
  var itemObject = getItemObject(clickedCardItemId, app.catalog.items)
  app.details.item = itemObject
  renderAppState()
}

// function 7 - Define a function that takes a view name ('catalog' or 'details')
// and adds a 'hidden' class to all data-view containers (see divs in html) that don't match that view.
function addHiddenClass(viewName) {
  if (viewName === 'details') {
    // adds hidden class to details app view (div)
    $details.classList.add('hidden')
    $catalog.classList.remove('hidden')
  }
  if (viewName === 'catalog') {
    // adds hidden class to catalog app view (div)
    $catalog.classList.add('hidden')
    $details.classList.remove('hidden')
  }
}

// function 8 - Define a function that takes a cart object and returns a
// DOM tree containing the count of items in the cart.
function cartCount(cart) {
  var $cartCount = document.createElement('div')
  $cartCount.textContent = 'Cart (' + cart.item.length + ')'
  return $cartCount
}
