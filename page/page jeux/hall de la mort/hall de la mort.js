window.onload = function () {
    window.scrollTo(0, document.body.scrollHeight);
}

const container = document.querySelector('.container');

gsap.fromTo(container, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1, repeat: 3, yoyo: true, onComplete: () => { gsap.to(container, { autoAlpha: 0, duration: 1.3 }) } });

const lampe = document.querySelector('.hall__lampe');

lampe.addEventListener('click', () => {
    lampe.style.boxShadow = '0 0 23vw 23vw #fff70030';
    lampe.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe.style.background = '#fff70030';
    }, 200);
    setTimeout(() => {
        lampe.style.boxShadow = '0 0 0 0 #fff70030';
    }, 10000);
    setTimeout(() => {
        lampe.style.background = '#00000';
    }, 14500);
});

const lampe2 = document.querySelector('.hall__lampe2');

lampe2.addEventListener('click', () => {
    lampe2.style.boxShadow = '0 0 15vw 15vw #fff70030';
    lampe2.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe2.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe2.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe2.style.background = '#00000';
    }, 14500);
});

const lampe3 = document.querySelector('.hall__lampe3');

lampe3.addEventListener('click', () => {
    lampe3.style.boxShadow = '0 0 15vw 15vw #fff70030';
    lampe3.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe3.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe3.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe3.style.background = '#00000';
    }, 14500);
});

const lampe4 = document.querySelector('.hall__lampe4');

lampe4.addEventListener('click', () => {
    lampe4.style.boxShadow = '0 0 15vw 15vw #fff70030';
    lampe4.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe4.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe4.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe4.style.background = '#00000';
    }, 14500);
});

const lampe5 = document.querySelector('.hall__lampe5');

lampe5.addEventListener('click', () => {
    lampe5.style.boxShadow = '0 0 15vw 15vw #fff70030';
    lampe5.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe5.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe5.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe5.style.background = '#00000';
    }, 14500);
});

const lampe6 = document.querySelector('.hall__lampe6');

lampe6.addEventListener('click', () => {
    lampe6.style.boxShadow = '0 0 15vw 15vw #fff70030';
    lampe6.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe6.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe6.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe6.style.background = '#00000';
    }, 14500);
});

const lampe7 = document.querySelector('.hall__lampe7');

lampe7.addEventListener('click', () => {
    lampe7.style.boxShadow = '0 0 25vw 35vw #fff70030';
    lampe7.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe7.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe7.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe7.style.background = '#00000';
    }, 14500);
});

const parchemin = [
    { name: "parchemin 1", description: "Toi qui lis ce texte je t'avais pourtant prévenu de pas venir ici. Je ne sais pas si c'est la pas du gain ou de l'inconscience qui t'a fait passer ce portail, mets toute décision n'est pas bonne à prendre ça je l'ai appris à mes dépens" },
    { name: "parchemin 2", description: "il y a un texte écrit sur le sol j'ai du mal à déchiffrer car cette lampe n'éclaire rien déjà je suis même pas sûr que ça soit vraiment une lampe et je ne sais même pas pourquoi je note ça de toute façon il ne me reste plus que 4 feuilles .Note 1" },
    { name: "parchemin 3", description: "Ce portail vous mènera vers***********************si vous êtes vraiment sûr de************************Bonne chance MAIS SURT********************.Note 2" },
    { name: "parchemin 4", description: "je ne t'ai pas sûr de ce que c'était donc j'ai dû l'étudier et c'est une faille   profonde ça c'est sûr  j'y ai lancé une pièce et j'ai entendu son écho que 1h après mais bon je suis pas descendu dedans je suis pas fou hein je ne suis pas fou .Note 4" },
    { name: "parchemin 5", description: "Ca doit faire 3 semaines ou non peut-être 2 ou peut-être 5 que je suis dans le coin. Bon je suis pas perdu non plus il y a nulle part où se perdre ici au fait si jamais c'est mes mémoires je suis docteur Ericsson j'ai fait des trucs avant d'être là mais bon c'est plus important. Enfin bref j'ai vu de la lumière un peu plus haut sur la gauche je vais me rendre .Note 4" },
    { name: "parchemin 6", description: "bon dommage je suis pas le premier de passer par ici en fait c'était sûr je suis pas le premier être entre dans le hall de l'éternité après tout mets ce qui est bizarre quand même c'est que c'est mon seau qui est apposé sur cette note comme si je l'avais déjà écrit .Note 5" }
];

function createparcheminElement(parchemin) {
    const div = document.createElement("div");
    div.classList.add("parchemin__description-container");
    const p = document.createElement("p");
    p.classList.add("parchemin__description");
    p.textContent = parchemin.description;
    div.appendChild(p);
    return div;
}

function showparcheminDescription(event) {
    const parcheminName = event.target.alt;
    const foundParchemin = parchemin.find(p => p.name === parcheminName);
    if (foundParchemin) {
        const parcheminElement = createparcheminElement(foundParchemin);
        event.target.parentNode.appendChild(parcheminElement);
        gsap.fromTo(parcheminElement, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.1 });
    }
}

function removeparcheminDescription(event) {
    const parcheminDescription = event.target.parentNode.querySelector('div');
    if (parcheminDescription) {
        gsap.fromTo(parcheminDescription, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -10, duration: 0.1, onComplete: () => parcheminDescription.remove() });
    }
}

const parcheminElements = document.querySelectorAll("#hall__parchemin");

parcheminElements.forEach(parcheminElement => {
    parcheminElement.addEventListener('mouseover', showparcheminDescription);
});

parcheminElements.forEach(parcheminElement => {
    parcheminElement.addEventListener('mouseout', removeparcheminDescription);
});