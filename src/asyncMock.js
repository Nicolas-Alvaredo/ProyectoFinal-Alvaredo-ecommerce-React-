const products = [
    {
        id: '1',
        text: 'A Custom Crash 18"',
        marca: 'Zildjian',
        categoria: 'crash',
        precio: 1100,
        img: '../src/assets/A Custom Crash 18.jpg',
        aleacion: 'Aleación de bronce B20',
        genero: 'Rock, Pop',
        stock: 5
    },
    {
        id: '2',
        text: 'AAX Crash 18"',
        marca: 'Sabian',
        categoria: 'crash',
        precio: 1000,
        img: '../src/assets/AAX Crash 18.jpg',
        aleacion: 'Aleación de bronce B20',
        genero: 'Metal, Rock',
        stock: 8
    },
    {
        id: '3',
        text: 'A Custom Hi Hat 14"',
        marca: 'Zildjian',
        categoria: 'hi-hat',
        precio: 2100,
        img: '../src/assets/A Custom Hihat 14.webp',
        aleacion: 'Aleación de bronce B20',
        genero: 'Jazz, Funk',
        stock: 3
    },
    {
        id: '4',
        text: 'AAX Hi Hat 14"',
        marca: 'Sabian',
        categoria: 'hi-hat',
        precio: 2000,
        img: '../src/assets/AAX Hi Hat 14.jpg',
        aleacion: 'Aleación de bronce B20',
        genero: 'Rock, Pop',
        stock: 6
    }
];

export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const product = products.find(prod => prod.id === productId);
        resolve(product);
      }, 1000);
    });
};

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter(prod => prod.categoria === categoryId));
      }, 1000);
    });
};
