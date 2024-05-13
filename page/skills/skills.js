const skills = [
    { name: "skill autodidact",lvl:"lvl 10 ", description: "Description de skill html" },
    { name: "skill adaptation",lvl:"lvl 7", description: "Description de skill photoshop" },

    { name: "skill html",lvl:"lvl 9", description: "+50 % de référencement grâce à la compétence passive Sémantique renforcer" },
    { name: "skill code",lvl:"lvl 7", description: "Description de skill photoshop" },
    { name: "skill github",lvl:"lvl 6", description: "Malus de 25 % en recherche de nom de repo github / + 50 % recherche de nom de repo github grâce à l'IA" },

    { name: "skill js",lvl:"lvl 6", description: "Description de skill js" },
    { name: "skill react",lvl:"lvl 7", description: "Description de skill react" },
    { name: "skill ts",lvl:"lvl 5", description: "Description de skill node" },
    { name: "skill nextjs",lvl:"lvl 4", description: "Description de skill mongo" },

    { name: "skill css",lvl:"lvl 8", description: "Description de skill express" },
    { name: "skill tailwind",lvl:"lvl 6", description: "Description de skill git" },
    { name: "skill sass",lvl:"lvl 6", description: "Description de skill git" },
];

function createSkillElement(skill) {
    const div = document.createElement("div");
    div.classList.add("skill__description-container");
    const h2 = document.createElement("h2");
    h2.classList.add("skill__title");
    h2.textContent = skill.name;
    const span = document.createElement("span");
    span.classList.add("skill__level");
    span.textContent = skill.lvl;
    const p = document.createElement("p");
    p.classList.add("skill__description");
    p.textContent = skill.description;
    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);
    return div;
}

function showSkillDescription(event) {
    const skillName = event.target.alt;
    const skill = skills.find(skill => skill.name === skillName);
    if (skill) {
        const skillElement = createSkillElement(skill);
        event.target.parentNode.appendChild(skillElement);
        gsap.fromTo(skillElement, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.1 });
    }
}

function removeSkillDescription(event) {
    const skillDescription = event.target.parentNode.querySelector('div');
    if (skillDescription) {
        gsap.fromTo(skillDescription, { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -10, duration: 0.1, onComplete: () => skillDescription.remove() });
    }
}

const skillElements = document.querySelectorAll(".skill__img");

skillElements.forEach(skillElement => {
    skillElement.addEventListener('mouseover', showSkillDescription);
});

skillElements.forEach(skillElement => {
    skillElement.addEventListener('mouseout', removeSkillDescription);
});