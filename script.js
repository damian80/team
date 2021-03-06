// pobieramy 4 elementy nad ktorymi pracuje
const colorImgHtml = document.querySelector('.color');
const greyImgHtml = document.querySelector('.grey');
const h1Html = document.querySelector('.member h1');
const h2Html = document.querySelector('.member h2');

// tworzymy tablice z zdj kol,szarym,imionami i profesja

const colorImages = ['s1.png', 's2.png', 's3.png'];
const greyImages = ['s1a.png', 's2a.png', 's3a.png'];
const names = ['Anna Baugart', 'John Smith', 'Jack Black'];
const professions = ['JS Programmer', 'UX and UI Developer', 'Front-End Developer'];

// tworzymy funkcje

function changeElement() {

    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    colorImgHtml.src = colorImages[activeElement];
    greyImgHtml.src = greyImages[activeElement];
    h1Html.textContent = names[activeElement];
    h2Html.textContent = professions[activeElement];
}

// parametry

let activeElement = 0;

setInterval(changeElement, 4000)
