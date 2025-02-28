let animalCurrentIndex = 0;
const animalCarouselContainer = document.getElementById('animalCarouselContainer');
const animalImages = document.querySelectorAll('.animal-carousel img');

function nextAnimalSlide() {
    animalCurrentIndex = (animalCurrentIndex + 1) % animalImages.length;
    updateAnimalCarousel();
}

function prevAnimalSlide() {
    animalCurrentIndex = (animalCurrentIndex - 1 + animalImages.length) % animalImages.length;
    updateAnimalCarousel();
}

function updateAnimalCarousel() {
    const offset = -animalCurrentIndex * 310;
    animalCarouselContainer.style.transform = `translateX(${offset}px)`;
}

function toggleAnimalInfo() {
    const infoDiv = document.getElementById('animalInfo');
    const activeImage = animalImages[animalCurrentIndex];
    infoDiv.textContent = activeImage.getAttribute('data-info');
    infoDiv.style.display = infoDiv.style.display === 'block' ? 'none' : 'block';
}

//function playAnimalSound() {
//    const activeImage = animalImages[animalCurrentIndex];
//    const sound = new Audio(activeImage.getAttribute('data-sound'));
//    sound.play();
//}

function playSound(animal) {
    let sonido = document.getElementById(animal);
    sonido.play();
}

let isPaused = false; // Variable global para controlar la pausa
