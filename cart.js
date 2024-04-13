document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cartItems');

    // Dummy data for demonstration (you can replace it with actual cart items)
    const cartItemsData = [
        { id: 2, name: 'Kareniation', image: 'images/home3.jpg', price: 250000, description: 'A spacious house with a garden and swimming pool.' }
    ];

    // Render cart items
    cartItemsData.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cartItem');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="details">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
                <p>Price: $${item.price}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItemElement);
    });
});
