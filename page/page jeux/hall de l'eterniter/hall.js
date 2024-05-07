const parchemin = [
    { name: "parchemin 1", description: "Hall de l'eterniter" },
    { name: "parchemin 2", description: "Arrête-toi ici je pense que tu as déjà assez perdu de temps et puis il y a sûrement rien au bout" },
    { name: "parchemin 3", description: "Ce portail vous mènera vers***********************si vous êtes vraiment sûr de******************************Bonne chance MAIS SURT*************************" },
    { name: "parchemin 4", description: "Si vous êtes arrivé là c'est que vous êtes persévérant tout comme moi pour avoir coder ça même si au final ça ne m'a pas pris tant de temps que ça. Tout comme vous si vous avez utilisé votre souris à bon escient" },

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


const container = document.querySelector('.container');

gsap.fromTo(container, { autoAlpha: 0 }, {
    autoAlpha: 1, duration: 1.3, onComplete: () => {
        gsap.to(container, {
            autoAlpha: 1, duration: 3, onComplete: () => {
                gsap.to(container, { autoAlpha: 0, duration: 1.3 });
            }
        });
    }
});

const lampe = document.querySelector('.hall__lampe');

lampe.addEventListener('click', () => {
    lampe.style.boxShadow = '0 0 10vw 10vw #fff70030';
    lampe.style.transition = 'box-shadow 5s';
    setTimeout(() => {
        lampe.style.background = '#fff7001f';
    }, 200);
    setTimeout(() => {
        lampe.style.boxShadow = '0 0 0 0 #fff7006e';
    }, 10000);
    setTimeout(() => {
        lampe.style.background = '#fff';
    }, 14500);
});

// Sélectionnez tous les éléments de pilier
const pillars2 = document.querySelectorAll('.hall__pilier2-1, .hall__pilier2-2, .hall__pilier2-3, .hall__pilier2-4, .hall__pilier2-5, .hall__pilier2-6, .hall__pilier2-7, .hall__pilier2-8, .hall__pilier2-9, .hall__pilier2-10, .hall__pilier2-11, .hall__pilier2-12, .hall__pilier2-13,.hall__pilier2-14, .hall__pilier2-15, .hall__pilier2-16, .hall__pilier2-17, .hall__pilier2-18, .hall__pilier2-19,  .hall__pilier2-20');

// Ajoutez un écouteur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function() {
    // Calculez le décalage de parallaxe (vous pouvez ajuster le '0.5' pour changer la vitesse de parallaxe)
    const offset = window.scrollX * 0.05;

    // Appliquez le décalage à chaque pilier
    pillars2.forEach(pillar => {
        gsap.to(pillar, { x: offset, duration: 0.0001 });
    });
});

// Sélectionnez tous les éléments de pilier
const pillars3 = document.querySelectorAll('.hall__pilier3-1, .hall__pilier3-2, .hall__pilier3-3, .hall__pilier3-4, .hall__pilier3-5, .hall__pilier3-7, .hall__pilier3-8, .hall__pilier3-9, .hall__pilier3-10, .hall__pilier3-11, .hall__pilier3-12, .hall__pilier3-13,.hall__pilier3-14, .hall__pilier3-15, .hall__pilier3-16');

// Ajoutez un écouteur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function() {
    // Calculez le décalage de parallaxe (vous pouvez ajuster le '0.5' pour changer la vitesse de parallaxe)
    const offset = window.scrollX * 0.2;

    // Appliquez le décalage à chaque pilier
    pillars3.forEach(pillar => {
        gsap.to(pillar, { x: offset, duration: 0.001 });
    });
});

// Sélectionnez tous les éléments de pilier
const pillars4 = document.querySelectorAll('.hall__pilier4-1, .hall__pilier4-2, .hall__pilier4-3, .hall__pilier4-4,W .hall__pilier4-6, .hall__pilier4-7, .hall__pilier4-8, .hall__pilier4-9, .hall__pilier4-11, .hall__pilier4-12, .hall__pilier4-13,.hall__pilier4-14, .hall__pilier4-15');

// Ajoutez un écouteur d'événements de défilement à la fenêtre
window.addEventListener('scroll', function() {
    // Calculez le décalage de parallaxe (vous pouvez ajuster le '0.5' pour changer la vitesse de parallaxe)
    const offset = window.scrollX * 0.3;

    // Appliquez le décalage à chaque pilier
    pillars4.forEach(pillar => {
        gsap.to(pillar, { x: offset, duration: 0.01 });
    });
});