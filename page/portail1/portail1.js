let tuto = document.getElementById('tuto');

let tutoText = document.getElementsByClassName('tuto-text')[0];
let span = document.createElement('span');
span.setAttribute('id', 'tuto-text__title');
span.textContent = 'Tuto';
let p = document.createElement('p');
p.setAttribute('id', 'tuto-text__text');
p.textContent = 'tu peux warp avec les portails ';

let img = document.createElement('img');
img.setAttribute('id', 'tuto-img');
img.setAttribute('src', '../../asset/legende 2.svg');

let tutoButtonNav = document.getElementsByClassName('tuto-button__nav')[0];
let buttonTerminer = document.createElement('button');
buttonTerminer.setAttribute('id', 'tuto-button');
buttonTerminer.textContent = 'terminer';

tutoText.appendChild(span);
tutoText.appendChild(p);
tutoText.appendChild(img);
tutoButtonNav.appendChild(buttonTerminer);

let tutoButtonOpen = document.getElementById('open-tuto-button');

buttonTerminer.addEventListener('click', () => {
    setTimeout(function () {
        tuto.style.display = 'none';
    }, 400);
    gsap.to(tuto, { x: 1600, duration: 0.8 })
});

tutoButtonOpen.addEventListener('click', () => {
    if (tuto.style.display === 'none') {
        tuto.style.display = 'block'; gsap.to(tuto, { x: 0, duration: 0.8 })
        return;
    } else {
        setTimeout(function () {
            tuto.style.display = 'none';
        }, 400);
        gsap.to(tuto, { x: 1600, duration: 0.8 })
    }
});