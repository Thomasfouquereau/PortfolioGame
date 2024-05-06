let cadreInventaire = document.createElement('div');
cadreInventaire.setAttribute('id', 'cadreInventaire');
let inventaireContainer = document.createElement('div');
inventaireContainer.setAttribute('id', 'inventaireContainer');

let inventaireInfo = document.createElement('div');
inventaireInfo.setAttribute('id', 'inventaireInfo');
let inventaireInfoText = document.createElement('p');
inventaireInfoText.setAttribute('id', 'inventaireInfoText');
inventaireInfoText.textContent = 'inventaire';
let inventaireClose = document.createElement('button');
inventaireClose.setAttribute('id', 'inventaireClose');
let inventaireCloseImg = document.createElement('img');
inventaireCloseImg.setAttribute('id', 'inventaireCloseImg');
inventaireCloseImg.setAttribute('src', '../../../asset/carte close.svg');
inventaireClose.appendChild(inventaireCloseImg);

let inventaire = document.createElement('div');
inventaire.setAttribute('id', 'inventaire');

let inventaireSlot1 = document.createElement('div');
inventaireSlot1.setAttribute('id', 'inventaireSlot');
let inventaireSlot1Img = document.createElement('img');
inventaireSlot1Img.setAttribute('id', 'inventaireSlotImg');
inventaireSlot1Img.setAttribute('src', '../../../asset/corde du retour.png');
let inventaireSlot1Text = document.createElement('div');
inventaireSlot1Text.setAttribute('id', 'inventaireSlotText');
let inventaireSlot1TextTitle = document.createElement('div');
inventaireSlot1TextTitle.setAttribute('id', 'inventaireSlotTextTitle');
let inventaireSlot1TextTitleText = document.createElement('p');
inventaireSlot1TextTitleText.setAttribute('id', 'inventaireSlotTextTitleText');
inventaireSlot1TextTitleText.textContent = 'corde du retour';
let inventaireSlot1TextTitleText2 = document.createElement('p');
inventaireSlot1TextTitleText2.setAttribute('id', 'inventaireSlotTextTitleText2');
inventaireSlot1TextTitleText2.textContent = '3000';
let inventaireSlot1TextDescription = document.createElement('p');
inventaireSlot1TextDescription.setAttribute('id', 'inventaireSlotTextDescription');
inventaireSlot1TextDescription.textContent = "permet de revenir au point de départ ' La Corde du Retour 3000, en apparence banale, dissimule un chef-d'œuvre technologique. Faite de fibres hyper-résistantes, elle offre aux explorateurs la possibilité de s'accrocher partout. Sa capacité unique à les ramener instantanément au point de départ en fait l'innovation révolutionnaire de chaque aventure. '";

inventaireSlot1TextTitle.appendChild(inventaireSlot1TextTitleText);
inventaireSlot1TextTitle.appendChild(inventaireSlot1TextTitleText2);
inventaireSlot1Text.appendChild(inventaireSlot1TextTitle);
inventaireSlot1Text.appendChild(inventaireSlot1TextDescription);

let inventaireSlot2 = document.createElement('div');
inventaireSlot2.setAttribute('id', 'inventaireSlot');
let inventaireSlot2Img = document.createElement('img');
inventaireSlot2Img.setAttribute('id', 'inventaireSlotImg');
inventaireSlot2Img.setAttribute('src', '../../../asset/ruby.png');
let inventaireSlot2Text = document.createElement('div');
inventaireSlot2Text.setAttribute('id', 'inventaireSlotText');
let inventaireSlot2TextTitle = document.createElement('div');
inventaireSlot2TextTitle.setAttribute('id', 'inventaireSlotTextTitle');
let inventaireSlot2TextTitleText = document.createElement('p');
inventaireSlot2TextTitleText.setAttribute('id', 'inventaireSlotTextTitleText');
inventaireSlot2TextTitleText.textContent = 'pierre de ';
let inventaireSlot2TextTitleText2 = document.createElement('p');
inventaireSlot2TextTitleText2.setAttribute('id', 'inventaireSlotTextTitleText2');
inventaireSlot2TextTitleText2.textContent = 'téléportation';
let inventaireSlot2TextDescription = document.createElement('p');
inventaireSlot2TextDescription.setAttribute('id', 'inventaireSlotTextDescription');
inventaireSlot2TextDescription.textContent = 'pierre précieuse';

inventaireSlot2TextTitle.appendChild(inventaireSlot2TextTitleText);
inventaireSlot2TextTitle.appendChild(inventaireSlot2TextTitleText2);
inventaireSlot2Text.appendChild(inventaireSlot2TextTitle);
inventaireSlot2Text.appendChild(inventaireSlot2TextDescription);

inventaireSlot1.appendChild(inventaireSlot1Img);
inventaireSlot2.appendChild(inventaireSlot2Img);
inventaire.appendChild(inventaireSlot1);
inventaire.appendChild(inventaireSlot2);

inventaireInfo.appendChild(inventaireInfoText);
inventaireInfo.appendChild(inventaireClose);

inventaireContainer.appendChild(inventaireInfo);
inventaireContainer.appendChild(inventaire);

cadreInventaire.appendChild(inventaireContainer);

document.body.appendChild(cadreInventaire);
cadreInventaire.style.display = 'none';
let buttonInventaire = document.getElementById('buttonInventaire');
buttonInventaire.addEventListener('click', () => {
    if (cadreInventaire.style.display === 'none') {
             cadreInventaire.style.display = 'flex';
        gsap.to(cadreInventaire, { y: 0, duration: 0.57 })
        return;
    } else {
        setTimeout(function () {
            cadreInventaire.style.display = 'none';
        }, 400);
        gsap.to(cadreInventaire, { y: -1500, duration: 0.57 })
    }
});

inventaireClose.addEventListener('click', () => {
    setTimeout(function () {
        cadreInventaire.style.display = 'none';
    }, 400);
    gsap.to(cadreInventaire, { y: -1500, duration: 0.57 })
});


let inventaireSlotText = document.getElementById('inventaireSlotText');
let inventaireSlot = document.getElementById('inventaireSlot');
inventaireSlot1.addEventListener('mouseover', () => {
    inventaireSlot1.appendChild(inventaireSlot1Text);
});

inventaireSlot1.addEventListener('mouseout', () => {
    inventaireSlot1.removeChild(inventaireSlot1Text);
});

inventaireSlot1.addEventListener('click', () => {
    window.location.href = "../../page/acceuil/acceuil.html";
});

inventaireSlot2.addEventListener('mouseover', () => {
    inventaireSlot2.appendChild(inventaireSlot2Text);
});

inventaireSlot2.addEventListener('mouseout', () => {
    inventaireSlot2.removeChild(inventaireSlot2Text);
});
