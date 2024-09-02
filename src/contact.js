function loadContact() {
    const content = document.getElementById('content');
    content.innerHTML = '';  

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";
    content.appendChild(headline);

    const address = document.createElement('p');
    address.textContent = "1234 Addis Ababa, Ethiopia";
    content.appendChild(address);

    const phone = document.createElement('p');
    phone.textContent = "Phone: (251) 956-7890";
    content.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = "Email: contact@free-restaurant.com";
    content.appendChild(email);
}

export default loadContact;
