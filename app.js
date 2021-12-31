const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mous', price: 1200},
    {id: 3, title: 'cap', price: 1430},
    {id: 3, title: 'iphone', price: 1432},
    {id: 3, title: 'light', price: 140},
];

const renderProduct = (title = "Не доступно", price = 0) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-bth">Добавить</button>
            </div>`;
};

const renderCatalog = (list) => {
    document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
};

renderCatalog(products);