let cadreCarte = document.createElement('div');
cadreCarte.setAttribute('id', 'cadreCarte');

let carteFond = document.createElement('div');
carteFond.setAttribute('id', 'carteFond');

let carte = document.createElement('img');
carte.setAttribute('id', 'carte');
carte.setAttribute('src', '../../asset/carte etage 1.svg');
carte.setAttribute('alt', 'carte etage 1');

let carteLegende = document.createElement('div');
carteLegende.setAttribute('id', 'carteLegende');

let carteLegende1 = document.createElement('div');
carteLegende1.setAttribute('id', 'carteLegende1');

let carteLegende1Img = document.createElement('img');
carteLegende1Img.setAttribute('id', 'carteLegende1Img');
carteLegende1Img.setAttribute('src', '../../asset/legende 1.svg');

let carteLegende1Text = document.createElement('p');
carteLegende1Text.setAttribute('id', 'carteLegende1Text');
carteLegende1Text.textContent = 'cacher les escaliers';

let carteLegende2 = document.createElement('div');
carteLegende2.setAttribute('id', 'carteLegende2');

let carteLegende2Img = document.createElement('img');
carteLegende2Img.setAttribute('id', 'carteLegende2Img');
carteLegende2Img.setAttribute('src', '../../asset/legende 2.svg');

let carteLegende2Text = document.createElement('p');
carteLegende2Text.setAttribute('id', 'carteLegende2Text');
carteLegende2Text.textContent = 'cacher les portails';

let carteClose = document.createElement('button');
carteClose.setAttribute('id', 'carteClose');

let carteCloseImg = document.createElement('img');
carteCloseImg.setAttribute('id', 'carteCloseImg');
carteCloseImg.setAttribute('src', '../../asset/carte close.svg');

let buttonCarte = document.createElement('button');
buttonCarte.setAttribute('id', 'buttonCarte');
buttonCarte.textContent = 'carte';

let buttonCarteImg = document.createElement('img');
buttonCarteImg.setAttribute('id', 'buttonCarteImg');
buttonCarteImg.setAttribute('src', '../../asset/carte.svg');

buttonCarte.appendChild(buttonCarteImg);

carteLegende1.appendChild(carteLegende1Img);
carteLegende1.appendChild(carteLegende1Text);
carteLegende2.appendChild(carteLegende2Img);
carteLegende2.appendChild(carteLegende2Text);
carteLegende.appendChild(carteLegende1);
carteLegende.appendChild(carteLegende2);
carteFond.appendChild(carte);
carteFond.appendChild(carteLegende);
carteClose.appendChild(carteCloseImg);
cadreCarte.appendChild(carteFond);
cadreCarte.appendChild(buttonCarte);
cadreCarte.appendChild(carteClose);
document.body.appendChild(cadreCarte);

let closeCarte = document.getElementById('carteClose');
let openCarte = document.getElementById('carteStart');

closeCarte.addEventListener('click', function() {
    gsap.to("#cadreCarte", {y: -1000, duration: 0.8})
    setTimeout(function() {
        cadreCarte.style.display = 'none';
    }, 300);
});

buttonCarte.addEventListener('click', function() {
    gsap.to("#cadreCarte", {y: -1000, duration: 0.8})
    setTimeout(function() {
        cadreCarte.style.display = 'none';
    }, 300);
});

openCarte.addEventListener('click', function() {
    cadreCarte.style.display = 'block';
    gsap.to("#cadreCarte", {y: 1000, duration: 0.6})
});