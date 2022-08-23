import './style.css';
import { loadPage, renderBodyElem, renderFooterElem } from './pageload';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

const content = document.getElementById("content");
loadPage(content);
const bodyContent = renderBodyElem(content);
loadHome(bodyContent);
renderFooterElem(content);

const homeTab = (homeButton, menuButton, contactButton) => {
    if(homeButton.id !== 'selected'){
        homeButton.id = 'selected';
        menuButton.id = '';
        contactButton.id = '';
        removeContent(bodyContent);
        loadHome(bodyContent);
    }
}

const menuTab = (menuButton, homeButton, contactButton) => {
    if(menuButton.id !== 'selected'){
        menuButton.id = 'selected';
        homeButton.id = '';
        contactButton.id = '';
        removeContent(bodyContent);
        loadMenu(bodyContent);
    }
}

const contactTab = (contactButton, homeButton, menuButton) => {
    if(contactButton.id !== 'selected'){
        contactButton.id = 'selected';
        menuButton.id = '';
        homeButton.id = '';
        removeContent(bodyContent);
        loadContact(bodyContent);
    }
}

function removeContent(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { homeTab, menuTab, contactTab };