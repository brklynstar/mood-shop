import data from './data.js'
const itemsContainer = document.querySelector('#items')

for (let i = 0; i < data.length; i += 1) {
    const newDiv = document.createElement("div");
    newDiv.className ="Item"
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
    // Function to Add Item

    const cart = []
 
    function addItem(name, price) {
        for (let i =0; i < cart.length; i += 1){
            if (cart[i].name === name) {
                cart[i].qty +=1
                return
            }
        }
        
        const item = { name, price, qty: 1}
        cart.push(item)
    }

  
    // Function to Show Items

        function showItems() {
        const qty =getQty()
        console.log(`You have ${getQty} items in your cart`)

        for (let i = 0; i < cart.length; i += 1) {  
        console.log (`${cart[i].name} $${cart[i].price} x ${cart[i].qty}`) 
        }

        console.log(`Total in cart: $${getTotal()}`)
    }

        // Function to Get Qty
        function getQty() {
            let qty = 0
            for (let i = 0; i < cart.length; i += 1) { 
            qty += cart[i].qty
            }
            return qty
    }
    
        // Function to Get Total
        function getTotal() {
            let total = 0
        for (let i = 0; i < cart.length; i += 1) {
            total += cart[i].price * cart[i].qty
        }
            return total.toFixed(2)
    }
    

    addItem("Happiness", 5.99)
    addItem("Sadness", 5.99)
    addItem("Anger", 5.99)
    addItem("Calmness", 5.99)
    addItem("Curiousness", 5.99)
    addItem("Disgust", 5.99)
    addItem("Energy", 5.99)
    addItem("Depression", 5.99)
    addItem("Fearfulness", 5.99)
    addItem("Shyness", 5.99)
    addItem("Sleep", 5.99)
    addItem("Surprise", 5.99)
    addItem("Surprise", 5.99)
    


    showItems()