function addToCart(event, productId) {
    event.preventDefault();
    
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    if (cartData.length < 1) {
        localStorage.setItem('cartData', `[${productId}]`);
    } else {
        cartData.push(productId);
        localStorage.setItem('cartData', JSON.stringify(cartData));
    }
}

function removeItemFromCart(event, productId) {
    event.preventDefault()

    const cartData = JSON.parse(localStorage.getItem('cartData')) || []
    const updatedCartData = cartData.filter(item => item !== productId)
    localStorage.setItem('cartData', JSON.stringify(updatedCartData))
    location.reload()
}

function buyItems() {
    localStorage.removeItem('cartData')
    document.getElementById('cartContent').innerHTML = `
        <div class="flex flex-col gap-4">
            <h1 class="text-3xl">Kiitos Ostoksista</h1>
            <a href="../../index.html" class="w-full bg-green-600 rounded-sm py-1 text-xl text-center">Jatka ostoksia</a>
        </div>
    `
}
