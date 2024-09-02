import './style.css';   

import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function init() {
    loadHome();  

    document.getElementById('home-btn').addEventListener('click', loadHome);
    document.getElementById('menu-btn').addEventListener('click', loadMenu);
    document.getElementById('contact-btn').addEventListener('click', loadContact);
}

init();
