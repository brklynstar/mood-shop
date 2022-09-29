import data from './data.js'

// -----------------------------------------------------------------------------------

const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
  const newDiv = document.createElement("div");
  newDiv.className = "Item"
  const img = document.createElement('img');

  img.src = data[i].image
  img.width = 300
  img.height = 300

  newDiv.appendChild(img)
  itemsContainer.appendChild(newDiv)
  const desc = document.createElement('P')
  desc.innerText = data[i].desc
  newDiv.appendChild(desc)

  const price = document.createElement('P')
  price.innerText = data[i].price
  newDiv.appendChild(price)

  const button = document.createElement("Button")
  button.id = data[i].name

  button.dataset.price = data[i].price
  button.innerHTML = "Add to Cart"
  newDiv.appendChild(button)
}


// -----------------------------------------------------------------------------------

//  Shopping Cart

const itemList = document.getElementById("item-list")
const cartQty = document.getElementById("cart-qty")
const cartTotal = document.getElementById("cart-total")
const cart = []
// -----------------------------------------------------------------------------------
// HAndle Change Events on Update input

itemList.onchange = function(e) {
  if (e.target && e.target.classList.contains("Update")) {
    const name = e.target.dataset.name
    const qty = parseInt(e.target.value)
    updateCart(name, qty)


  }
}
// -----------------------------------------------------------------------------------
//  Handle Clicks on Lists

itemList.onclick = function(e) {
  if (e.target && e.target.classList.contains("remove")) {
    const name = e.target.dataset.name
    removeItem(name)
  } else if (e.target && e.target.classList.contains("add-one")) {
    const name = e.target.dataset.name
    addItem(name)
  } else if (e.target && e.target.classList.contains("remove-one")) {
    const name = e.target.dataset.name
    removeItem(name, 1)
  }
}



// -----------------------------------------------------------------------------------
// Function to Add Item

function addItem(name, price) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty += 1
      return
    }
  }

  const item = {
    name,
    price,
    qty: 1
  }
  cart.push(item)
}

// -----------------------------------------------------------------------------------
// Function to Show Items

function showItems() {
  const qty = getQty()
  //   console.log(`You have ${qty} items in your cart`)
  cartQty.innerHTML = `You have ${qty} items in your cart`

  let itemStr = " "
  for (let i = 0; i < cart.length; i += 1) {

    // console.log(`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)

    const {
      name,
      price,
      qty
    } = cart[i]

    itemStr += `<li>
    ${name} $${price} x ${qty} = ${qty * price}
    <button class="remove" data-name"${name}">Remove </button>
    <button class="remove" data-name"${name}"> + </button>
    <button class="add-one" data-name"${name}"> - </button>
    <input class ="update" type="number" data-name ="${name}">
    </li>`


  }

  itemList.innerHTML = itemStr

  //   console.log(`Total in cart: $${getTotal()}`)
  cartTotal.innerHTML = `Total in cart: $${getTotal()}`

}



// -----------------------------------------------------------------------------------
// Function to Get Qty

function getQty() {
  let qty = 0
  for (let i = 0; i < cart.length; i += 1) {
    qty += cart[i].qty
  }
  return qty
}

// -----------------------------------------------------------------------------------
// Function to Get Total

function getTotal() {
  let total = 0
  for (let i = 0; i < cart.length; i += 1) {
    total += cart[i].price * cart[i].qty
  }
  return total.toFixed(2)
}

// -----------------------------------------------------------------------------------
// Function to Remove Item

function removeItem(name, qty = 0) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      if (qty > 0) {
        cart[i].qty -= qty
      }
      if (cart[i].qty < 1 || qty === 0) {
        cart.splice(i, 1)
      }
      showItems()
      return
    }
  }
}

// -----------------------------------------------------------------------------------
function updateCart(name, qty) {
  for (let i = 0; i < cart.length; i += 1) {
    if (cart[i].name === name) {
      cart[i].qty = qty
      showItems()
      return
    }
  }
}

// -----------------------------------------------------------------------------------

const all_items_button = Array.from(document.querySelectorAll("button"));
all_items_button.forEach(elt => elt.addEventListener('click', () => {
  addItem(elt.getAttribute('id'), elt.getAttribute('data-price'))
  showItems()
}))
// -----------------------------------------------------------------------------------
// Test Code

// addItem("Happiness", 5.99)
// addItem("Sadness", 5.99)
// addItem("Anger", 5.99)
// addItem("Calmness", 5.99)
// addItem("Curiousness", 5.99)
// addItem("Disgust", 5.99)
// addItem("Energy", 5.99)
// addItem("Depression", 5.99)
// addItem("Fearfulness", 5.99)
// addItem("Shyness", 5.99)
// addItem("Sleep", 5.99)
// addItem("Surprise", 5.99)
// addItem("Surprise", 5.99)

// showItems()
// console.log(itemList)
