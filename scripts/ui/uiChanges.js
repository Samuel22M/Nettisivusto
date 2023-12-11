function changeCartImageOnHover() {
    const url = location.href;
    const pages = url.includes('pages');

    const cartLink = document.getElementById('cartLink');
    const cartIcon = document.getElementById('cartIcon');

    let darkIcon = 'media/images/header/cart-dark.webp';
    let lightIcon = 'media/images/header/cart-light.webp';
    if (pages) {
        darkIcon = '../../media/images/header/cart-dark.webp';
        lightIcon = '../../media/images/header/cart-light.webp';
    }

    cartLink.onmouseenter = () => {
        cartIcon.src = darkIcon;
    };
    cartLink.onmouseleave = () => {
        cartIcon.src = lightIcon;
    };
}

function showCartItemAmount() {
    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const cartLength = cartData.length;

    if (cartLength > 0) {
        document.getElementById('cartItems').innerHTML = `
        <div 
            class="absolute bg-orange-500 w-[20px] h-[20px] rounded-full left-[80%] top-[-10px] flex items-center justify-center text-xs font-semibold text-white"
        >
            ${cartLength}
        </div>`;
    }
}

changeCartImageOnHover();
