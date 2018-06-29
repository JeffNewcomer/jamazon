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
  }
}

// function 1 - create small cards
function createCard(item) {
  var $card = document.createElement('div')
  $card.classList.add('card')

  // add attribute to root element of the card
  var a = document.createAttribute('data-item-id')
  $card.setAttributeNode(a)
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

  // loop through allItems, create a div, render the card and pass it an item, append
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
function renderAppState() {
  if (app.view === 'catalog') {
    var i = createGridAndHeading(app.catalog.items)
    var $catalog = document.querySelector("div[data-view='catalog']")
    $catalog.appendChild(i)
  }
  // if (app.view === 'details') {
  //   var k = createGridAndHeading(app.details.item)  //item is null so it breaks?
  //   var $details = document.querySelector("div[data-view='details']")
  //   $details.appendChild(k)

  // addHiddenClass('details')
  // addHiddenClass('catalog')

}
renderAppState()

// creates full details card and renderds a DOM tree
function createFullDetailsCard(item) {
  var $largeCard = document.createElement('div')
  $largeCard.classList.add('card')

  var $largeImage = document.createElement('img')
  $largeCard.appendChild($largeImage)
  $largeImage.classList.add('card-img-top')
  $largeImage.setAttribute('src', item.imageUrl)
  $largeImage.classList.add('images')

  var $largeCardBody = document.createElement('div')
  $largeCard.appendChild($largeCardBody)
  $largeCardBody.classList.add('card-body')

  var $largeCardBrand = document.createElement('h5')
  $largeCardBody.appendChild($largeCardBrand)
  $largeCardBrand.classList.add('card-title')
  $largeCardBrand.textContent = item.brand

  var $largeCardName = document.createElement('h5')
  $largeCardBody.appendChild($largeCardName)
  $largeCardName.classList.add('card-title')
  $largeCardName.textContent = item.name

  var $largeCardPrice = document.createElement('h5')
  $largeCardBody.appendChild($largeCardPrice)
  $largeCardPrice.classList.add('card-title')
  $largeCardPrice.textContent = item.price

  var $largeCardDescription = document.createElement('h3')
  $largeCardBody.appendChild($largeCardDescription)
  $largeCardDescription.classList.add('card-text')
  $largeCardDescription.textContent = item.description

  var $largeCardDetails = document.createElement('p')
  $largeCardBody.appendChild($largeCardDetails)
  $largeCardDetails.classList.add('card-text')
  $largeCardDetails.textContent = item.details

  var $largeCardOrigin = document.createElement('h3')
  $largeCardBody.appendChild($largeCardOrigin)
  $largeCardOrigin.classList.add('card-text')
  $largeCardOrigin.textContent = item.origin

  var $largeCardItemId = document.createElement('p')
  $largeCardBody.appendChild($largeCardItemId)
  $largeCardItemId.classList.add('card-text')
  $largeCardItemId.textContent = item.itemId

  return $largeCard
}

// Define a function that takes an itemId and a list of catalog items and
// returns the item Object with the matching itemId.
function getItemObject(clickedCardItemId, catalogItems) {
  for (var i = 0; i < catalogItems.length; i++) {
    if (parseInt(clickedCardItemId, 10) === catalogItems[i].itemId) {
      return catalogItems[i]
    }
  }
}

// event listener - returns the object for the item that was clicked
var $catalog = document.querySelector("div[data-view='catalog']")
var $details = document.querySelector("div[data-view='details']")
$catalog.addEventListener('click', displayLargeCard)

function displayLargeCard() {
  var clickedCard = event.target.closest('.card')
  var clickedCardItemId = clickedCard.getAttribute('data-item-id')
  app.view = 'details'
  var itemObject = getItemObject(clickedCardItemId, app.catalog.items)
  app.details.item = itemObject
  console.log(itemObject)
  // renderAppState()
}

// Define a function that takes a view name ('catalog' or 'details'?) and adds a 'hidden' class to all
// data-view containers (see divs in html) that don't match that view.
function addHiddenClass(viewName) {
  if (viewName === 'catalog') {
    // add hidden class to details app view (div)
    $details.classList.add('hidden')
    $catalog.classList.remove('hidden')
  }
  if (viewName === 'details') {
    // add hidden class to catalog app view (div)
    $catalog.classList.add('hidden')
    $details.classList.remove('hidden')
  }
}
// addHiddenClass('details')
// addHiddenClass('catalog')
// do I need to also need to remove 'hidden' from other container(s) when running this function a 2nd time?

// Define a function that takes a view name ('catalog' or 'details'?) and adds a 'hidden' class to all
// data-view containers (see divs in html) that don't match that view.
// function addHiddenClass(viewName) {
//  for (var i = 0; i < app.catalog.items.length; i++) {
// for (var i = 0; i < app.view.length; i++) {
// if (app.view === 'catalog') {
// if (viewName === 'catalog') {
// add hidden class to details app view (div)
// $details.classList.add('hidden')
// }
//  if (app.view === 'details') {
//  if (viewName === 'details') {
// add hidden class to catalog app view (div)
//  $catalog.classList.add('hidden')
// }
// }
// }
// addHiddenClass('details')
