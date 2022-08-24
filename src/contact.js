import Owner from '../dist/assets/owner.jpg';

const loadContact = (bodyContent) => {

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('content-card');
    const contactTitle = document.createElement('p');
    contactTitle.textContent = "Contact";
    const ownerInfoContainer = document.createElement('div');
    ownerInfoContainer.classList.add('info-div');
    const ownerImg = document.createElement('img');
    ownerImg.src = Owner;
    ownerImg.alt = "A disgruntled man";
    const contactInfoDiv = document.createElement('div');
    contactInfoDiv.classList.add('contact-text-div');
    const introText = document.createElement('p');
    introText.textContent = "Have questions or concerns? Feel free to reach out to our owner Miles Jeremy (pictured on the left) by phone or email.";
    const phoneTitle = document.createElement('p');
    phoneTitle.textContent = "Phone";
    phoneTitle.classList.add('contact-info-title');
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "555-ITS-FAKE";
    const emailTitle = document.createElement('p');
    emailTitle.textContent = "Email";
    emailTitle.classList.add('contact-info-title');
    const emailAdd = document.createElement('p');
    emailAdd.textContent = "fakeEmail@donottry.com";

    contactInfoDiv.append(introText, phoneTitle, phoneNumber, emailTitle, emailAdd);
    ownerInfoContainer.append(ownerImg, contactInfoDiv);
    contactDiv.append(contactTitle, ownerInfoContainer);

    bodyContent.appendChild(contactDiv);
}

export { loadContact };