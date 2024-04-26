let hoveClose = document.getElementById('hover-screen');

hoveClose.addEventListener('click', function () {
    gsap.to("#hover-screen", { opacity: 0, duration: 0.1 })
    setTimeout(function () {
        hoveClose.style.display = 'none';
    }, 100);
});

function hover() {
    gsap.to(".hover-screen-cliquez", { scale: 1.03, duration: 0.9, ease: "circ.out", repeat: -1, yoyo: true })
}

hover();

let a = document.getElementById('a');
let loader = document.getElementById('loader-snipe');

a.addEventListener('click', function () {
    loader.style.display = 'flex';
    setTimeout(function () {
        location.href = "./page/acceuil/acceuil.html";
        loader.style.display = 'none';
    }, 15000);
    setInterval(function () {
        buttonPasser.style.display = 'none';
    }, 11000);
    setInterval(function () {
        gsap.to("#buttonPasser", { x: -500, duration: 0.3, ease: "circ.out" })
    }, 2000);
    setInterval(function () {
        gsap.to("#buttonPasser", { x: 1000, duration: 0.3, ease: "circ.out" })
    }, 10000);
});

let tips = document.getElementById('tips');

let tipsText = [
    { tip: "tips : La Corde du Retour 3000 Ramener instantanément au point de départ" },
    { tip: "tips : regarder la carte c'est important" },
    { tip: "tips : tu peux utiliser l inventair pour utiliser les object que tu a trouver" },
    { tip: "tips : tu peux prendre les escalier" },
    { tip: "tips : C'est un faux temps de chargement tu peux le passer" }
];

let index = 0;

function getRandomIndex(max) {
    return Math.floor(Math.random() * max);
}

setInterval(function () {
    const randomIndex = getRandomIndex(tipsText.length);
    tips.textContent = tipsText[randomIndex].tip;
}, 4000);


let buttonPasser = document.getElementById('buttonPasser');

buttonPasser.addEventListener('click', function () {
    location.href = "./page/acceuil/acceuil.html";
});



