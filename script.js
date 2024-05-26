document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:1337/api/cars?populate=*';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cars = data.data;
            const carListElement = document.getElementById('car-list');
            carListElement.innerHTML = '';

            cars.forEach(car => {
                const carData = car.attributes;
                const carItem = document.createElement('div');
                carItem.className = 'car-item';

                carItem.innerHTML = `
                    <img src="${carData.image.data.attributes.url}" alt="${carData.name}">
                    <h3>${carData.name}</h3>
                    <p>${carData.description}</p>
                    <p class="price">₹${carData.price}</p>
                    <p class="discount">${carData.discount}% off</p>
                    <button class="favorite-btn" onclick="addToFavorites(${car.id})">Add to Favorites</button>
                `;

                carListElement.appendChild(carItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

    const favorites = [];

    window.addToFavorites = function(carId) {
        const car = cars.find(c => c.id === carId);
        if (car && !favorites.includes(car)) {
            favorites.push(car);
            alert(`${car.attributes.name} has been added to your favorites.`);
        }
    };
});
