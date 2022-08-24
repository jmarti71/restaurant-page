function loadHome(content) {
    renderReviews(content);
    renderHours(content);
    renderLocation(content);
}

function renderReviews (parentDiv) {
    const qteDiv = document.createElement('div');
    qteDiv.classList.add('content-card');
    const welcomeTitle = document.createElement('p');
    welcomeTitle.textContent = "Welcome";
    const welcomeDesc = document.createElement('p');
    welcomeDesc.textContent = "Welcome to the bakery of your dreams. Founded in 1936, Sweet Bakes curates" + 
    " a variety of treats, baked with love, creativity and anxiety laced perfectionism.";
    const quote2 = document.createElement('p');
    quote2.textContent = '"I can taste the sweat!" - Roger';
    qteDiv.append(welcomeTitle, welcomeDesc, quote2);
    parentDiv.append(qteDiv);
}

function renderHours (parentDiv) {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('content-card');
    const hrTitle = document.createElement('p');
    hrTitle.textContent = "Hours";
    const hrWkndDisp = document.createElement('p');
    hrWkndDisp.textContent = "Sat & Sun: 10AM - 6PM";
    const hrWkdyDisp = document.createElement('p');
    hrWkdyDisp.textContent = "Mon - Fri: 8AM - 10PM";
    hoursDiv.append(hrTitle, hrWkndDisp, hrWkdyDisp);
    parentDiv.append(hoursDiv);
}

function renderLocation(parentDiv) {
    const locDiv = document.createElement('div');
    locDiv.classList.add('content-card');
    const locTitle = document.createElement('p');
    locTitle.textContent = "Location";
    const location = document.createElement('p');
    location.textContent = '1433 Sweet Treats ln, Denver, CO, 80014';
    locDiv.append(locTitle, location);
    parentDiv.append(locDiv);
}

export { loadHome };