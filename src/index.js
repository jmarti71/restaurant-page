import './style.css';
import { loadPage, renderBodyElem, renderFooterElem } from './pageload';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

const contentRef = (() => {
    const content = document.getElementById("content");
    loadPage(content);
    const bodyContent = renderBodyElem(content);
    loadHome(bodyContent);
    renderFooterElem(content);
    return { bodyContent };
})();

const homeTab = (homeButton, menuButton, contactButton) => {
    if (homeButton.id !== 'selected') {
        homeButton.id = 'selected';
        menuButton.id = '';
        contactButton.id = '';
        removeContent(contentRef.bodyContent);
        loadHome(contentRef.bodyContent);
    }
}

const menuTab = (menuButton, homeButton, contactButton) => {
    if (menuButton.id !== 'selected') {
        menuButton.id = 'selected';
        homeButton.id = '';
        contactButton.id = '';
        removeContent(contentRef.bodyContent);
        loadMenu(contentRef.bodyContent);
    }
}

const contactTab = (contactButton, homeButton, menuButton) => {
    if (contactButton.id !== 'selected') {
        contactButton.id = 'selected';
        menuButton.id = '';
        homeButton.id = '';
        removeContent(contentRef.bodyContent);
        loadContact(contentRef.bodyContent);
    }
}

function removeContent(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

export { homeTab, menuTab, contactTab };