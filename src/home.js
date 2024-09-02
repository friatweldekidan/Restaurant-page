import restaurantImage from './img/pexels-pixabay-262047.jpg'

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';  

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to Free Restaurant";
    content.appendChild(headline);

    const description = document.createElement('p');
    description.textContent = "The best dining experience in town!";
    content.appendChild(description);

    const image = document.createElement('img');
    image.src =  restaurantImage;
    image.alt = "Restaurant Image";
    content.appendChild(image);
}

export default loadHome;
