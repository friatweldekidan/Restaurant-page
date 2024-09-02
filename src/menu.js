function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; 

    const headline = document.createElement('h1');
    headline.textContent = "Our Menu";
    content.appendChild(headline);

    const menuList = document.createElement('ul');

    const items = [
        { name: "Doro Wot", description: "Ethiopian chicken dish ", price: "1299 birr" },
        { name: "Shro Wot", description: "Ethiopian vegan dish", price: "150 birr" },
        { name: "Selat", description: "Ethiopian lettuce with Lemon dressing", price: "200 birr" },
        { name: "Beyeaynet", description: "Ethiopian different vegan wot dish", price: "599 birr" },
        { name: "Buna", description: "Traditional Ethiopian coffee", price: "15 birr" }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('li');
        menuItem.innerHTML = `<strong>${item.name}</strong> - ${item.description} - <em>${item.price}</em>`;
        menuList.appendChild(menuItem);
    });

    content.appendChild(menuList);
}

export default loadMenu;
