// Les données de votre livre
const bookData = [
    {
        "titre": "",
        "img": "",
        "Niveau de menace": "",
        "Couleur du portail": "",
        "Date de découverte": "",
        "Position géographique": "",
        "description": " go page 4",
        "numero de page": 0
    },
    {
        "titre": "",
        "img": "",
        "Niveau de menace": "",
        "Couleur du portail": "",
        "Date de découverte": "",
        "Position géographique": "",
        "description": "",
        "numero de page": 1
    },
    {
        "titre": "",
        "img": "",
        "Niveau de menace": "",
        "Couleur du portail": "",
        "Date de découverte": "",
        "Position géographique": "",
        "description": "",
        "numero de page": 2
    },
    {
        "titre": "",
        "img": "",
        "Niveau de menace": "",
        "Couleur du portail": "",
        "Date de découverte": "",
        "Position géographique": "",
        "description": "",
        "numero de page": 3
    },
    {
        "titre": "Le Hall du Retour",
        "img": "../almanach des portail/asset/structure portail bleu.svg",
        "Niveau de menace": "Sûr",
        "Couleur du portail": "Bleu",
        "Date de découverte": "14/07/2000",
        "Position géographique": "Hall de l’eterniter",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales lacus magna, et ultricies augue ultrices a. Nulla et lorem ut leo commodo dapibus. Quisque id nibh sit amet nisl ultrices lobortis. Etiam mollis in purus in imperdiet. Pellentesque consequat ac eros vel tincidunt. Donec suscipit suscipit tempor. Etiam id semper odio, ut rhoncus eros. Curabitur semper, erat ac porttitor rhoncus, justo diam pellentesque risus, at iaculis dui tortor non urna. Nam bibendum nibh id risus porttitor, at tincidunt lacus ullamcorper. Sed et elementum arcu, sed sodales sapien.",
        "numero de page": 4
    },
    {
        "titre": "Le Hall des Enfers",
        "img": "../almanach des portail/asset/structure portail rouge.svg",
        "Niveau de menace": "Keter",
        "Couleur du portail": "Rouge foncé",
        "Date de découverte": "24/08/2011",
        "Position géographique": "Hall de l’eterniter",
        "description": "Description de l'élément",
        "numero de page": 5
    },
    {
        "titre": "lE Hall dE La FiN",
        "img": "../almanach des portail/asset/structure portail jaune.svg",
        "Niveau de menace": "Sûr",
        "Couleur du portail": "Jaune",
        "Date de découverte": "24/11/2023",
        "Position géographique": "Hall de l’eterniter",
        "description": "Description de l'élément",
        "numero de page": 6
    },
    {
        "titre": "SANS RETOUR",
        "img": "../almanach des portail/asset/structure portail noir.svg",
        "Niveau de menace": "Neutralisé",
        "Couleur du portail": "Noir",
        "Date de découverte": "24/08/2011",
        "Position géographique": "???",
        "description": "Description de l'élément",
        "numero de page": 7
    },
    {
        
        "titre": "????????",
        "img": "../almanach des portail/asset/structure portail noir rouge.svg",
        "Niveau de menace": "Classes -ésotériques-",
        "Couleur du portail": "Noir et Rouge",
        "Date de découverte": "??/??/20??",
        "Position géographique": "???",
        "description": "_____________________________________________________",
        "numero de page": 8
    },
    {
        "titre": "Le Portail Pourpre",
        "img": "../almanach des portail/asset/structure portail violet.svg",
        "Niveau de menace": "Euclide",
        "Couleur du portail": "violet",
        "Date de découverte": "14/07/2000",
        "Position géographique": "Les ruines de l'ancienne cité",
        "description": "Description de l'élément",
        "numero de page": 9
    },
    {
        "titre": "Le Portail de la ????",
        "img": "../almanach des portail/asset/structure 2 portail blanc.svg",
        "Niveau de menace": "Thaumiel",
        "Couleur du portail": "blanc",
        "Date de découverte": "??/??/????",
        "Position géographique": "????????????????",
        "description": "???",
        "numero de page": 10
    }
   
];

const almanachs = document.getElementById('almanach');
const bookDiv = document.querySelector('.livre');
const pageLeft = document.querySelector('.pageLeft');
const pageRight = document.querySelector('.pageRight');
const previousPageButton = document.getElementById('previousPageButton');
const nextPageButton = document.getElementById('nextPageButton');
const closeBookButton = document.getElementById('closeButton');
let elements = document.getElementsByClassName('inventaireSlot3');

function displayPage(pageIndex) {
    const pageData1 = bookData[pageIndex];
    const pageData2 = bookData[pageIndex + 1];

    pageLeft.innerHTML = '';
    pageRight.innerHTML = '';

    if (pageData1) {
        const titleElement1 = document.createElement('h1');
        titleElement1.textContent = pageData1.titre;
        titleElement1.classList.add('titre');
        pageLeft.appendChild(titleElement1);

        const imgElement1 = document.createElement('img');
        imgElement1.src = pageData1.img;
        imgElement1.classList.add('img');
        pageLeft.appendChild(imgElement1);

        const menaceLevelElement1 = document.createElement('p');
        menaceLevelElement1.textContent = 'Niveau de menace: ' + pageData1['Niveau de menace'];
        menaceLevelElement1.classList.add('menaceLevel');
        pageLeft.appendChild(menaceLevelElement1);

        const CouleurPortail1 = document.createElement('p');
        CouleurPortail1.textContent = 'Couleur du portail: ' + pageData1['Couleur du portail'];
        CouleurPortail1.classList.add('couleurPortail');
        pageLeft.appendChild(CouleurPortail1);

        const DateDecouverte1 = document.createElement('p');
        DateDecouverte1.textContent = 'Date de découverte: ' + pageData1['Date de découverte'];
        DateDecouverte1.classList.add('dateDecouverte');
        pageLeft.appendChild(DateDecouverte1);

        const PositionGeographique1 = document.createElement('p');
        PositionGeographique1.textContent = 'Position géographique: ' + pageData1['Position géographique'];
        PositionGeographique1.classList.add('positionGeographique');
        pageLeft.appendChild(PositionGeographique1);

        const description1 = document.createElement('p');
        description1.textContent = 'Description: ' + pageData1['description'];
        description1.classList.add('description');
        pageLeft.appendChild(description1);

        const numeroPage1 = document.createElement('p');
        numeroPage1.textContent = pageData1['numero de page'];
        numeroPage1.classList.add('numeroPageLeft');
        pageLeft.appendChild(numeroPage1);
    }

    if (pageData2) {
        const titleElement2 = document.createElement('h1');
        titleElement2.textContent = pageData2.titre;
        titleElement2.classList.add('titre');
        pageRight.appendChild(titleElement2);

        const imgElement2 = document.createElement('img');
        imgElement2.src = pageData2.img;
        imgElement2.classList.add('img');
        pageRight.appendChild(imgElement2);

        const menaceLevelElement2 = document.createElement('p');
        menaceLevelElement2.textContent = 'Niveau de menace: ' + pageData2['Niveau de menace'];
        menaceLevelElement2.classList.add('menaceLevel');
        pageRight.appendChild(menaceLevelElement2);

        const CouleurPortail2 = document.createElement('p');
        CouleurPortail2.textContent = 'Couleur du portail: ' + pageData2['Couleur du portail'];
        CouleurPortail2.classList.add('couleurPortail');
        pageRight.appendChild(CouleurPortail2);

        const DateDecouverte2 = document.createElement('p');
        DateDecouverte2.textContent = 'Date de découverte: ' + pageData2['Date de découverte'];
        DateDecouverte2.classList.add('dateDecouverte');
        pageRight.appendChild(DateDecouverte2);

        const PositionGeographique2 = document.createElement('p');
        PositionGeographique2.textContent = 'Position géographique: ' + pageData2['Position géographique'];
        PositionGeographique2.classList.add('positionGeographique');
        pageRight.appendChild(PositionGeographique2);

        const description2 = document.createElement('p');
        description2.textContent = 'Description: ' + pageData2['description'];
        description2.classList.add('description');
        pageRight.appendChild(description2);

        const numeroPage2 = document.createElement('p');
        numeroPage2.textContent = pageData2['numero de page'];
        numeroPage2.classList.add('numeroPageRight');
        pageRight.appendChild(numeroPage2);
    }
    if (pageIndex === 0) {
        previousPageButton.style.display = 'none';
    } else {
        previousPageButton.style.display = 'flex';
    }
    if (pageIndex === 10) {
        nextPageButton.style.display = 'none';
    } else {
        nextPageButton.style.display = 'flex';
    }
}

let currentPageIndex = 0;

function nextPage() {
    currentPageIndex += 2;
    displayPage(currentPageIndex);
}

function previousPage() {
    currentPageIndex -= 2;
    displayPage(currentPageIndex);
}

displayPage(currentPageIndex);

document.getElementById('nextPageButton').addEventListener('click', nextPage);
document.getElementById('previousPageButton').addEventListener('click', previousPage);

