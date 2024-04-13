document.addEventListener('DOMContentLoaded', () => {
    const housesContainer = document.getElementById('housesContainer');

    // Dummy data for demonstration
    const housesData = [
        { id: 1, name: 'The Safari House', image: 'images/home2.jpg', price: 200000 },
        { id: 2, name: 'Kareniation House', image: 'images/home3.jpg', price: 250000 },
        { id: 3, name: 'Angels Land House', image: 'images/house44.jpg', price: 180000 }
    ];

    // Render houses
    housesData.forEach(house => {
        const houseElement = document.createElement('div');
        houseElement.classList.add('house');
        houseElement.innerHTML = `
            <img src="${house.image}" alt="${house.name}">
            <h2>${house.name}</h2>
            <p>Price: $${house.price}</p>
            <button class="addToCartBtn" data-id="${house.id}">Add to Cart</button>
            <button class="buyBtn" data-id="${house.id}">Buy Now</button>
            <button class="negotiateBtn" data-id="${house.id}">Negotiate</button>
        `;
        housesContainer.appendChild(houseElement);
    });

    // Logout functionality (replace with your actual logout logic)
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', () => {
        alert('Are you sure you want to logout?');
        // Add your logout logic here
    });

    // Add to cart functionality (replace with your actual add to cart logic)
    housesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('addToCartBtn')) {
            const houseId = event.target.getAttribute('data-id');
            alert(`Added house with ID ${houseId} to cart`);
            // Add your add to cart logic here
        }
    });

    // Buy now functionality (replace with your actual buy now logic)
    housesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('buyBtn')) {
            const houseId = event.target.getAttribute('data-id');
            alert(`Buying house with ID ${houseId}`);
            // Add your buy now logic here
        }
    });

    // Negotiate functionality (replace with your actual negotiation logic)
    housesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('negotiateBtn')) {
            const houseId = event.target.getAttribute('data-id');
            alert(`Negotiating for house with ID ${houseId}`);
            // Add your negotiation logic here
        }
    });
});
