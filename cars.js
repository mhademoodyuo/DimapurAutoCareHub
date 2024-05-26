document.addEventListener("DOMContentLoaded", function () {
    const carList = document.getElementById('car-list');

    const cars = [
        {
            model: 'Toyota Corolla',
            fuelType: 'Petrol',
            mileage: 30000,
            price: 15000,
            automaticTransmission: true,
            sunroof: true,
            fourWheelDrive: false,
            description: 'A well-maintained car with all the features you need.',
            condition: 'New',
            bodyType: 'Sedan',
            name: 'John Doe',
            owner: 'First owner',
            negotiable: true,
            imageUrl: 'images/car1.jpg' // Update the image path
        },
        {
            model: 'Honda Civic',
            fuelType: 'Diesel',
            mileage: 50000,
            price: 12000,
            automaticTransmission: false,
            sunroof: false,
            fourWheelDrive: false,
            description: 'A reliable car with great fuel efficiency.',
            condition: 'Replaced parts',
            bodyType: 'Sedan',
            name: 'Jane Smith',
            owner: 'Second owner',
            negotiable: false,
            imageUrl: 'images/car2.jpg' // Update the image path
        }
    ];

    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.className = 'car';

        carElement.innerHTML = `
            <img src="${car.imageUrl}" alt="${car.model}">
            <div class="car-details">
                <h2>${car.model}</h2>
                <p>Fuel Type: ${car.fuelType}</p>
                <p>Mileage: ${car.mileage} km</p>
                <p>Price: $${car.price}</p>
                <p>Automatic Transmission: ${car.automaticTransmission ? 'Yes' : 'No'}</p>
                <p>Sunroof: ${car.sunroof ? 'Yes' : 'No'}</p>
                <p>Four Wheel Drive: ${car.fourWheelDrive ? 'Yes' : 'No'}</p>
                <p>Description: ${car.description}</p>
                <p>Condition: ${car.condition}</p>
                <p>Body Type: ${car.bodyType}</p>
                <p>Name: ${car.name}</p>
                <p>Owner: ${car.owner}</p>
                <p>Negotiable: ${car.negotiable ? 'Yes' : 'No'}</p>
                <a class="whatsapp-link" href="https://wa.me/9089042003/?text=I%27m%20interested%20in%20this%20${encodeURIComponent(car.model)}" target="_blank">Contact via WhatsApp</a>

            </div>
        `;

        carList.appendChild(carElement);
    });
});
