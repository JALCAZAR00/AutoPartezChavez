const products = [
    {
        id: 0,
        category: 'Aceite',
        img: './assets/products/01.jpg',
        price: 169,
        name : 'Aceite MOBIL 20W-50 946ml',
        description: 'Aceite para motor a gasolina MOBIL 20W-50 mineral TRC-PRO 946ml',
    },
    {
        id: 1,
        category: 'Cuidados del auto',
        img: './assets/products/02.webp',
        price: 65,
        name : 'Shampoo para auto MAGREY 1L',
        description: 'Shampo con cera para auto MAGREY 1L',
    },
    {
        id: 2,
        category: 'Cuidados del auto',
        img: './assets/products/03.webp',
        price: 20,
        name : 'Trapo de microfibra',
        description: 'Trapo de microfibra color rojo medidas 50x50cm',
    },
    {
        id: 3,
        category: 'Cuidados del auto',
        img: './assets/products/04.webp',
        price: 30,
        name : 'Esponja para auto',
        description: 'Esponja para lavar autos medidas 30x20cm',
    },
    {
        id: 4,
        category: 'Cuidados del auto',
        img: './assets/products/05.png',
        price: 135,
        name : 'Filtro de aire UNIFIL Toyota Corolla',
        description: 'Filtro de aire UNIFIL TOYOTA Corolla Lexus ES350',
    },
]

function constructorProduct(){
    const image = document.createElement('img');
    image = img.src;
    const price = document.createElement('p');
    price = price.ariaValueMax;
    const name = document.createElement('h2');
    name = name.ariaValueMax;
    const description = document.createElement('h3');
    description.ariaValueMax;

    const containerProduct = document.createElement('div');
    containerProduct.classList = "store";

    containerProduct.append(image, price, name, description);
    body.append(containerProduct)
}