import { homeTab, menuTab, contactTab } from "./index";

function loadPage (content) {
    renderHeadElem(content);
    renderNavElem(content)
}

function renderHeadElem(content) {
    const headDiv = document.createElement('div');
    headDiv.classList.add('heading');
    const headTextDiv = document.createElement('div');
    const title = document.createElement('p');
    title.classList.add('head-text');
    title.textContent = "Sweet Bakes Cafe";
    headDiv.appendChild(headTextDiv);
    headTextDiv.appendChild(title);
    content.appendChild(headDiv);
}

function renderNavElem(content) {
    const navDiv = document.createElement('div');
    navDiv.classList.add('nav-div');
    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.id = 'selected';
    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    navDiv.append(homeBtn, menuBtn, contactBtn);
    content.appendChild(navDiv);

    homeBtn.addEventListener('click', () => { homeTab(homeBtn, menuBtn, contactBtn) });
    menuBtn.addEventListener('click', () => { menuTab(menuBtn, homeBtn, contactBtn) });
    contactBtn.addEventListener('click', () => { contactTab(contactBtn, homeBtn, menuBtn) });
}

function renderBodyElem(content) {
    const bodyContent = document.createElement('div')
    bodyContent.classList.add('content-container');
    content.appendChild(bodyContent);
    return bodyContent;
}

function renderFooterElem(content) {
    const footDiv = document.createElement('div');
    footDiv.classList.add('foot-div');
    const creditText = document.createElement('p');
    creditText.textContent = "Images used are royalty free from Pexels.com";
    const devText = document.createElement('p');
    devText.textContent = "Created: August 23 2022";
    footDiv.append(creditText, devText);
    content.appendChild(footDiv);
}

export { loadPage, renderBodyElem , renderFooterElem};