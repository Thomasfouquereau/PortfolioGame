const parchemin = [
    { name: "parchemin 1", description: "hall de l'eterniter" },
    { name: "parchemin 2", description: "ce portail vous mènera vers si vous êtes vraiment sûr de bonne chance mais surt" },
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

gsap.fromTo(container, { autoAlpha: 0 }, { autoAlpha: 1, duration: 1.8, onComplete: () => {
    gsap.to(container, { autoAlpha: 1, duration: 5, onComplete: () => {
        gsap.to(container, { autoAlpha: 0, duration: 1.3 });
    }});
}});