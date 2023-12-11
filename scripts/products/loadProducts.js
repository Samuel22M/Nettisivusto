const url = location.href;
const productsPage = url.includes('tuotteet');
const cartPage = url.includes('ostoskori');
const productPage = url.includes('tuote');

const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
const productsExist = savedProducts.length > 0;

const frontPageProductCardTemplate = (productData) => {
    return `
        <a
            href="pages/tuote/index.html?id=${productData['id']}"
            class="bg-[#282c34] border-[1px] border-[#3c424a] hover:border-[#d3d3d3] flex flex-col w-[10rem] h-[20rem] lg:w-[17rem] lg:h-[30rem] md:w-[12rem] md:h-[25rem] rounded-lg overflow-hidden"
        >
            <div class="h-[60%]">
                <img
                    src="${productData['image']}"
                    alt="image_${productData['id']}"
                />
            </div>
            <div
                class="flex flex-col justify-between h-[50%]"
            >
                <div class="p-2 flex flex-col gap-2">
                    <h1 class="font-semibold md:font-semibold lg:text-lg md:text-base text-sm lmd:eading-6 leading-4">${
                        productData['name']
                    }</h1>
                    <p class="md:text-base text-xs">${productData[
                        'price'
                    ].toFixed(2)} €</p>
                </div>

                <button
                    class="lg:text-lg md:text-base text-sm bg-green-600 m-2 lg:p-2 p-1 active:scale-[98%] hover:brightness-90 rounded-sm"
                    onclick="addToCart(event, ${productData['id']})"
                >
                    Lisää Koriin
                </button>
            </div>
        </a>
    `;
};

const productsPageCardTemplate = (productData) => {
    return `
        <a
            href="../tuote/index.html?id=${productData['id']}"
            class="flex md:w-[40rem] md:h-[8rem] w-[21rem] h-[6rem] bg-[#282c34] border-[1px] border-[#3c424a] rounded-md overflow-hidden hover:border-[#d3d3d3]"
        >
            <img
                src="${productData['image']}"
                alt="image_${productData['id']}"
                class="h-full"
            />
            <div class="flex justify-between w-full p-2">
                <h1 class="md:text-lg text-xs max-w-[50%] md:leading-5 leading-4">${
                    productData['name']
                }</h1>

                <div class="flex flex-col justify-between">
                    <h1 class="md:text-lg text-sm font-semibold">${productData[
                        'price'
                    ].toFixed(2)} €</h1>
                    <button
                        class="bg-green-600 md:px-8 md:py-1 md:text-base px-2 text-sm active:scale-[98%] hover:brightness-90 rounded-sm"
                        onclick="addToCart(event, ${productData['id']})"
                    >
                        Lisää Koriin
                    </button>
                </div>
            </div>
        </a>
    `;
};

const cartProductTemplate = (productData) => {
    return `
        <a
            href="../tuote/index.html?id=${productData['id']}"
            class="flex bg-[#282c34] lg:w-[40rem] md:h-[8rem] md:w-[30rem] w-[21rem] h-[6rem] rounded-md border-[1px] border-[#3c424a] overflow-hidden hover:border-[#d3d3d3]"
        >
            <img
                src="${productData['image']}"
                alt="image_${productData['id']}"
            />

            <div
                class="flex flex-col justify-between w-full p-2"
            >
                <div class="flex justify-between">
                    <h1 class="lg:text-lg md:text-sm max-w-[80%] text-xs md:font-semibold md:leading-5 leading-4">${
                        productData['name']
                    }</h1>
                    <button
                        onclick="removeItemFromCart(event, ${
                            productData['id']
                        })"
                    >
                        <img
                            src="../../media/images/cart/cross.webp"
                            alt="cross"
                            class="w-[25px] md:w-[30px] h-full object-contain"
                        />
                    </button>
                </div>

                <div class="flex justify-between md:text-sm text-xs lg:text-base">
                    <h1>Määrä: ${productData['amount']}</h1>
                    <h1>${productData['price'].toFixed(2)} €</h1>
                </div>
                

                <div class="flex justify-between md:text-sm lg:text-base text-xs">
                    <div class="flex gap-1 items-center">
                        <div
                            class="md:w-[15px] md:h-[15px] w-[10px] h-[10px] bg-green-500 rounded-full"
                        ></div>
                        <p>Varastossa</p>
                    </div>
                    <p>
                        Lähetettävissä:
                        <span class="text-green-500">Heti</span>
                    </p>
                </div>
            </div>
        </a> 
    `;
};
const productPageTemplate = (productData) => {
    return `
        <div class="flex flex-col">
            <img 
                src="${productData['image']}"
                alt="image_${productData['id']}"
                class="w-full lg:h-[30rem] md:h-[20rem] rounded-xl"
            >
        </div>
        <div class="flex flex-col gap-10 lg:w-[30rem] md:w-[20rem]">
            <h1 class="text-2xl">${productData['name']}</h1>
            <p class="text-xl font-semibold">${productData['price'].toFixed(
                2
            )} €</p>
            <button
                class="text-xl lg:px-12 lg:w-[20rem] md:w-[15rem] py-1 bg-green-600 active:scale-[98%] hover:brightness-90 rounded-sm"
                onclick="addToCart(event, ${productData['id']})"
            >
                Lisää Koriin
            </button>
        </div>
    `;
};

function createTemplate(parentContainer, id, templateData) {
    const template = document.createElement('div');
    template.setAttribute('id', id);
    template.innerHTML = templateData;
    parentContainer.appendChild(template);
}

function loadProductsToFrontPage() {
    if (productsExist && !productsPage && !cartPage && !productPage) {
        const productContainer = document.getElementById('productContainer');

        const fiveRandomProducts = shuffleArray(savedProducts.slice(0, 6));
        for (const product in fiveRandomProducts) {
            const currentProduct = fiveRandomProducts[product];
            const templateId = `product_${currentProduct['id']}`;
            const templateData = frontPageProductCardTemplate(currentProduct);

            createTemplate(productContainer, templateId, templateData);
        }
    }
}

function loadProducts(search, type) {
    if (productsExist && productsPage && !cartPage && !productPage) {
        const productContainer = document.getElementById(
            'productsPageContainer'
        );

        let specificProducts = [];
        if (type === 'tags') {
            specificProducts = savedProducts.filter((product) =>
                product.tags.includes(search)
            );
        } else if (type === 'search') {
            specificProducts = savedProducts.filter((product) =>
                product.name.toLowerCase().includes(search)
            );
        }

        if (specificProducts.length > 0) {
            for (const product in specificProducts) {
                const currentProduct = specificProducts[product];
                const templateId = `product_${currentProduct['id']}`;
                const templateData = productsPageCardTemplate(currentProduct);
    
                createTemplate(productContainer, templateId, templateData);
            }
        } else {
            productContainer.innerHTML = '<p class="text-2xl">Ei löytynyt tuotteita<p>'
        }
    }
}

function loadCartProducts(cartData) {
    if (productsExist && !productsPage && cartPage && !productPage) {
        const productContainer = document.getElementById('cartProducts');
        let cumulativePrice = 0;

        const idCountMap = new Map();
        cartData.forEach((id) => {
            idCountMap.set(id, (idCountMap.get(id) || 0) + 1);
        });
        const cartProducts = savedProducts.filter((product) =>
            cartData.includes(product.id)
        );

        cartProducts.forEach((product) => {
            const amount = idCountMap.get(product.id) || 0;
            product.amount = amount;
        });

        for (const product in cartProducts) {
            const currentProduct = cartProducts[product];
            const templateid = `product_${currentProduct['id']}`;
            const templateData = cartProductTemplate(currentProduct);
            cumulativePrice +=
                currentProduct['price'] * currentProduct['amount'];

            createTemplate(productContainer, templateid, templateData);
        }
        document.getElementById(
            'cumulativePrice'
        ).innerHTML = `${cumulativePrice.toFixed(2)} €`;
    }
}

function loadProduct(id) {
    if (productsExist && !productsPage && !cartPage && productPage) {
        const productElement = document.getElementById('product');
        const product = savedProducts.find((item) => item.id === id);

        const productTemplate = productPageTemplate(product);
        productElement.innerHTML = productTemplate;
    }
}
