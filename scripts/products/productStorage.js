const products = [
    {
        id: 1,
        name: 'Asus Geforce RTX 4070 DUAL - OC Edition -näytönohjain, 12GB GDDR6X',
        price: 699.90,
        image: 'https://ic.jimms.fi/product/3/2/438137-ig800gg.jpg',
        tags: ['GPU', 'Gaming', 'Components'],
    },
    {
        id: 2,
        name: 'PowerColor Radeon RX 7800 XT Hellhound -näytönohjain, 16GB GDDR6',
        price: 599.90,
        image: 'https://ic.jimms.fi/product/1/2/457717-ig800gg.jpg',
        tags: ['GPU', 'Gaming', 'Components'],
    },
    {
        id: 3,
        name: 'AMD Ryzen 7 5800X3D, AM4, 3.4 GHz, 8-Core, Boxed',
        price: 359.90,
        image: 'https://ic.jimms.fi/product/1/8/380811-ig800gg.jpg',
        tags: ['CPU', 'Gaming', 'Components'],
    },
    {
        id: 4,
        name: 'Intel Core i9-14900K, LGA1700, 3.20 GHz, 36MB, Boxed',
        price: 679.90,
        image: 'https://ic.jimms.fi/product/5/0/466759-ig800gg.jpg',
        tags: ['CPU', 'Gaming', 'Components'],
    },
    {
        id: 5,
        name: 'Kingston 32GB (2 x 16GB) Fury Beast DDR5, 6000MHz, CL36, 1,35V, musta',
        price: 144.90,
        image: 'https://ic.jimms.fi/product/8/9/402880-ig800gg.jpg',
        tags: ['Memory', 'Gaming', 'Components'],
    },
    {
        id: 6,
        name: 'Corsair 32GB (2 x 16GB) Vengeance, DDR5 6000MHz, CL36, 1.40V, harmaa',
        price: 129.90,
        image: 'https://ic.jimms.fi/product/7/9/461570-ig800gg.jpg',
        tags: ['Memory', 'Gaming', 'Components'],
    },
    {
        id: 7,
        name: 'Asus 27" TUF Gaming VG27AQA1A, 170Hz (OC) WQHD-pelimonitori',
        price: 199.90,
        image: 'https://ic.jimms.fi/product/8/3/466886-ig800gg.jpg',
        tags: ['Gaming', 'Peripherals'],
    },
    {
        id: 8,
        name: 'Sony Playstation 5 Digital + God of War: Ragnarök (K-18!)',
        price: 539.90,
        image: 'https://ic.jimms.fi/product/9/8/433591-ig800gg.jpg',
        tags: ['Gaming'],
    },
    {
        id: 9,
        name: 'MSI 15,6" Cyborg 15 A12VF-414NEU, kannettava pelitietokone, musta',
        price: 1099.00,
        image: 'https://ic.jimms.fi/product/9/6/467593-ig800gg.jpg',
        tags: ['Computers', 'Gaming'],
    },
    {
        id: 10,
        name: 'Logitech PRO X SUPERLIGHT Wireless, langaton pelihiiri, 25 000 dpi, musta',
        price: 78.90,
        image: 'https://ic.jimms.fi/product/8/4/315585-ig800gg.jpg',
        tags: ['Gaming', 'Peripherals'],
    },
    {
        id: 11,
        name: 'Cooler Master CK530 V2, mekaaninen pelinäppäimistö, Red Switch, Gunmetal Black',
        price: 39.90,
        image: 'https://ic.jimms.fi/product/9/6/318093-ig800gg.jpg',
        tags: ['Gaming', 'Peripherals'],
    },
];

function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}
saveProducts();
